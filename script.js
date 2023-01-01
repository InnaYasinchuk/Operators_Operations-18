// 1
let salaryFirstMonth = prompt("Enter first month salary", "1");
let salarySecondMonth = prompt("Enter second month salary", "2");
let sum = +salaryFirstMonth + +salarySecondMonth;
alert(`Your salary for 2 months is: $${sum}`);

// 2
let totalSalary = sum + 1;
let message = alert(
  `Your have extra bonus! Your total salary was: $${sum}. It's increase for $1 and now it is: $${totalSalary}.`
);

//3 option 1
let minSalary = 2000;
if (totalSalary >= minSalary) {
  alert("Will you work next? true");
} else {
  alert("Will you work next? false");
}

//3 option 2

// let work = confirm('Is your salary more than $2000?');
// alert(`Will you work next? ${work}`)

//3 option 3

// let work = totalSalary >= minSalary ? alert(`Will you work next? true`): alert(`Will you work next? false`);


//4
if (totalSalary >= minSalary) {
  alert("I'm ready to work!");
} else {
  alert("I'm out");
}










// let data = prompt('Please enter your data');

//
// alert(`Your fullname is: ${name} ${surname}, your age is: ${age}, admin status: ${status}`);

// 3
