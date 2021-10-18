/**
 * Load the current game from the local storage
 */
let load = () => {
    gameInfo = localStorage.getItem("gameInfo").json();
}

/**
 * Save the current game to the local storage      
 */
let save = () => {
    localStorage.setItem("gameInfo", gameInfo.json());
}

/**
 * Determinate if the user can buy a certain ressource or not
 * @param {Number} amount
 * @param {Number} cost
 * @return {Boolean}      
 */
let buy = (amount, cost) => {
    if (amount >= cost) {
        return true;
    } else {
        return false;
    }
}

/**
 * Determinate the user's ressource cost
 * @param {Number} amount
 * @param {Number} exp
 * @return {Number}      
 */
let cost = (amount, exp) => {
    return (Math.exp(amount + 1) ** exp);
}