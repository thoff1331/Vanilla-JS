function reverseInParentheses(inputString) {
let array1 = inputString.split('')
let result = array1.shift()
result = array1.pop()
result = array1.join(',')
return array1.reverse().toString().replace(/,/g,"")
}

reverseInParentheses("(bar)")
