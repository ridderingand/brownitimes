// const measure = (a,b) => {
//     if(a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// measure(8,4);

// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(i + " is even");
  } else if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Write a JavaScript conditional statement to find the largest of five numbers.
// display it in an alert box

// let grades = [
//   {
//     name: "David",
//     marks: 80
//   },
//   {
//     name: "Vinoth",
//     marks: 77
//   },
//   {
//     name: "Divya",
//     marks: 88
//   },
//   {
//     name: "Ishitha",
//     marks: 95
//   },
//   {
//     name: "Thomas",
//     marks: 68
//   }
// ];

let grades = [80, 77, 88, 95, 68];


// const average = (a,b) => {
//     // console.log(a);
//     return a + b
// }


console.log(grades.reduce((a, b) => a + b) / grades.length)

// document.getElementById('app').innerHTML = grades.reduce(average);

// grades.reduce(sum);
// console.log(sum);


// var numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

