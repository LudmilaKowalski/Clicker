let gameInfo = {
    graine: 0,
    tournesol: 1,
    pirate: 1,
    divin: 1,
    clickMultiplier: 0 //équivaut au nombre de sac acheté
}

let viewGraine = document.getElementById("viewGraine");
let title = document.getElementById("title").innerHTML;
let multiplier1 = document.getElementById("x1");
let multiplier10 = document.getElementById("x10");
let multiplier100 = document.getElementById("x100");
let multiplierX1 = document.getElementById("x1");
let multiplierX10 = document.getElementById("x10");
let multiplierX100 = document.getElementById("x100");
let multiplierBuy = 1;
let clickSeeds = document.getElementById("clickSeeds");
let autoClick;

let viewPriceBag = document.getElementById("prizeBag");
let viewPriceSun = document.getElementById("prizeSun");
let viewPriceParrot = document.getElementById("prizeParrot");
let viewPriceStatue = document.getElementById("prizeStatue");

let field = document.getElementById("sunflowerFields");
let ship = document.getElementById("pirateDeck");
let temple = document.getElementById("temple");

let gameLoad = () => {
    //initialisation
    viewPriceBag.innerHTML = cost(gameInfo.clickMultiplier);
    viewPriceSun.innerHTML = cost(gameInfo.tournesol);
    viewPriceParrot.innerHTML = cost(gameInfo.pirate * 7);
    viewPriceStatue.innerHTML = cost(gameInfo.divin * 9);
};

gameLoad();

setInterval(() => {
    if (gameInfo.tournesol > 1 || gameInfo.pirate > 1 || gameInfo.divin > 1)
    {
        autoClick = ((gameInfo.tournesol - 1) * 1) + ((gameInfo.pirate - 1) * 10) + ((gameInfo.divin - 1) * 100)
        gameInfo.graine += autoClick;
        viewGraine.innerHTML = gameInfo.graine;
    }
}, 1000);



multiplierX1.addEventListener("click", () => {
    multiplierBuy = 1;
    multiplier1.classList.add("active");
    multiplier10.classList.remove("active");
    multiplier100.classList.remove("active");
    console.log("multiplier : " + multiplierBuy);

    viewPriceBag.innerHTML = cost(gameInfo.clickMultiplier) * multiplierBuy;
    viewPriceSun.innerHTML = cost(gameInfo.tournesol) * multiplierBuy;
    viewPriceParrot.innerHTML = cost(gameInfo.pirate) * multiplierBuy;
    viewPriceStatue.innerHTML = cost(gameInfo.divin) * multiplierBuy;

});
multiplierX10.addEventListener("click", () => {
    multiplierBuy = 10;
    multiplier10.classList.add("active");
    multiplier1.classList.remove("active");
    multiplier100.classList.remove("active");
    console.log("multiplier : " + multiplierBuy);

    viewPriceBag.innerHTML = cost(gameInfo.clickMultiplier) * multiplierBuy;
    viewPriceSun.innerHTML = cost(gameInfo.tournesol) * multiplierBuy;
    viewPriceParrot.innerHTML = cost(gameInfo.pirate) * multiplierBuy;
    viewPriceStatue.innerHTML = cost(gameInfo.divin) * multiplierBuy;
});
multiplierX100.addEventListener("click", () => {
    multiplierBuy = 100;
    multiplier100.classList.add("active");
    multiplier1.classList.remove("active");
    multiplier10.classList.remove("active");
    console.log("multiplier : " + multiplierBuy);

    viewPriceBag.innerHTML = cost(gameInfo.clickMultiplier) * multiplierBuy;
    viewPriceSun.innerHTML = cost(gameInfo.tournesol) * multiplierBuy;
    viewPriceParrot.innerHTML = cost(gameInfo.pirate) * multiplierBuy;
    viewPriceStatue.innerHTML = cost(gameInfo.divin) * multiplierBuy;
});

clickSeeds.addEventListener("click", () => {
    gameInfo.graine = parseInt(viewGraine.innerHTML) + 1 + gameInfo.clickMultiplier;
    viewGraine.innerHTML = gameInfo.graine;
    console.log("graine " + gameInfo.graine);
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
    if (buy(gameInfo.graine, cost(gameInfo.clickMultiplier) * multiplierBuy)) {
        console.log(gameInfo.clickMultiplier);
        gameInfo.graine = gameInfo.graine - cost(gameInfo.clickMultiplier);
        viewGraine.innerHTML = gameInfo.graine;
        gameInfo.clickMultiplier++; 
        console.log("sac acheté");
        gameLoad();
    }
})
document.getElementById("sunflower").addEventListener("click", () => {
    console.log("yousk2");
    if (buy(gameInfo.graine, cost(gameInfo.tournesol))) {
        console.log(gameInfo.tournesol);
        gameInfo.graine = gameInfo.graine - cost(gameInfo.tournesol);
        viewGraine.innerHTML = gameInfo.graine;
        gameInfo.tournesol++; 
        console.log("tournesol acheté");
        gameLoad();
        if(gameInfo.tournesol <= 5) {
            let img = document.createElement('img');
            img.src = "./assets/img/Sunflower.png";
            img.classList.add = "floweur";
            img.style.left = Math.random() * (400 - 0) + 0;
            img.style.top = Math.random() * (100 - 0) + 0;
            img.style.zIndex = gameInfo.tournesol;
            img.style.width = "100px";
            field.appendChild(img);
        }
    }
})
document.getElementById("pirate").addEventListener("click", () => {
    if (buy(gameInfo.graine, cost(gameInfo.pirate * 7))) {
        console.log(gameInfo.pirate);
        gameInfo.graine = gameInfo.graine - cost(gameInfo.pirate * 7);
        viewGraine.innerHTML = gameInfo.graine;
        gameInfo.pirate++; 
        console.log("pirate acheté");
        gameLoad();
        if(gameInfo.pirate <= 5) {
            let img = document.createElement('img');
            img.src = "./assets/img/Parrot Pirate.png";
            img.classList.add = "floweur";
            img.style.left = Math.random() * (400 - 0) + 0;
            img.style.top = Math.random() * (100 - 0) + 0;
            img.style.zIndex = gameInfo.pirate;
            img.style.width = "100px";
            ship.appendChild(img);
        }
    }
})
document.getElementById("statue").addEventListener("click", () => {
    if (buy(gameInfo.graine, cost(gameInfo.divin * 9))) {
        console.log(gameInfo.divin);
        gameInfo.graine = gameInfo.graine - cost(gameInfo.divin * 9);
        viewGraine.innerHTML = gameInfo.graine;
        gameInfo.divin++; 
        console.log("statue achetée");
        gameLoad();
        if(gameInfo.divin <= 5) {
            let img = document.createElement('img');
            img.src = "./assets/img/Statue.png";
            img.classList.add = "floweur";
            img.style.left = Math.random() * (400 - 0) + 0;
            img.style.top = Math.random() * (100 - 0) + 0;
            img.style.zIndex = gameInfo.divin;
            img.style.width = "100px";
            temple.appendChild(img);
        }
    }
})

