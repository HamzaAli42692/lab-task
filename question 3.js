var a="3,4,6,7,8,9"
var b = a.split(',').map(Number);
const even = b.filter(number => {
    return number % 2 == 0;
  });
console.log(b)
  console.log(even.reduce((a, b) => a + b,0))