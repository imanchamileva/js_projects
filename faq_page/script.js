button1 = document.querySelector('.firstPartButton');
button2 = document.querySelector('.secondPartButton');
button3 = document.querySelector('.thirdPartButton');
part1 = document.querySelector('.part1');
text1= document.querySelector('.text1');
text2= document.querySelector('.text2');
text3= document.querySelector('.text3');

button1.addEventListener('click', function () {

    text1.classList.toggle('showText');

})



button2.addEventListener('click', function () {

    text2.classList.toggle('showText');

})

button3.addEventListener('click', function () {

    text3.classList.toggle('showText');

})