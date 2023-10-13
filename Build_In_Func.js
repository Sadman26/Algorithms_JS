let arr = [11, 4, 7, 21, 3, 4, 7, 88, 99, 1, 123];
arr.sort((a, b) => a - b)
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}