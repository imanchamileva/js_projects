let myNumber = document.getElementById('number');
let firstButton1 = document.getElementById('firstButton');
let secondButton = document.getElementById('secondButton');
let thirdButton = document.getElementById('thirdButton');


let myNumber1 = 0

firstButton1.addEventListener('click', function () {

   myNumber1 = myNumber1 + 1
   myNumber.innerHTML = `${myNumber1}`
  
   
})

secondButton.addEventListener('click', function () {

    myNumber1 = myNumber1 - 1
    myNumber.innerHTML = `${myNumber1}`
   
    
 })
 
 thirdButton.addEventListener('click', function () {

    myNumber1 = '0'
    myNumber.innerHTML = `${myNumber1}`
   
    
 })