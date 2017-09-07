var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(a){
  var xSq = Math.pow(a.x, 2);
  var ySq = Math.pow(a.y, 2);
  var ySq = xSq + ySq;
  return Math.sqrt(ySq);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);