// sorts scores into 5 categories and displays the percentage of people who scored in that range
function something(scores) {
let poor = 0;
let fair = 0;
let good = 0; 
let excellent = 0;
let elite = 0;
let len = scores.length 
for(let i = 0; i < scores.length; i++) {
if(scores[i] >= 300 && scores[i] <= 599) {
  poor++
} else if (scores[i] >= 600 && scores[i] <= 699 ) {
  fair++
} else if( scores[i] >= 700 && scores[i] <= 749) {
  good++
} else if(scores[i] >= 750 && scores[i] <= 799) {
excellent++
}  else if(scores[i] >= 800 ) {
  elite++
}
}
let sortedArray =  [`Poor: ${(poor /len * 100).toFixed(2)}%`,`Fair:${(fair /len * 100).toFixed(2)}%`,`Good: ${(good /len * 100).toFixed(2)}%`,`Excellent: ${(excellent /len * 100).toFixed(2)}%`,`Elite: ${(elite /len * 100).toFixed(2)}%`]
  let noneEmpty = sortedArray.filter(x => x.split(':')[1] != '0.00%')
  return noneEmpty
}


something([330,723,730,825])