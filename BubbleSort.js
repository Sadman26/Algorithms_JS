// bubble sort
let arr = [11, 4, 7, 21, 3, 4, 7, 88, 99, 1, 123];
let n = arr.length;
for (let index = 0; index < n - 1; index++) {
    for (let index2 = 0; index2 < n - index - 1; index2++) {
        if (arr[index2] > arr[index2 + 1]) {
            let tmp = arr[index2];
            arr[index2] = arr[index2 + 1];
            arr[index2 + 1] = tmp;
        }
    }
}
for (let index = 0; index < n; index++) {
    console.log(arr[index]);
}