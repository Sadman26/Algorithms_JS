let arr = [1, 4, 7, 11, 23, 45, 67, 88, 99, 112, 123];
let n = arr.length;
let l = 0, h = n - 1, mid = 0;
let x = 88;
while (l <= h) {
    mid = Math.ceil((l + h) / 2);
    if (arr[mid] == x) {
        console.log("Found at ", mid + 1);
        break;
    }
    else if (x > arr[mid]) {
        l = mid + 1;
    }
    else if (x < arr[mid]) {
        h = mid - 1;
    }
}