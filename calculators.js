function rectCalculator(length, width) {

  rectangleArea = length * width;

  document.querySelector('#answer').innerHTML = rectangleArea;

}

function clickedMe() {

  alert('I have been clicked!!')

}

function reset() {
  document.querySelector('#answer').innerHTML = '000';
  document.querySelector('#length').value = '';
  document.querySelector('#width').value = '';
}

function validate() {

  var length;
  var width;
  var rectangleArea;

  length = parseInt(document.querySelector('#length').value);
  width = parseInt(document.querySelector('#width').value);


  if (width <= 0 || isNaN(Number(width))) {

    alert('Please enter a valid width');
    document.querySelector('#width').value = '';



  } else if (length <= 0 || isNaN(Number(length))) {

    alert('Please enter a valid length');
    document.querySelector('#length').value = '';


  } else {
    rectCalculator(length, width);
  }
}

/* ---------------------------------------------------------------*/

function triCalculator(base, hieght) {
  var triangleArea;


  triangleArea = (base / 2) * hieght;

  document.querySelector('#answer').innerHTML = triangleArea;

}

function clickedMe() {

  alert('I have been clicked!!')

}

function triReset() {
  document.querySelector('#answer').innerHTML = '000';
  document.querySelector('#hieght').value = '';
  document.querySelector('#base').value = '';
}

function triValidate() {

  var base;
  var hieght;

  base = parseInt(document.querySelector('#base').value);
  hieght = parseInt(document.querySelector('#hieght').value);


  if (base <= 0 || isNaN(Number(base))) {

    alert('Please enter a valid base');
    document.querySelector('#base').value = '';



  } else if (hieght <= 0 || isNaN(Number(hieght))) {

    alert('Please enter a valid hieght');
    document.querySelector('#hieght').value = '';


  } else {
    triCalculator(base, hieght);
  }
}

/*----------------------------------------------------*/

function simpleCalculator(principal, interestRate, years) {
  var simpleInterest;


  simpleInterest = principal * (1 + (interestRate / 100) * years);
  growth = simpleInterest - principal;

  document.querySelector('#answer').innerHTML = simpleInterest;
  document.querySelector('#answer_years').innerHTML = years;
  document.querySelector('#answer_growth').innerHTML = growth;


}

function clickedMe() {

  alert('I have been clicked!!')

}

function simpleReset() {
  document.querySelector('#answer').innerHTML = '000';
  document.querySelector('#principal').value = '';
  document.querySelector('#interest_rate').value = '';
  document.querySelector('#years').value = '';
  document.querySelector('#answer_years').innerHTML = '000';
  document.querySelector('#answer_growth').innerHTML = '000';

}

function simpleValidate() {

  var principal;
  var interestRate;
  var years;

  principal = parseInt(document.querySelector('#principal').value);
  interestRate = parseInt(document.querySelector('#interest_rate').value);
  years = parseInt(document.querySelector('#years').value);



  if (principal <= 0 || isNaN(Number(principal))) {

    alert('Please enter a valid principal');
    document.querySelector('#principal').value = '';



  } else if (interestRate <= 0 || isNaN(Number(interestRate))) {

    alert('Please enter a valid interestRate');
    document.querySelector('#interest_rate').value = '';


  } else if (years <= 0 || isNaN(Number(years))) {

    alert('Please enter a valid years');
    document.querySelector('#years').value = '';


  } else {
    simpleCalculator(principal, interestRate, years);
  }
}

/*-------------------------------------------------------------------------------*/

  var magicCent;
  function magicCalculator(days) {

  // A = Future Amount = MagicCent
  // P = Principal = magicPrincipal
  // r = Interest Rate = magicInterestRate
  // n = Number of periods per year = n
  // t = Number of years = days

  // A = P*(1 +(r/n))^(n*t)

  var magicPrincipal = 0.01;
  var magicInterestRate = 0.0;
  var n=1;

  //Math.pow(4, 3);
  magicCent = magicPrincipal * (Math.pow((1+(magicInterestRate / n)), (magicInterestRate * days)));
  magicCent = magicCent/2;

magicCent = (magicCent).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67


  document.querySelector('#answer').innerHTML = magicCent;


  }

  function clickedMe() {

    alert('I have been clicked!!')

  }

  function magicReset() {
    document.querySelector('#answer').innerHTML = '000';
    document.querySelector('#days').value = '';

  }

  function magicValidate() {

    var days;

    days = parseInt(document.querySelector('#days').value);



    if (days <= 0 || isNaN(Number(days))) {

      alert('Please enter a valid days');
      document.querySelector('#days').value = '';





    } else {
      magicCalculator(days);
    }
  }
