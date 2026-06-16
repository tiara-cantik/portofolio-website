/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections avtive link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height) {
           navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }; 
    });
/*==================== sticky navbar ====================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100); 

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/

document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll('.progress');
  
  progressBars.forEach(bar => {
    let width = 0;
    const targetWidth = bar.getAttribute('data-percent'); // Dapatkan nilai dari data-percent
    
    bar.style.width = '0%'; // Mulai dari 0%
    bar.textContent = '0%'; // Awal persentase ditampilkan sebagai 0%

    const interval = setInterval(() => {
      if (width >= targetWidth) {
        clearInterval(interval); // Hentikan animasi jika lebar mencapai target
      } else {
        width++;
        bar.style.width = width + '%'; // Perbarui lebar bar
        bar.textContent = width + '%'; // Perbarui teks persentase
      }
    }, 10);
  });
});
/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .skill-img, .education, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=================== contact js ===================*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:tiarafajriatus9@gmail.com=${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
  window.location.href = mailtoLink;

  document.getElementById("statusMessage").textContent = "Redirecting to your email client...";
});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: [ 'Web Developer', 'Designer', 'Game Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});