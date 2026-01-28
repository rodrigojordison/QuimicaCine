// ============ MENU HAMBÚRGUER ============
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Verificar se os elementos existem
if (menu && navbar) {
    // Toggle do menu ao clicar
    menu.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menu.classList.toggle('bx-x');
        console.log('Menu clicado! Status:', navbar.classList.contains('active'));
    });

    // Fechar menu ao clicar nos links
    let navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menu.classList.remove('bx-x');
        });
    });

    // Fechar menu ao rolar a página
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menu.classList.remove('bx-x');
            }
        }, 100);
    });
} else {
    console.error('Menu ou Navbar não encontrado!');
}

// ============ HEADER HIDE/SHOW ON SCROLL ============
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Rolando para baixo
        header.style.top = "-100px";
    } else {
        // Rolando para cima
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

// ============ SWIPER - CARROSSEL ============
// Verificar se o Swiper existe na página
if (document.querySelector(".home")) {
    var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        grabCursor: true,
    });
}

// ============ CRIAR BOLHAS ============
function createBubbles() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 80 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.position = 'fixed';
    
    const maxLeft = window.innerWidth - size - 20;
    const randomLeft = Math.random() * maxLeft;
    bubble.style.left = Math.max(0, randomLeft) + 'px';
    
    bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';
    document.body.appendChild(bubble);

    setTimeout(function() {
        bubble.remove();
    }, 10000);
}

// Criar bolhas a cada 500ms
setInterval(createBubbles, 500);