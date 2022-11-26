const buttonOpen = document.querySelector('.buttonOpen');

const modalButton = document.querySelector('.buttonClose');

const modalSection1 = document.querySelector('.modalSection1');

const modalSection2 = document.querySelector('.modalSection2');



buttonOpen.addEventListener('click', function () {

    modalSection2.classList.add('open-modal')
})


modalButton.addEventListener('click', function () {

    modalSection2.classList.remove('open-modal')
})

// buttonOpen.addEventListener('click', function () {

//     showModal.style.display = "block";


// })

// buttonOpen.addEventListener('click', function () {

//     modalButton.style.display = "block";

// })

// buttonOpen.addEventListener('click', function () {

//     modalSection1.style.display = "none";
// })


// modalButton.addEventListener('click', function () {

//     modalSection1.style.display = "block";
// })

// modalButton.addEventListener('click', function () {

//     showModal.style.display = "none";
// })