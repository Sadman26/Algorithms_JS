let arr = [3, 2, 1, 5, 16, 333, 2, 10, 22];
let x = 333;
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == x) {
        console.log("Found at ", index + 1);
    }
}
