// const url =  'https://testimonialapi.toolcarton.com/api';

let testimonial = document.getElementById('showApi');
let carrousel1 = document.getElementById('carrousel')
let buttonLeft1 = document.getElementById('buttonLeft')
let buttonRight = document.getElementById('buttonRight')
let avatar = document.getElementById('avatar')
let message = document.getElementById('message')
let name = document.getElementById('name')
let designation = document.getElementById('designation')




window.addEventListener('load', function () {

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
        let users = await fetchApis();
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

        let name1 = users[1].name
        let avatar1 = users[1].avatar
        let message1 = users[1].message
        let designation1 = users[1].designation

        testimonial.innerHTML = `<p>${name1}</p>` + `<img src="${avatar1}">` + `<h2> ${designation1}</h2>` + `<h4> ${message1}</h4>`;
    }

    renderUsers();

    counter = 0;
    const setImage = () => {
        carrousel1.src = testimonial[counter]
        counter = (counter + 1) % testimonial.length;

    }

    setInterval(setImage, 1000);
})

