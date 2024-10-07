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
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari submit default

        var nama = document.getElementById("nama").value; // Ambil nama dari input
        var email = document.getElementById("email").value;
        var pesan = document.getElementById("pesan").value;

        var subject = "Pesan Kontak dari " + nama;
        var body = `Nama: ${nama}%0AEmail: ${email}%0APesan: ${pesan}%0A%0ATerima Kasih`;

        var mailtoUrl = `mailto:eatharasya@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl, "_blank");
    });
