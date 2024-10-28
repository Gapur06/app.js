const numbers = [10, 5, -3, 7, -8, 41];
let negative = numbers.find(function (item){
return item < 0;
})
console.log(negative)
let even = numbers.find(function(item){
  return item % 2 === 0;
})
console.log(even)

let num = numbers.find(function (item){
  return item > 10;
  })
  console.log(num)
