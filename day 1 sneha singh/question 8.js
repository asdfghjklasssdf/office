let arr =  [1,2,[5,4],3,[5],[93,8,2]];
function flattenArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flattenArray(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result;
}

let flattenedArray = flattenArray(arr);
console.log(flattenedArray); 