// const url =  'https://testimonialapi.toolcarton.com/api';

let testimonial = document.getElementById('showApi');
let carrousel1 = document.getElementById('carrousel')
let buttonLeft1 = document.getElementById('buttonLeft')
let buttonRight = document.getElementById('buttonRight')

window.addEventListener('load', function() {

    async function fetchApis() {
        const url =  'https://testimonialapi.toolcarton.com/api';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    

    async function renderUsers() {
        let users = await fetchApis();
        let html = '';
        users.forEach(user => {
            let htmlSegment = `<div class="user">
                                <img src="${user.avatar}" >
                                <h2>${user.name} ${user.message}</h2>
                                <div class="email"><a href="email:${user.message}">${user.designation}</a></div>
                            </div>`;
    
            html += htmlSegment;
        });
    
       
        testimonial.innerHTML = html;
    }
    
    renderUsers();

    counter = 0 ;
    const setImage = () => {
    carrousel1.src= testimonial[counter]
    counter = (counter +1) % testimonial.length;
    
    }
    
    setInterval(setImage, 1000);
})

