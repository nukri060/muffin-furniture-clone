const prices = document.querySelectorAll(".increasing-value");
let amount = 0;
let hasRun = false;

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
            hasRun = true;
            animatePrice();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); 

const targetSections = document.querySelectorAll(".target-section");
targetSections.forEach(el => observer.observe(el));

function animatePrice() {
    const interval = setInterval(() => {
        amount += 300;

        prices.forEach(el => {
            el.textContent = amount;
        });

        if (amount >= 24000) {
            clearInterval(interval);
        }
    }, 2);
}
