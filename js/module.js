'use strict';

//ドロワー
const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-global-menu')
const drawerBackground = document.getElementById('js-drawer-background')



const hamburger = () => {
    jsHamburger.addEventListener('click', function () {
        body.classList.toggle('is-drawerActive')
        jsHamburger.classList.toggle('active')
        if (this.getAttribute('aria-expanded') == 'false') {
            this.setAttribute('aria-expanded', 'true');
            spHeaderMenu.setAttribute('area-hidden', 'false')
        } else {
            this.setAttribute('aria-expanded', 'false')
            spHeaderMenu.setAttribute('area-hidden', 'true')
        };
    });
}



const drawer = () => {
    drawerBackground.addEventListener('click', () => {
        body.classList.remove('is-drawerActive')
        jsHamburger.classList.remove('active')
        jsHamburger.setAttribute('aria-expanded', 'false')
        spHeaderMenu.setAttribute('area-hidden', 'true')
    });
}



//スクロール
const $scrollA = document.querySelectorAll('.scroll-a');

const scroll = () => {

    $scrollA.forEach((item) => {
        item.addEventListener('click', () => {
            body.classList.remove('is-drawerActive')
            jsHamburger.classList.remove('active')
            jsHamburger.setAttribute('aria-expanded', 'false')
        });
    });
}



export { hamburger, drawer, scroll };


const $animebg = document.querySelector('.animebg');

const animeBg = () => {
    setTimeout(() => {
        $animebg.classList.add('load');
    }, 400);
};


const $animebg2 = document.querySelector('.animebg2');

const animeBg2 = () => {

    setTimeout(() => {
        $animebg2.classList.add('load');
    }, 800);

};

export { animeBg, animeBg2 };
