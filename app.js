gsap.fromTo(".intro-text", {opacity:0}, {opacity: 1, duration: 0.5, delay: 0.5});
gsap.fromTo(".cta1", {opacity:0}, {opacity: 1, duration: 0.5, delay: 1});
gsap.fromTo(".cta2", {opacity:0}, {opacity: 1, duration: 0.5, delay: 1.25});
gsap.fromTo(".cta3", {opacity:0}, {opacity: 1, duration: 0.5, delay: 1.5});
gsap.fromTo(".cta4", {opacity:0}, {opacity: 1, duration: 0.5, delay: 1.75});
gsap.fromTo(".main-info-wrapper", {opacity:0}, {opacity: 1, duration: 1, delay: 2.5});

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');

});

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

const openProjectsPage = document.getElementById('open_projects_page')
const projectsPage = document.getElementById('projects_page')
const closeMainPage = document.getElementById('open_main_page')
const closeProjectsPage = document.getElementById('projects-page-close')
openProjectsPage.addEventListener('click', function(e){
    e.preventDefault();
    projects_page.classList.add('active');
		closeMainPage.classList.add('nonactive')
})

closeProjectsPage.addEventListener('click', () => {
    projects_page.classList.remove('active');
		closeMainPage.classList.remove('nonactive')
})

const openAboutPage = document.getElementById('open_about_page')
const aboutPage = document.getElementById('about_page')
const closeAboutPage = document.getElementById('about-page-close')

openAboutPage.addEventListener('click', function(e){
    e.preventDefault();
    aboutPage.classList.add('active');
		closeMainPage.classList.add('nonactive')
})

closeAboutPage.addEventListener('click', () => {
    aboutPage.classList.remove('active');
		closeMainPage.classList.remove('nonactive')
})
