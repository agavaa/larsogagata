document.addEventListener('click', (e) => {
     const navButton = e.target.closest('#nav-button');
    if (navButton) {
        const nav = document.querySelector('nav');
        nav.classList.toggle('showMenu');
    }
});

async function loadComponent(id, file) {
    const res = await fetch(file);
    const text = await res.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const content = doc.body.firstElementChild;
    document.getElementById(id).appendChild(content);
}

loadComponent("header", "./components/header.html");

async function loadLang(lang) {

    const res = await fetch(`/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = data[key];
    })

    const activeClass = 'lang-button--active';

    const langButtons = document.querySelectorAll('[id^="lang-button-"]');

    langButtons.forEach(b => {
        if(b.id === `lang-button-${lang}`) {
            b.setAttribute('aria-checked', 'true');
        }
        else b.setAttribute('aria-checked', 'false');
    })

    document.documentElement.lang = lang;
}

const savedLang = localStorage.getItem('lang') || 'no';

loadLang(savedLang);

function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    loadLang(lang);

}