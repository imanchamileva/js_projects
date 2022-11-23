const buttonOpen = document.querySelector('.button-open');

const showModal = document.querySelector('.modalSection2')

const modalSection1 = document.querySelector('.modalSection1')

const modalButton = document.querySelector('.buttonClose')


buttonOpen.addEventListener('click', function () {

    showModal.style.display = "block";


})

buttonOpen.addEventListener('click', function () {

    modalButton.style.display = "block";

})

buttonOpen.addEventListener('click', function () {

    modalSection1.style.display = "none";
})


modalButton.addEventListener('click', function () {

    modalSection1.style.display = "block";
})

modalButton.addEventListener('click', function () {

    showModal.style.display = "none";
})