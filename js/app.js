/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables 
 * 
*/
let sections = [...document.querySelectorAll('section')];
let navbarList =document.getElementById('navbar__list');
let links;
let listItem ;


/**
 * End Global Variables
/

/
 * Begin Main Functions
 * 
*/

// build navigation bar dynamiclly
function creatNav(){
 
    for (sec of sections){
    listItem = document.createElement('li');
    let anElm = document.createElement('a');
    anElm.setAttribute("data-nav",`${sec.id}`);
    anElm.classList.add("menu__link");
    const sectionName =sec.getAttribute('data-nav');
    anElm.textContent = `${sectionName}`;
    listItem.appendChild(anElm);
    navbarList.appendChild(listItem);
    }
}

//calling the function to create the nav bar

creatNav();

//set active class after scrolling to the section 
window.onscroll = function () { 
   for(sec of sections){
      if ( 
        window.scrollY <= sec.offsetTop + 414  && 
        window.scrollY >= sec.offsetTop - 343 
      ) { 
        sec.classList.add("your-active-class"); 
      } else {
        sec.classList.remove("your-active-class"); 
      } 
    };
}

//function to scroll to a specific section 
links = document.querySelectorAll(".menu__link");

  links.forEach(element => {
    element.addEventListener('click',() =>
    {
      let item = document.getElementById(element.getAttribute("data-nav"));
      item.scrollIntoView({behavior:"smooth"});
    })
    
});
//make sections in nav bar active
links.forEach((element) => {
  element.onclick = function () {
    links.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  };
});

/**
 * End Main Functions
 * 
*/














