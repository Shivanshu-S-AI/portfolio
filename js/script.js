// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Automation Expert'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop: true
    });


    //Particle JS initialization
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"  // or "grab", "bubble"
      },
      onclick: {
        enable: true,
        mode: "push" // or "remove", "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 8,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});




  const container = document.querySelector(".about-img");
  const image = container.querySelector("img");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 10;  // tilt left/right

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  container.addEventListener("mouseleave", () => {
    image.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });


window.addEventListener('DOMContentLoaded', function() {
  (function() {
    const p = document.getElementById('interactiveText');
    if (!p) return;
    // Normalize whitespace: replace all whitespace (including newlines) with a single space
    const text = p.textContent.replace(/\s+/g, ' ').trim();
    p.innerHTML = '';
    for (let char of text) {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      p.appendChild(span);
    }
    p.addEventListener('mousemove', function(e) {
      const spans = p.querySelectorAll('span');
      spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 50) {
          span.style.transform = `scale(${1.3 - dist/200})`;
        } else {
          span.style.transform = '';
        }
      });
    });
    p.addEventListener('mouseleave', function() {
      p.querySelectorAll('span').forEach(span => span.style.transform = '');
    });
  })();
});
