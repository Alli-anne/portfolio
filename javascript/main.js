document.addEventListener("DOMContentLoaded", () => {
    const buttonleft = document.getElementById("arrow_left");
    const buttonright = document.getElementById("arrow_right");
    const imageContainer = document.querySelector(".image_container");
    const hamburger = document.getElementById("hamburger_id");
    const menu = document.getElementById("menu");
    let seconds = 0;

    const images = [
        "images/littlewoman/poster.JPG", 
        "images/littlewoman/ticket.JPG",
        "images/yearbook copy/2022musical1.PNG"
    ];

    let currentIndex = 0; // Track which image is currently displayed

    // Set initial image
    if (imageContainer) {
        imageContainer.innerHTML = imageHtml(images[currentIndex]);
    } else {
        console.log("Image container not found");
    }

    // Auto change image every 10 seconds
    function autoChangeImage() {
        seconds += 1;
        currentIndex = (currentIndex + 1) % images.length;
        imageContainer.innerHTML = imageHtml(images[currentIndex]);
        console.log(seconds);
    }

    // Left button click listener
    function leftButton() {
        if (buttonleft) {
            buttonleft.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images.length;
                imageContainer.innerHTML = imageHtml(images[currentIndex]);
            });
        } else {
            console.log("Left arrow button not found");
        }
    }
    
    // Right button click listener
    if (buttonright) {
        buttonright.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Fix negative index issue
            imageContainer.innerHTML = imageHtml(images[currentIndex]);
        });
    } else {
        console.log("Right arrow button not found");
    }

    // Hamburger menu toggle
    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("hidden"); // Toggles the menu visibility
        });
    } else {
        console.log("Hamburger button or menu not found");
    }

    // Set the auto image change interval
    setInterval(autoChangeImage, 10000);

    // Call leftButton to attach the click event to the left arrow button
    leftButton();

    // Function to generate image HTML
    function imageHtml(image) {
        return `
            <div class="image_slide"> 
                <img class="image_carousel" src="${image}" alt="">
                <p class="hidden_text">Description of the image</p>
            </div>`;
    }

    console.log("hello");
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide the button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) { // Show after scrolling down 300px
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.animate-fade');
    const slideElements = document.querySelectorAll('.animate-slide');
    
    // Handle fade animations
    fadeElements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated', 'fade');
        }
    });
    
    // Handle slide animations
    slideElements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated', 'slide');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
