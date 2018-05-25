const fetch = require('node-fetch');

///////////GET THE USER
// async does not handle multiple promises well...
///////////

async function fetchAvatarUrl(userId){
  // return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  // .then(response => response.json())
  // .then(data => data.imageUrl)

  // need to include await
  // otherwise it is a promise
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  const data = await response.json();
  console.log(data);
  // return data.imageUrl
}

///////////GET THE CATS
// without async
// this is faster since it works in parallel
///////////
// function fetchCatAvatars(userId){
//   return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//   .then(response => response.json())
//   .then(user => {
//     user.cats.map(catId => {
//       catId
//       fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//       .then(response => response.json())
//       .then(catData => {
//         catData.imageUrl
//         // console.log(catData)
//         console.log(catData.imageUrl)
//         // return catData
//       })
//     })
//   })
// }

async function fetchCatAvatars(userId){
  // need to include await
  // otherwise it is a promise
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  const user = await response.json();

  ////// refactored below...
  // const catImageUrls = [];
  // async does not handle multiple promises well...
  // for (const catId of user.cats){
  //   const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
  //   const catData = await response.json();
  //   catImageUrls.push(catData.imageUrl);
  // }
  // console.log(catImageUrls);
  // return catImageUrls;

  return await Promise.all(user.cats.map(async function(catId){
    const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json()
    console.log(catData.imageUrl)
    // return catData.imageUrl
  }))
}

const user_result = fetchAvatarUrl(123)
const cat_result = fetchCatAvatars(123)
// console.log(cat_result)
