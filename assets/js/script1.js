let gameInfo = {
    graine: 0,
    tournesol: 0,
    pirate: 0,
    divin: 0,
    bagPrice: 0,
    tournesolPrice: 0,
    piratePrice: 0,
    divinPrice: 0
}

let bagPrice = 0;
let tournesolPrice = 0;
let piratePrice = 0;
let divinPrice = 0;
let viewGraine = document.getElementById("viewGraine");
let title = document.getElementById("title").innerHTML;
let multiplier1 = document.getElementById("x1");
let multiplier10 = document.getElementById("x10");
let multiplier100 = document.getElementById("x100");
let multiplierX1 = document.getElementById("x1");
let multiplierX10 = document.getElementById("x10");
let multiplierX100 = document.getElementById("x100");
let multiplierBuy;
let clickMultiplier = 1;
let clickSeeds = document.getElementById("clickSeeds");

let viewPriceBag = document.getElementById("prizeBag");
let viewPriceSun = document.getElementById("prizeSun");
let viewPriceParrot = document.getElementById("prizeParrot");
let viewPriceStatue = document.getElementById("prizeStatue");

let gameLoad = (() => {
    //initialisation

}) 

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

clickSeeds.addEventListener("click", () => {
    viewGraine.innerHTML = parseInt(viewGraine.innerHTML) + clickMultiplier;
    console.log("+1 graine");
})
//affichage du prix du bag en hover
document.getElementById("seedBag").addEventListener("mouseover", () => {
    document.getElementsByClassName("prizeBag")[0].style.visibility = "visible";
})
document.getElementById("seedBag").addEventListener("mouseleave", () => {
    document.getElementsByClassName("prizeBag")[0].style.visibility = "hidden";
})

//affichage du prix du tournesol en hover
document.getElementById("sunflower").addEventListener("mouseover", () => {
    document.getElementsByClassName("prizeSun")[0].style.visibility = "visible";
})
document.getElementById("sunflower").addEventListener("mouseleave", () => {
    document.getElementsByClassName("prizeSun")[0].style.visibility = "hidden";
})

//affichage du prix du pirate en hover
document.getElementById("pirate").addEventListener("mouseover", () => {
    document.getElementsByClassName("prizeParrot")[0].style.visibility = "visible";
})
document.getElementById("pirate").addEventListener("mouseleave", () => {
    document.getElementsByClassName("prizeParrot")[0].style.visibility = "hidden";
})

//affichage du prix de la statue en hover
document.getElementById("statue").addEventListener("mouseover", () => {
    document.getElementsByClassName("prizeStatue")[0].style.visibility = "visible";
})
document.getElementById("statue").addEventListener("mouseleave", () => {
    document.getElementsByClassName("prizeStatue")[0].style.visibility = "hidden";
})

document.getElementById("seedBag").addEventListener("click", () => {
    if (buy(gameInfo.graine, gameInfo.bagPrice)) {
        
    }
})
document.getElementById("sunflower").addEventListener("click", () => {
    if (buy(gameInfo.graine, gameInfo.tournesolPrice)) {
        
    }
})
document.getElementById("pirate").addEventListener("click", () => {
    if (buy(gameInfo.graine, gameInfo.piratePrice)) {
        
    }
})
document.getElementById("statue").addEventListener("click", () => {
    if (buy(gameInfo.graine, gameInfo.divinPrice)) {
        
    }
})