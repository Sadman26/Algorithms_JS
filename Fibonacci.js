function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fibonacci(n - 1);
    }
}
console.log(fibonacci(5));