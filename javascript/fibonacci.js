function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  let fibo = [0, 1]
  for(i = 0; i < num - 1; i++){
    const sum = fibo[0] + fibo[1]
    fibo = [fibo[1], sum]
  }
  return fibo[1];
}

// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   }
//   let fibo = [0, 1]
//   for(i = 2; i < num + 1; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2]
//   }
//   return fibo;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
