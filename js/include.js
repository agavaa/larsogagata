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
    // if(lang === 'no') return;

    const res = await fetch(`/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = data[key];
    })
}

const savedLang = localStorage.getItem('lang') || 'no';

loadLang(savedLang);

function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    loadLang(lang);

}