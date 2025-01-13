console.log("hello World")

// var a = 10
// b();
// var d = 60;
// function b () {
//     var c = 25;
//     console.log(d);
// }

// const user = fetch('https://api.github.com/users/princeo1');
// console.log(user)
// user.then(function() {
//     console.log(user)
// })
// .catch(function () {
//     console.log('Api calling failed')
// })

// fetch('https://api.github.com/users/princeo1')
// .then(res => res.json())
// .then(res => console.log(res));

// fetch('https://api.github.com/users/princeo1') // fetch is a promise which gives you a response
// .then(function (res) {
//     return res.json()      // Now to convert response to json we do .json and it is again a promise
// })
// .then(function (res) {
//     console.log(res);       // now to print we do console.log()
// })
// .catch(function (){
//     console.log('Api Not working')
// })

// fetch() => Response.json() => jsonValue

const API_URL = 'https://api.github.com/users/princeo1'

// async function handlePromise () {
//     const res = await fetch(API_URL)  // we need to wait till promise returned by fetch is fullfilled
//     const json_val_of_res = await res.json(); // we need to wait till promise returned by res.json is fullfilled
//     console.log(json_val_of_res)
// }

// handlePromise();

 // Error Handling

//  async function handlePromiseWithErrorUsingTry () {
//     try {
//         const res = await fetch('https://abc')  // we need to wait till promise returned by fetch is fullfilled
//         const json_val_of_res = await res.json(); // we need to wait till promise returned by res.json is fullfilled
//         console.log(json_val_of_res)
//     }
//     catch (err){
//         console.log(err)
//     }
// }

// handlePromiseWithErrorUsingTry();

async function handlePromiseWithErrorUsingCatch() {
    const res = await fetch(API_URL)  // we need to wait till promise returned by fetch is fullfilled
    const json_val_of_res = await res.json(); // we need to wait till promise returned by res.json is fullfilled
    console.log(json_val_of_res)
}

handlePromiseWithErrorUsingCatch().catch (function (err){
    console.log(err)
});
