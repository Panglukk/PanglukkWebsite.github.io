let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "previous", "next");
    }

    slides[slideIndex].classList.add("active");

    let prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
    let nextIndex = (slideIndex + 1) % slides.length;

    slides[prevIndex].classList.add("previous");
    slides[nextIndex].classList.add("next");

    slideIndex = nextIndex;

    setTimeout(showSlides, 2800); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);


// skill 
// ส่วนรูปปก
document.addEventListener('scroll', function() {
    const image = document.querySelector('.fixed-image');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fadeStart = 0; // scroll position at which the fade effect starts
    const fadeEnd = windowHeight / 2; // scroll position at which the fade effect ends

    let opacity = 1;
    if (scrollPosition > fadeStart && scrollPosition < fadeEnd) {
        opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
    } else if (scrollPosition >= fadeEnd) {
        opacity = 0;
    }

    image.style.opacity = opacity;
});


// experience
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.experience-row');
    
    function checkScroll() {
        rows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                row.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // ตรวจสอบเมื่อโหลดหน้า
});


document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.experience-row');
    const introImageContainer = document.querySelector('.intro-image-container');
    
    function checkScroll() {
        rows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                row.classList.add('visible');
            }
        });
    }

    // เพิ่ม class visible ให้ intro-image-container เมื่อโหลดหน้า
    function showIntroImage() {
        introImageContainer.classList.add('visible');
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // ตรวจสอบเมื่อโหลดหน้า
    showIntroImage(); // แสดง intro image เมื่อโหลดหน้า
});


// works and pride
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.works-item');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            const image = this.querySelector('.works-image');
            image.style.display = (image.style.display === 'block') ? 'none' : 'block';
        });
    });
});








