function absoluteValuesSumMinimization(a) {
    let arr = a;
    let res = [];
    arr.forEach(num => {
        const sum = arr.reduce((accum,next) => {
            return accum + Math.abs(next - num)
        },-0)
        res.push(sum)
    })
    let low = Math.min(...res)
    return arr[res.indexOf(low)]
}
