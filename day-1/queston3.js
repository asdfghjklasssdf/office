console.log(reverseVowels("IceCreAm"));

function reverseVowels(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    let arr = s.split('');
    
    let l = 0, r = arr.length - 1;

    while (l < r) {
        while (l < r && !vowels.has(arr[l])) {
            l++;
        }
        while (l < r && !vowels.has(arr[r])) {
            r--;
        }

        if (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }

    return arr.join('');
}




