function balanceCalculator() {

// A = Future Amount = MagicCent
// P = Principal = magicPrincipal
// r = Interest Rate = magicInterestRate
// n = Number of periods per year = n
// t = Number of years = days

// A = P*(1 +(r/n))^(n*t)

 let futureAmount;
 let principal;
 let interestAmount;
 let frequency;
 let years;

principal = 1000;
interestAmount = 10;
frequency = 1;
years = 5;
interestAmount =interestAmount /100;
futureAmount = principal * Math.pow((1 + interestAmount/frequency),(frequency * years));

futureAmount = (futureAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67


// document.querySelector('#answer').innerHTML = futureAmount;

console.log(futureAmount);
}

balanceCalculator();

function principalCalculator() {

// A = Future Amount = MagicCent
// P = Principal = magicPrincipal
// r = Interest Rate = magicInterestRate
// n = Number of periods per year = n
// t = Number of years = days

// A = P*(1 +(r/n))^(n*t)

 let interestRate
 let futureAmount;
 let principal;
 let interestAmount;
 let frequency;
 let years;

futureAmount = 1610.51;
interestRate = 10;
frequency = 1;
years = 5;
interestRate = interestRate / 100;

principal = futureAmount/(Math.pow(1 + (interestRate / frequency),(frequency * years)));

principal = (principal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67


// document.querySelector('#answer').innerHTML = futureAmount;

console.log(principal);
}

principalCalculator();


// function clickedMe() {
//
//   alert('I have been clicked!!')
//
// }
//
// function magicReset() {
//   document.querySelector('#answer').innerHTML = '000';
//   document.querySelector('#days').value = '';
//
// }
//
// function magicValidate() {
//
//   var days;
//
//   days = parseInt(document.querySelector('#days').value);
//
//
//
//   if (days <= 0 || isNaN(Number(days))) {
//
//     alert('Please enter a valid days');
//     document.querySelector('#days').value = '';
//
//



//   } else {
//     magicCalculator(days);
//   }
// }
