const prices = document.querySelectorAll(".amount");
let amount = 0;

const interval = setInterval(() => {
    amount += 300;

    prices.forEach(el => {
        el.textContent = amount;
    });

    if (amount >= 24000) {
        clearInterval(interval);
    }
}, 100); 
