function rotate(nm, k) {
    let n = nm.length;    
    k = k % n;            // In case k > n

    remove(nm, 0, n - 1);

    remove(nm, 0, k - 1);

    remove(nm, k, n - 1);

    return nm; 
}

function remove(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

let nm = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(nm, k)); 
