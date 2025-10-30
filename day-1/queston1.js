//use the two pointer we are solving this problem

let n = [1, 1, 2, 3, 3];
let newLength = remove(n);
console.log(n.slice(0, newLength)); 

function remove(n) {
    if (n.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < n.length; j++) {
        if (n[j] !== n[i]) {
            i++;
            n[i] = n[j];
        }
    }
    return i + 1; 
}