/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//have the axiso.get('<path>') to access the information from github, but need to assign it to a const to use. Example below gets the information on the page, but breaks the object.
//V1
// const data = axios.get('http://api.github.com/users/seanaleid')
//     .then( response => {
//         // deal with the response data in here
//         console.log(response);
//         // response.data.forEach(item => {
//         //   let newPromise = getPromise(item);
//         //   entrypoint.appendChild(newPromise);
//         // })
//         // response.data.
//     })
//     .catch( err => {
//         // deal with the error in here
//         console.log('Boy, go back and check your code because you did something wrong!')
//     })


//Can I use axios data in the component below? --> NO....breaks the code. I need to point my info to the html page.
//version 2
// axios.get('http://api.github.com/users/seanaleid')
//     .then( response => {
//         // deal with the response data in here
//         console.log(response);
//         response.data.function(item =>{
//           const newCard = getPromise(item);
//           cards.appendChild(newCard);
//         })
//     })
//     .catch( err => {
//         // deal with the error in here
//         console.log('Boy, go back and check your code because you did something wrong!')
//     })

//I have to call my function into the axios.get .then part....I need to restructure
//version 3
// axios.get('http://api.github.com/users/seanaleid')
// .then( response => {
//     // deal with the response data in here
//     console.log(response);
    
//     // const newData = response.data;
//     console.log('does this work?');
//     const newCard = getPromise(response.data);
//     const cards = document.querySelector('.cards');
//     cards.appendChild(div);
//     console.log("does this work?");
//     cards.appendChild(newCard);
    
// })
// .catch( err => {
//     // deal with the error in here
//     console.log('Boy, go back and check your code because you did something wrong!')
// })


//
//Version 4
// axios.get('http://api.github.com/users/seanaleid')
// .then( response => {
//     // deal with the response data in here
//     console.log(response);
//     console.log('does this work?');
//     const newCard = getPromise(response.data);
//     const container = document.querySelector('.container');
//     container.appendChild(newCard);
    
// })
// .catch( err => {
//     // deal with the error in here
//     console.log('Boy, go back and check your code because you did something wrong!')
// })

//Version 5
const cards = document.querySelector('.cards');

axios.get('http://api.github.com/users/seanaleid')
.then( response => {
    // deal with the response data in here
    console.log(response);
    const getInfo = response.data;
    const passMe = getPromise(getInfo);
    cards.appendChild(passMe);
    
})
.catch( err => {
    // deal with the error in here
    console.log('Boy, go back and check your code because you did something wrong!')
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3> //data.name
    <p class="username">{users user name}</p> //data.login
    <p>Location: {users location}</p> //data.location
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a> //data.html_url
    </p>
    <p>Followers: {users followers count}</p> //data.followers
    <p>Following: {users following count}</p> //data.following
    <p>Bio: {users bio}</p> //data.bio
  </div>
</div>

*/

function getPromise(object){
//create new elements from the template above ^
const div = document.createElement('div'),
      img = document.createElement('img'),
      divCardInfo = document.createElement('div'),
      h3 = document.createElement('h3'),
      pUserName = document.createElement('p'),
      pLocation = document.createElement('p'),
      pProfile = document.createElement('p'),
      a = document.createElement('a'),
      pFollowers = document.createElement('p'),
      pFollowing = document.createElement('p'),
      pBio = document.createElement('p');

//append the children
div.appendChild(img);
div.appendChild(divCardInfo);
divCardInfo.appendChild(h3);
divCardInfo.appendChild(pUserName);
divCardInfo.appendChild(pLocation);
divCardInfo.appendChild(pProfile);
pProfile.appendChild(a);
divCardInfo.appendChild(pFollowers);
divCardInfo.appendChild(pFollowing);
divCardInfo.appendChild(pBio);

//add the classes
div.classList.add('card');
divCardInfo.classList.add('card-info');
h3.classList.add('name');
pUserName.classList.add('user');

//add content
img.src = object.avatar_url;
h3.textContent = object.name;
pUserName.textContent = object.login;
pLocation.textContent = `Location: ${object.location}`;
a.textContent = object.avatar_url;
pFollowers.textContent = `Followers: ${object.followers}`;
pFollowing.textContent = `Following: ${object.following}`;
pBio.textContent = `Bio: ${object.bio}`;


// const cards = document.querySelector('.cards');
// cards.appendChild(div);
// console.log("does this work?")


return div
}



// getPromise(data);
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
