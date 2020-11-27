//Navigation - Variable (Global)
const allNav = document.getElementById('navbar__list');

//Section - Variable (Global) 
const allSection = document.querySelectorAll('section');

//Navigation Bar
const navCreator = () => {

    let navUI = '';
    allSection.forEach(section => {

        const ID = section.id;
        const navData = section.dataset.nav

        navUI += `<li><a class= "menu__link" href="#${ID}">${navData}</a></li>`;

    });

    allNav.innerHTML = navUI;
};

navCreator();


// largest value that is less than or equal to number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};


//remove active class
const clearActive = (section) => {
    section.classList.remove('your-active-class');
    section.classList.remove('focus');
};

//adding active class
const insertActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.classList.add('focus');
    };
};

//implement actual function

const activeSection = () => {
    allSection.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        clearActive(section);
        insertActive(inviewport(), section);

    });
};

window.addEventListener('scroll', activeSection);
//Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const topButton = document.getElementById("topButton");

//User scrolling 20px down from top
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

//Go to top on click
function topFunction() {
    document.body.scrollTop = 0; // Mac
    document.documentElement.scrollTop = 0; // For Chrome
}