function myFunction() {
    var url = "https://www.linkedin.com/in/asa-garcia/";
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.flip-card-inner');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('is-flipped');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const numberOfImages = 20; // Number of images you want to animate
    const images = ['../images/tacos.png', '../images/umich.png', '../images/miamiheat.png', '../images/flawda.gif']; // Paths to images

    for (let i = 0; i < numberOfImages; i++) {
        let img = document.createElement('img');
        img.src = images[i % images.length]; // Cycle through images
        img.classList.add('floating-img');
        img.style.top = Math.random() * window.innerHeight + 'px';
        img.style.left = Math.random() * window.innerWidth + 'px';
        img.style.animationName = 'floatAnimation' + (i % 6 + 1); // Up to 6 different animations
        document.body.appendChild(img);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.scroll-card');
    const sections = document.querySelectorAll('.content');

    card.addEventListener('scroll', () => {
        const currentIndex = Math.floor(card.scrollTop / 300); // 300 is the height of each section
        sections.forEach((sec, index) => {
            if (index === currentIndex) {
                sec.classList.add('active');
                sec.style.display = 'flex'; // Show only the active section
            } else {
                sec.classList.remove('active');
                sec.style.display = 'none'; // Hide other sections
            }
        });
    });
});

