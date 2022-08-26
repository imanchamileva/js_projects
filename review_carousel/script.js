// const url =  'https://testimonialapi.toolcarton.com/api';

let testimonial = document.getElementById('showApi');
let carrousel1 = document.getElementById('carrousel')
let buttonLeft = document.getElementById('buttonLeft')
let buttonRight = document.getElementById('buttonRight')
let avatar = document.getElementById('avatar')
let message = document.getElementById('message')
let name = document.getElementById('name')
let designation = document.getElementById('designation')



let currentItem = 0;
window.addEventListener('load', function() {

    async function fetchApis() {
        const url = 'https://testimonialapi.toolcarton.com/api';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }


    async function renderUsers() {

        let showUsers = await fetchApis();
        // let html = [];
        // users.forEach(user => {
        //     let htmlSegment = `<div class="user">
        //                         <img src="${user.avatar}" >
        //                         <h2>${user.name} ${user.message}</h2>
        //                         <div class="email"><a href="email:${user.message}">${user.designation}</a></div>
        //                     </div>`;

        //     html += htmlSegment;
        // }
        // );



        let name = showUsers[currentItem].name
        let avatar = showUsers[currentItem].avatar
        let message = showUsers[currentItem].message
        let designation = showUsers[currentItem].designation

        testimonial.innerHTML = `<img src="${avatar}">` + `<p>${name}</p>` + `<h2> ${designation}</h2>` + `<h4> ${message}</h4>`;


        console.log(showUsers);


        buttonRight.addEventListener('click', function() {
            currentItem++;
            if (currentItem > showUsers.length - 1) {
                currentItem = 0
            }
            renderUsers()

        })


        buttonLeft.addEventListener('click', function() {
            currentItem--;
            if (currentItem < 0) {
                currentItem = showUsers.length - 1;
            }
            renderUsers();
        })
    }
    renderUsers();
}
)

