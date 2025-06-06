/*
CIT 281 Spring 2025 Project 3
Ulys Chauncey Drumrongthai
*/

function coinCombo(amount) {
    // Expects an integer number representing the number of pennies.

    /* Returns an array of objects of possible coin combinations for each of the US coin
    values, where each object consists of the following properties. */

    // Amount: original amount parameter.
    /* Combinations: array of objects of the possible coinage combinations where each object 
]      contains each of the following US coinage properties. */
    // totalCombinations: the number of returned combinations (i.e. the length of the combinations array).

    if (!Number.isInteger(amount) || amount < 0) {
        throw new Error("Amount must be a non-negative integer!");
    }

    const coins = [25, 10, 5, 1];
    const combinations = [];

    for (let q = 0; q <= Math.floor(amount / coins[0]); q++) {

        for (let d = 0; d <= Math.floor((amount - q * coins[0]) / coins[1]); d++) {

            for (let n = 0; n <= Math.floor((amount - q * coins[0] - d * coins[1]) / coins[2]); n++) {

                const p = amount - q * coins[0] - d * coins[1] - n * coins[2];
                combinations.push({ quarters: q, dimes: d, nickels: n, pennies: p});
            }
        }
    }

    return {
        amount, 
        combinations,
        totalCombinations: combinations.length,
    };
}

function coinValue({ quarters = 0, dimes = 0, nickels = 0, pennies = 0 }) {
    // Expects an object with properties representing each of the US coinage and the amount of each coin.

    /* Returns an object containing the following properties:
        -> coins: an object that essentially duplicates the submitted values.
        -> totalCents: total amount in pennies.
        -> totalDollars: totalCents divided by 100 to two decimal places using toFixed(). */

    // Must use object deconstruction of the coinCounts parameter to seperate into the different US coinage values as variables.

    const totalCents = quarters * 25 + dimes * 10 + nickels * 5 + pennies;

    return {
        coins: { quarters, dimes, nickels, pennies },
        totalCents,
        totalDollars: (totalCents / 100).toFixed(2),
    };
}

module.exports = {
    coinCombo,
    coinValue,
};