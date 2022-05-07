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
