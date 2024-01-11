// const menu = {
//     home: document.getElementById('home_menu_button'),
//     about: document.getElementById('about_menu_button'),
//     projects: document.getElementById('projects_menu_button'),
//     contact: document.getElementById('contact_menu_button'),
// };

// const sectionObserver = new IntersectionObserver((entry) => {

//     entry.forEach((e) => {

//         if (e.isIntersecting && e.target.id === 'home') {
//             console.log(e)
//             menu.home.setAttribute('class', 'show_selection');
//         }

//         if (e.isIntersecting && e.target.id === 'about') {
//             console.log(e)
//             menu.about.setAttribute('class', 'show_selection');
//         }
//     })

// });

// const sections = document.querySelectorAll('.section');

// sections.forEach(element => { sectionObserver.observe(element) });