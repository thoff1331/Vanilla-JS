// class Movie  {
//  constructor(Title,Director,Genre,Release,Rating) {
//   this.Title = Title;
//   this.Director = Director;
//   this.Genre = Genre;
//   this.Release = Release;
//   this.Rating = Rating  
//  } 

//  getOverView = () =>  {
//    console.log(`${this.Title} a ${this.Genre} directed by ${this.Director} was released in ${this.Release} it received a rating of ${this.Rating}`)
//  }
// }

// const IHC = new Movie('IHC','QCV','Comedy',2009,'4.5')
// console.log(IHC.getOverView())

// symbols for private methods in an object


// const username = Symbol('username');
// const password = Symbol('password');


// const user = {
// [username]: 'tt2416',
//  [password]: '123456'
// }

// console.log(user.username, user.password)


// Recursion


function fac (num){
if(num === 1) {
  return 1;
}

return num *  fac(num - 1)
};

fac(5)