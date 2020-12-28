// using Regex to accomplish this task saved me a lot of code and also gave me a better understanding of how regex works and I hope this will be helpful in a JavaScript role in the future.

// function variableName(name) {
// // name must contain only english letters
// let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','t','u','r','v','w','x','y','z','_']
// let numbers = [1,2,3,4,5,6,7,8,9]
// // create an array with all english letters 
// let arr = name.split('')
// for(let i = 0; i < arr.length;i++) {
//     if(letters.includes(arr[i].toLowerCase()) ||  numbers.includes(arr[0] || arr[0] === '_') && arr[i] != ' ')  {        
//     return false 
//     } else if(numbers.includes(arr[0])) {
        
//         return false
//     }

// }
// }

function variableName(name) {
    return  /^[a-z_]\w*$/i.test(name)
}
first = () => {
let   
}