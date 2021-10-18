let gameInfo = {
    graine: 0,
    tournesol: 0,
    pirate: 0,
    divin: 0 
}

let viewGraine = document.getElementById("viewGraine").innerHTML;
let title = document.getElementById("title").innerHTML;
let multiplier1 = document.getElementById("x1");
let multiplier10 = document.getElementById("x10");
let multiplier100 = document.getElementById("x100");
let multiplierX1 = document.getElementById("x1");
let multiplierX10 = document.getElementById("x10");
let multiplierX100 = document.getElementById("x100");
let multiplierBuy;

multiplierX1.addEventListener("click", () => {
    multiplierBuy = "1";
    multiplier1.classList.add("active");
    multiplier10.classList.remove("active");
    multiplier100.classList.remove("active");
    console.log(multiplierBuy);
});
multiplierX10.addEventListener("click", () => {
    multiplierBuy = "10";
    multiplier10.classList.add("active");
    multiplier1.classList.remove("active");
    multiplier100.classList.remove("active");
    console.log(multiplierBuy);
});
multiplierX100.addEventListener("click", () => {
    multiplierBuy = "100";
    multiplier100.classList.add("active");
    multiplier1.classList.remove("active");
    multiplier10.classList.remove("active");
    console.log(multiplierBuy);
});

