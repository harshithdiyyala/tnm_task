
let home = document.getElementById('home');

home.addEventListener('onmouseover', () => {
    let navHome = document.getElementById('nav-home');

    navHome.style.fontWeight = 'bold';
})

let img = document.getElementById('ring-cards-img1');
let desc = document.getElementById('ring-cards-img1');
img.addEventListener('onmousein',() => {
    console.log('on img');
    img.style.width = width + '10px';
    img.style.height = height +'10px';
})