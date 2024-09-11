// task 1
// let sumTwoNumber = function(a, b){
//   return a + b
// }
// let a =sumTwoNumber(-2,4)
// console.log(a)

// task 2
// let arrow = (num) => {
//   return num > 0 ? "Positive"  : num < 0 ? "Negative" : num === 0 ? "Zero" : "Error"
// }

// let z = arrow("dasd")
// console.log(z);
// task 3
// function endNine(num){
  // for(let i = 1;i <= 10;i++){
  //   console.log(num + " * " + i + " =" + num + i)
  // }
  // let i = 1;
  // while(i <= 10){
  //   console.log(num + " * " + i + " =" + num + i)
  //   i++;
  // }
// }


// endNine(10)

// task4

// console.log(Math.ceil(3.0001))
// console.log(Math.sqrt(16))
// 5
// 4

let a1 = -5
let a2 = -3
let result = 0
for(a1;a1 < a2;a1 += 2){
  if(a1 % 2== 0){
    result += a1
  }
}

function maxNum(num){
  let max = num % 10
  let min = num % 10
  for(let i = num;i > 1;i = Math.floor(i / 10)){
    if(i % 10 >= max){
      max = i % 10
    }
    if(i % 10 <= min){
      min = i % 10
    }
  }
  return min  + " " +  max
}
maxNum(5645)