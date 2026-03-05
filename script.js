document.addEventListener("DOMContentLoaded", function() {
    // 1. Search input aur saare sections ko select karna
    const searchInput = document.getElementById("tool-search");
    const sections = document.querySelectorAll(".feature-section");
    
    // 2. Jaise hi user kuch type karega, ye function chalega
    searchInput.addEventListener("input", function(e) {
        // User ne jo likha hai usko lowercase mein convert karna (taaki case-insensitive search ho)
        const searchQuery = e.target.value.toLowerCase().trim();

        // 3. Har ek section par loop chalana
        sections.forEach(section => {
            let hasVisibleButtons = false; // Check karne ke liye ki section mein kuch bacha hai ya nahi
            const buttons = section.querySelectorAll(".tool-btn");

            // 4. Section ke andar har ek button par loop chalana
            buttons.forEach(button => {
                const buttonText = button.textContent.toLowerCase();

                // Agar button ke text mein search query milti hai
                if (buttonText.includes(searchQuery)) {
                    button.style.display = ""; // Button ko wapas show karna (CSS grid default)
                    hasVisibleButtons = true;
                } else {
                    button.style.display = "none"; // Button ko hide karna
                }
            });

            // 5. Agar section mein ek bhi button visible nahi hai, toh poore section ko hide kar do
            if (hasVisibleButtons) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Hamburger Menu Logic
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            // Hamburger icon ko cross (X) me badalna
            hamburger.classList.toggle("active");
            // Mobile menu ko slide in/out karna
            navLinks.classList.toggle("active");
        });
    }

    // Agar user kisi link par click karta hai, toh menu automatically band ho jaye
    document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
});

document.addEventListener("DOMContentLoaded", function() {
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Pehli baar mouse hilaate hi cursor dikhne lagega (Corner wala glitch khatam)
        dot.classList.add("cursor-visible");
        outline.classList.add("cursor-visible");

        // Cursor Movement
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline Animation
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
    });

    // Hover effect for links and buttons
    const interactiveElements = document.querySelectorAll("button, a, .theme-switch, .search-input, .trending-btn");
    
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");
        });
    });

    // Page se mouse bahar nikalne par cursor hide kar dena (Optional but Pro look)
    document.addEventListener("mouseleave", () => {
        dot.classList.remove("cursor-visible");
        outline.classList.remove("cursor-visible");
    });
});