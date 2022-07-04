// const url =  'https://testimonialapi.toolcarton.com/api';

// const testimonial = document.getElementById('showApi');




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
    
        let container = document.getElementById('showApi');
        container.innerHTML = html;
    }
    
    renderUsers();


