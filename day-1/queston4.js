//Iterate through the flowerbed , Check and plant flowers:If the current plot is empty (flowerbed[i] == 0), and both adjacent plots are either empty or out of bounds (i.e., the current plot is at the edges), plant a flower by setting flowerbed[i] = 1.After planting a flower, decrement the count of remaining flowers (n--).
//Return result.If n <= 0, it means all the flowers have been successfully planted, and we return true.
//If we finish the loop without planting enough flowers, return false.

let flowerbed = [1,0,0,0,1];
let n = 1;
var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === len - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};