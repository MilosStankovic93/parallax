let nav = document.querySelector("nav");
let stars = document.querySelector(".stars");
let stars2 = document.querySelector(".stars2")
let moon = document.querySelector(".moon");
let rock = document.querySelector(".rock");
let castle = document.querySelector(".castle");
let bottom = document.querySelector(".bottom");
let lamp = document.querySelector(".lamp");

let text = document.querySelector(".text");



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);

    stars.style.left = value * 0.25 + 'px';
    stars2.style.left = value * 0.25 + 'px';
    moon.style.bottom = value * -0.5 + 'px';
    rock.style.bottom = value * -0.7 + 'px';
    castle.style.bottom = value * -0.20 + 'px';
    

   
    nav.style.marginTop = value * 0.7 + "px";


    text.style.right = -100 + value * 0.4 + '%';
    

})



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const sideNav = document.querySelector('nav');
let navOpen = false;


const navDugme = document.querySelector('.menu-btn_burger');



function openNav(){

	if(!menuOpen && !navOpen){
		menuBtn.classList.add('open');
		menuOpen = true;

        sideNav.classList.add('open');
        navOpen = true;
	}
	else{
		menuBtn.classList.remove('open')
		menuOpen = false;

        sideNav.classList.remove('open')
		navOpen = false;
	}
}