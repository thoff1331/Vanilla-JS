// Testing out different implementations of sets

function setPractice(arr) {
  let Trevor = new Set(arr)
  Trevor.add(7)
  Trevor.add({
    trevor: 'name',
    age: 21
  })
  for(let item of Trevor) {
  }
  let myArray  = Array.from(Trevor)
  console.log(myArray)
}

setPractice([1,2,3])