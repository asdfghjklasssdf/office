function findNeedle(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) {
            return i; 
        }
    }
    return -1; 
}//indexof 

console.log(findNeedle("haystack", "needle"));  
console.log(findNeedle("sadbutsad", "sad"));   
