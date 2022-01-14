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
 * @param {Number} quantity
 * @param {Number} cost
 * @return {Boolean}      
 */
let buy = (quantity, price) => {
    if (quantity >= price) {
        return true;
    } else {
        return false;
    }
}

/**
 * Determinate the user's ressource cost
 * @param {Number} amount
 * @return {Number}      
 */
let cost = (amount) => {
    return Math.ceil(Math.exp(amount + 1));
}