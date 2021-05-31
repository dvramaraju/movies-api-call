// multiplication table
// function fun() {
//   let i = document.getElementById("table").value;
//   for (let j = 1; j < 16; j++) {
//     document.write(`<h2>${i} x ${j} = ${i * j}</h2>`);
//   }
// }

// Positive or Negative Number
function pn() {
  let number = document.getElementById("pan").value;
  parseInt(number) === 0
    ? (document.getElementById("res").innerText = "You Entered Zero")
    : number > 0
    ? (document.getElementById(
        "res"
      ).innerHTML = `${number} is Positive Number`)
    : (document.getElementById(
        "res"
      ).innerHTML = `${number} is Negative Number`);
}

// Prime Number or not
function prime() {
  const number = parseInt(document.getElementById("fed").value);
  let isPrime = true;

  if (number === 1) {
    document.write("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    isPrime
      ? document.write(`${number} is a prime number`)
      : document.write(`${number} is a not prime number`);
  }

  // check if number is less than 1
  else {
    document.write("The number is not a prime number.");
  }
}
