document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("arrow_left");
    const imageContainer = document.querySelector(".image_container"); 
    const hamburger_button =document.getElementById("hamburger_id"); // Select the container

    const images = [
        "images/littlewoman/poster.JPG", 
        "images/littlewoman/ticket.JPG",
        "images/yearbook copy/2022musical1.PNG"
    ];

    if (hamburger_button) {
        hamburger_button.addEventListener("click", () => {
            if (nav.style.display === "none" || nav.style.display === "") {
                nav.style.display = "block";  // Show the nav
            } else {
                nav.style.display = "none";  // Hide the nav
            }
        });
    }
        });
    }
    let currentIndex = 0; // Track which image is currently displayed

    if (button && imageContainer) {
        button.addEventListener("click", () => {
            // Move to the next image, looping back if at the end
            currentIndex = (currentIndex + 1) % images.length;

            // Update the container's HTML with the new image
            imageContainer.innerHTML = imageHtml(images[currentIndex]);
        });
    } else {
        console.log("Button or image container not found");
    }
});

function imageHtml(image) {
    return `
        <div class="image_slide"> 
            <img class="image_carousel" src="${image}" alt="carousel image">
            <p class="hidden_text">Description of the image</p>
        </div>`;
}

console.log("hello");