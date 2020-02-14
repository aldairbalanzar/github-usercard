/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https:api.github.com/users/aldairbalanzar')

  /* Step 2: Inspect and study the data coming back, this is YOUR 
     github info! You will need to understand the structure of this 
     data in order to use it to build your component function 
  
     Skip to Step 3.
  */
  .then(res => {
    entry.append(createCard(res));
  })
  .catch(res => {
    console.log('failed to load user card', res);
  })
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(obj) {
  let card = document.createElement('div'),
    cardImg = document.createElement('img'),
    cardDiv = document.createElement('div'),
    cardName = document.createElement('h3'),
    cardUsername = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    gitLink = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

    cardImg.src = obj.data.avatar_url;
    cardName.textContent = obj.data.name;
    cardUsername.textContent = obj.data.login;
    location.textContent = obj.data.location;
    gitLink.href = obj.data.url;
    gitLink.textContent = obj.data.url;
    followers.textContent = obj.data.followers;
    following.textContent = obj.data.following;
    bio.textContent = obj.data.bio
    

    card.classList.add('card');
    cardDiv.classList.add('card-info')
    cardName.classList.add('name');
    cardUsername.classList.add('username');

    profile.append(gitLink);
    cardDiv.append(cardName, cardUsername, location, profile, followers, following, bio)
    card.append(cardImg, cardDiv);

    console.log(card);
    console.log(obj)
    return card;
}

const entry = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['kkslider2130', 'biskoi', 'reidysj', 'scottSmith23', 'ArtmanG'];

followersArray.forEach(item => {
  axios.get(`https:api.github.com/users/${item}`)
  .then(res => {
    entry.append(createCard(res));
  })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
