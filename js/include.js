document.addEventListener('click', (e) => {
    if (e.target.id === 'nav-button') {
        const navButton = e.target;
        console.log('test');
        const nav = document.getElementsByTagName('nav')[0];
        console.log(nav);
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