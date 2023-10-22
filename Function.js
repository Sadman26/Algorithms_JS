//Normal Function
function getsum(x, y) {
    return getsum(x,y+1);
}
console.log(getsum(1, 2));

//Fat Arrow Function
let getsum2 = (x, y) => x + y
console.log(getsum2(11, 2));
