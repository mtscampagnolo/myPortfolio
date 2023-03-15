const cypher = event => {
    //creates a cypher effect
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&.*';
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split('')
            .map((letter, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * letters.length)]})
            .join('');

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        
        iterations += 1 / 3;

    }, 30);
}

const fadeMenu = event => {
    //Makes the other menu items fade while keeps the trigger
    document.querySelectorAll('.nav-link').forEach(navLink => navLink.style.opacity = .2);
    event.target.style.opacity = 1;
}

const fadeBack = () => {
    //Return all menu items to original opacity
    document.querySelectorAll('.nav-link').forEach(navLink => navLink.style.opacity = 1);
}

const togglerAnimation = () => {
    //Rotate the toggler whenever clicked and change the color base on input
    const input = document.getElementById('menu-toggle');
    const toggler = document.querySelector('.menu-icon');

    !input.checked ? 
        toggler.style.rotate = '135deg' : 
        toggler.style.rotate = '0deg';
}

const menuOff = () => {
    //Close the menu after clicking in a menu link
    document.getElementById('menu-toggle').checked = false;
    document.querySelector('.menu-icon').style.rotate = '0deg';
}

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.addEventListener('mouseover', cypher);
        navLink.addEventListener('mouseover', fadeMenu);
        navLink.addEventListener('mouseout', fadeBack);
        navLink.addEventListener('click', menuOff);
    });

    document.querySelectorAll('.proj-link').forEach(navLink => {
        navLink.addEventListener('mouseover', cypher);
    });

    document.querySelector('.menu-toggle-label').addEventListener('click', togglerAnimation);

});


