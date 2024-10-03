// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close navbar when a link is clicked (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Close navbar when clicking outside (mobile)
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// Prevent closing when clicking inside navbar
navbar.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Rest of the code remains the same...

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function updateActiveLink() {
    let scrollPosition = window.scrollY + 150; // Adjusted for better mobile experience

    sections.forEach(sec => {
        let top = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
}

// ... (rest of the code remains unchanged)

document.getElementById('readMoreBtn').addEventListener('click', function(e) {
            e.preventDefault();
            var content = document.querySelector('.content');
            var hiddenContent = document.querySelector('.hidden-content');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                hiddenContent.style.display = 'none';
                this.textContent = 'Read More';
            } else {
                content.classList.add('expanded');
                hiddenContent.style.display = 'block';
                this.textContent = 'Read Less';
            }
        });

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        let id = this.dataset.id;
        let status = this.dataset.status;
        let extraContent = document.getElementById(id);
        console.log("status=",status);
        if(status==0){
            extraContent.classList.remove('hide');
            extraContent.classList.add('show');
            this.innerHTML = "Read Less";
            this.dataset.status = 1;
        }else{
            extraContent.classList.remove('show');
            extraContent.classList.add('hide');
            this.innerHTML = "Read More";
            this.dataset.status = 0;
        }
    })
})


// testimonials

document.addEventListener('DOMContentLoaded', () => {
            const wrapper = document.querySelector('.testimonial-wrapper');
            const boxes = document.querySelectorAll('.testimonial-box');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentIndex = 0;

            function showTestimonial(index) {
                wrapper.style.transform = `translateX(-${index * 100}%)`;
                boxes.forEach((box, i) => {
                    box.style.opacity = '0';
                    box.style.transform = 'translateY(50px)';
                    setTimeout(() => {
                        box.style.opacity = i === index ? '1' : '0';
                        box.style.transform = i === index ? 'translateY(0)' : 'translateY(50px)';
                    }, 50);
                });
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
                showTestimonial(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % boxes.length;
                showTestimonial(currentIndex);
            });

            // Initial animation
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    box.style.opacity = index === 0 ? '1' : '0';
                    box.style.transform = index === 0 ? 'translateY(0)' : 'translateY(50px)';
                }, index * 200);
            });
        });

        