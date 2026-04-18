document.addEventListener('click', (e) => {
    if (e.target.id === 'nav-button') {
        const navButton = e.target;
        console.log('test');
        const nav = document.getElementsByTagName('nav')[0];
        console.log(nav);
        nav.classList.toggle('showMenu');
        
        if(nav.classList.contains('showMenu')) {
            navButton.innerHTML = 'Skjul meny';
        }
        else {
            navButton.innerHTML = 'Vis meny';
        }
    }
});

async function loadComponent(id, file) {
    const res = await fetch(file);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
}

loadComponent("header", "./components/header.html");