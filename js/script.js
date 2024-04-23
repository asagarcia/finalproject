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
    if (!location.href.includes('about.html')) {
        const numberOfImages = 20;
        const images = ['/finalproject/images/tacos.png', '/finalproject/images/umich.png', '/finalproject/images/miamiheat.png', '/finalproject/images/flawda.gif'];

        for (let i = 0; i < numberOfImages; i++) {
            let img = document.createElement('img');
            img.src = images[i % images.length];
            img.classList.add('floating-img');
            img.style.top = Math.random() * window.innerHeight + 'px';
            img.style.left = Math.random() * window.innerWidth + 'px';
            img.style.animationName = 'floatAnimation' + (i % 6 + 1);
            document.body.appendChild(img);
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.scroll-card');
    const sections = document.querySelectorAll('.content');
    const backgroundImages = [
        'url("/finalproject/images/green.jpeg")',
        'url("/finalproject/images/buckets.jpg")',
        'url("/finalproject/images/mexican.jpg")'
    ];

    // Ensure elements exist
    if (!card || sections.length === 0 || backgroundImages.length === 0) {
        console.error('Initialization error: Elements or images not found.');
        return;
    }

    // Set initial background
    card.style.backgroundImage = backgroundImages[0];

    card.addEventListener('scroll', () => {
        const currentIndex = Math.floor(card.scrollTop / 300); // Assuming each section is 300px high
        if (backgroundImages[currentIndex]) {
            card.style.backgroundImage = backgroundImages[currentIndex];
            console.log('Background updated to:', backgroundImages[currentIndex]);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
        document.body.style.overflow = 'hidden';
    }
});

