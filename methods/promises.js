// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if(a == 2) {
// resolve('success')
//   } else {
//     reject('Failed')
//   }
// })

// p.then((message) => {
//   console.log('the then', message)
// }).catch((message) => {
//   console.log('this is the catch',message)
// })

const firstMovie = new Promise((resolve,reject) => {
  resolve('Movie One')
})

const secondMovie = new Promise((resolve,reject)=> {
  resolve('Movie two')
})

const thirdMovie = new Promise((resolve,reject) => {
  resolve('Movie Three')
})


Promise.race([
  firstMovie,secondMovie,thirdMovie
]).then((message) => {
console.log(message)
})
// Promise.all
