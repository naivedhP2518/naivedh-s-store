document.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart");
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cart.innerHTML = `<i class='fas fa-shopping-cart'></i> Cart (${cartCount})`;
            alert("Item added to cart!");
        });
    });

    document.addEventListener("scroll", () => {
    const servicesSection = document.querySelector(".grid-container");
    if (window.scrollY > servicesSection.offsetTop - window.innerHeight / 1.2) {
        servicesSection.classList.add("scrolled");
    }
});
    // Ensure the main image fits perfectly
    const introImage = document.querySelector(".intro-image");
    introImage.style.width = "1900px";
    introImage.style.height = "1024px";
    introImage.style.opacity = "1";
    introImage.style.transform = "none";
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".hero-card").classList.add("show");
    }, 10000); // 10 seconds delay
});
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".customization-card");

    // Check if animation has already run
    if (!sessionStorage.getItem("cardAnimated")) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";

        setTimeout(() => {
            card.style.transition = "opacity 1s ease-in-out, transform 0.5s ease-in-out";
            card.style.opacity = "1";
            card.style.transform = "scale(1)";

            // Store animation state in sessionStorage
            sessionStorage.setItem("cardAnimated", "true");
        }, 500);
    } else {
        // If animation already played, show card immediately
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".customization-card");

    // Ensure the card exists before applying animation
    if (card) {
        // Check if animation has already played
        if (!sessionStorage.getItem("cardAnimated")) {
            card.style.opacity = "0";
            card.style.transform = "scale(0.8)";

            setTimeout(() => {
                card.style.transition = "opacity 1s ease-in-out, transform 0.5s ease-in-out";
                card.style.opacity = "1";
                card.style.transform = "scale(1)";

                // Store animation state in sessionStorage
                sessionStorage.setItem("cardAnimated", "true");
            }, 500);
        } else {
            // If animation already played, show card instantly
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        }
    }
});

// Reset animation when user reloads page
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        sessionStorage.removeItem("cardAnimated");
    }
});



