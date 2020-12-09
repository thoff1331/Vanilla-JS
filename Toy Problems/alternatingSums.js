function alternatingSums(a) {
let team1 = []
let team2 = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;
for(let i = 0; i < a.length;i++) {
  if(i % 2 === 0) {
    team2.push(a[i])
} else {
  team1.push(a[i])
}
}
 team2 = [team2.reduce(reducer,0)]
 team1 = [team1.reduce(reducer,0)] 
 return team2.concat(team1)

}
alternatingSums([80,0])