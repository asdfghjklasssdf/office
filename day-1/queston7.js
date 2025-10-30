// frist add the all the string of word in the map then slice all by one by one then  then  count the  ferq from the frist perfix if the perfix word = no. of word in the arr then  thst prefix is common

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefixMap = new Map();
    let totalWords = strs.length;

    for (let word of strs) {
        let prefix = "";
        for (let ch of word) {
            prefix += ch;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }

    let longestPrefix = "";
    for (let [prefix, count] of prefixMap.entries()) {
        if (count === totalWords && prefix.length > longestPrefix.length) {
            longestPrefix = prefix;
        }
    }

    return longestPrefix;
}
//loop 
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   
