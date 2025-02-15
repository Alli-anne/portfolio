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
