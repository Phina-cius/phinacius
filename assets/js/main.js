/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})



//this is for naimation part
// JavaScript for Auto Typing and Peel Away Effect


const textArray = ["Web Developer", "Data Analyst", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing in mi
const delayAfterTyping = 1000; // Delay before peeling starts in milliseconds
const peelContainer = document.getElementById("peel-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        // Append each character one by one to the container
        let span = document.createElement("span");
        span.textContent = textArray[textIndex].charAt(charIndex);
        peelContainer.appendChild(span);
        charIndex++;
        
        // Continue typing with a delay
        setTimeout(typeText, typingSpeed);
    } else {
        // Start peeling effect after a delay
        setTimeout(startPeeling, delayAfterTyping);
    }
}

function startPeeling() {
    const spans = peelContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
        span.classList.add("peel");
        span.style.animationDelay = `${index * 0.1}s`; // Delay each letter's peeling for a cascading effect
    });

    // Clear the text and move to next word after peeling effect
    setTimeout(() => {
        clearText();
    }, 1000 + spans.length * 100); // Adjust timing based on peeling duration
}

function clearText() {
    while (peelContainer.firstChild) {
        peelContainer.removeChild(peelContainer.firstChild);
    }
    
    // Move to the next text in the array
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    
    // Reset character index
    charIndex = 0;
    
    // Start the typing effect again
    typeText();
}

// Initial call to start typing effect
document.addEventListener("DOMContentLoaded", () => {
    typeText();
});


//here is all about whatsapp
// Optional: Show a message when hovering over the WhatsApp button
const whatsappButton = document.querySelector('.whatsapp-float');
whatsappButton.addEventListener('mouseenter', () => {
    whatsappButton.title = "Chat with me on WhatsApp!";
});



//this is the delay in appearing 
document.addEventListener("DOMContentLoaded", () => {
    // Delay time in milliseconds (e.g., 5000ms = 5 seconds)
    const delayTime = 5000;

    // Select the WhatsApp button
    const whatsappButton = document.getElementById('whatsapp-button');

    // Set a timeout to show the button after the delay
    setTimeout(() => {
        whatsappButton.style.opacity = '1';
        whatsappButton.style.visibility = 'visible';
    }, delayTime);
});

