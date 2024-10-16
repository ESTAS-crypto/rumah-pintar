//buat animasi home/background
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

function toggleDescription(element) {
    element.classList.toggle("active");
}
//side bar
document.addEventListener("DOMContentLoaded", function(e) {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    e.preventDefault(e);
    burger.addEventListener("click", function(e) {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
        e.preventDefault(e);
    });
});

//mengatur agar tepat ketika di click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offset = 100; // Sesuaikan dengan tinggi navbar
        const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({

            top: offsetPosition,
            behavior: "smooth",
        });
    });
});


// menambahk menu agar bisa di kirim ke email
function toggleDescription(element) {
    element.classList.toggle("active");
}

//side bar
document.addEventListener("DOMContentLoaded", function(e) {
    // ... (kode sidebar yang ada tetap sama)
});

//mengatur agar tepat ketika di click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // ... (kode scroll yang ada tetap sama)
});

// menambahkan menu agar bisa di kirim ke email
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari submit default

        var nama = document.getElementById("nama").value;
        var email = document.getElementById("email").value;
        var pesan = document.getElementById("pesan").value;

        var subject = "Pesan Kontak dari " + nama;
        var body = `Nama: ${nama}Email: ${email}Pesan: ${pesan}Terima Kasih`;

        var mailtoUrl = `mailto:eatharasya@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

        // Tampilkan navbar notifikasi
        showNotificationNavbar("Apakah Anda yakin ingin mengirim pesan ini?", function(confirmed) {
            if (confirmed) {
                window.open(mailtoUrl, "_blank");
                showNotificationNavbar("Pesan Anda telah dikirim!", null, 3000);
            } else {
                showNotificationNavbar("Pengiriman pesan dibatalkan.", null, 3000);
            }
        });
    });

// Fungsi untuk menampilkan navbar notifikasi
function showNotificationNavbar(message, callback, duration) {
    var navbar = document.getElementById("notificationNavbar");
    var messageElement = document.getElementById("notificationMessage");
    var confirmButton = document.getElementById("notificationConfirm");
    var cancelButton = document.getElementById("notificationCancel");

    messageElement.textContent = message;
    navbar.style.display = "flex";

    if (callback) {
        confirmButton.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
        confirmButton.onclick = function() {
            navbar.style.display = "none";
            callback(true);
        };
        cancelButton.onclick = function() {
            navbar.style.display = "none";
            callback(false);
        };
    } else {
        confirmButton.style.display = "none";
        cancelButton.style.display = "none";
        if (duration) {
            setTimeout(function() {
                navbar.style.display = "none";
            }, duration);
        }
    }
}
// animasi pada logo dan judul
// Array teks yang akan dianimasi dan di ganti
const texts = [
    "Belajar",
    "Pintar"
];
let currentIndex = 0;

// Mengambil elemen HTML yang akan dianimasi
const titleElement = document.getElementById("changing-title");
const logoElement = document.querySelector('.logo');

// Karakter yang digunakan dalam animasi acak
const alphabet = 'ABCDE ';

// Fungsi untuk mendapatkan karakter acak
function getRandomChar() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// isLogo: boolean untuk membedakan animasi logo dan judul
function animateLetter(element, targetChar, duration, steps, isLogo) {
    let step = 0;
    const interval = duration / steps;
    const animation = setInterval(() => {
        if (step < steps - 5) {
            element.textContent = isLogo ? targetChar : getRandomChar();
            element.style.opacity = isLogo ? step / steps : 1;
            step++;
        } else {
            element.textContent = targetChar;
            element.style.opacity = 1;
            clearInterval(animation);
        }
    }, interval);
}


// isLogo: boolean untuk membedakan animasi logo dan judul
function animateText(element, oldText, newText, isLogo) {
    element.innerHTML = ''; // Bersihkan elemen

    const fixedPart = isLogo ? "Rumah " : "Selamat Datang di Rumah ";
    element.textContent = fixedPart;

    const wordContainer = document.createElement('span');
    wordContainer.className = isLogo ? 'logo-word' : 'animated-word';
    element.appendChild(wordContainer);

    const maxLength = Math.max(oldText.length, newText.length);

    for (let i = 0; i < maxLength; i++) {
        const letterElement = document.createElement('span');
        letterElement.className = isLogo ? 'logo-letter' : 'letter';
        letterElement.textContent = oldText[i] || ' ';
        wordContainer.appendChild(letterElement);

        // Delay untuk animasi bertahap
        setTimeout(() => {
            animateLetter(letterElement, newText[i] || ' ', 100, 10, isLogo);
        }, i * 50);
    }
}

// Fungsi untuk mengganti teks
function changeTexts() {
    const oldText = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
    const newText = texts[currentIndex];

    animateText(titleElement, oldText, newText, false);
    animateText(logoElement, oldText, newText, true);
}

// Inisialisasi teks pertama
titleElement.textContent = "Selamat Datang di Rumah " + texts[0];
logoElement.textContent = "Rumah " + texts[0];

// Ganti teks setiap detik
setInterval(changeTexts, 5000);

// Panggil fungsi changeTexts saat halaman dimuat untuk memulai animasi
document.addEventListener('DOMContentLoaded', changeTexts); // ... (kode JavaScript yang sudah ada tetap sama) ...

// Fitur ubah warna tema
const colorOptions = document.querySelectorAll('.color-option');
const root = document.documentElement;

colorOptions.forEach(option => {
    option.style.backgroundColor = option.dataset.color;
    option.addEventListener('click', () => {
        root.style.setProperty('--primary-color', option.dataset.color);
    });
});

// Efek mengetik
const typingText = document.getElementById('typing-text');
const phrases = [
    'Belajar dengan cara yang menyenangkan',
    'Tingkatkan keterampilan Anda',
    'Jelajahi dunia teknologi',
    'Bergabunglah dengan komunitas kami'
];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhraseText = phrases[phraseIndex];

    if (isDeleting) {
        currentPhrase = currentPhraseText.substring(0, letterIndex - 1);
        typingSpeed = 50;
    } else {
        currentPhrase = currentPhraseText.substring(0, letterIndex + 1);
        typingSpeed = 100;
    }

    typingText.textContent = currentPhrase;

    if (!isDeleting && letterIndex === currentPhraseText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    letterIndex += isDeleting ? -1 : 1;

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// Tambahan: Animasi scroll untuk section
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Tambahan: Efek paralaks yang lebih halus
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.1;
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ... (kode JavaScript lain tetap sama) ...
