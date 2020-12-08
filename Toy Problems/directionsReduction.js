const opposites = {
  'N': 'S',
  'S': 'N',
  'E': 'W',
  'W': 'E'
}
function dirReduc(arr) {
  const stack = []
  arr.forEach(dir => {
    if (stack.length) {
      const prevDir = stack.pop()
      if (prevDir !== opposites[dir]) {
        stack.push(prevDir)
        stack.push(dir)
      }
    } else {
      stack.push(dir)
    }
  })
  return stack
}

dirReduc(['N', 'S', 'E', 'S'])


// Opposites only cancel when they are next to each other or if prevDir is the next index in the directions array 