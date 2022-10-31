'use strict';

    window.addEventListener('DOMContentLoaded', () => {

        const arrText = ['perfo', 'radio', 'tv', 'pelvis', 'tractor', 'car', 'wind'],
        randomText = document.querySelector('#randon_text');

        setInterval(function() {
            let randId = Math.floor(Math.random() * arrText.length);
            randomText.classList.toggle('hide');
            randomText.textContent = arrText[randId];
        }, 2000);

    });