const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

// function averageScore(arr) {
//     let sumScore = arr.reduce(function(acc, item) {
//         let score = item.score;
//         return acc + score;
//     }, 0)
//     let sumWeight = arr.reduce(function(acc, item) {
//         let weight = item.weight;
//         return acc + weight;
//     }, 0)
// }

let averageScore = scores.reduce(function(acc, item) {
    return acc + item.score * item.weight
}, 0)
console.log(averageScore);