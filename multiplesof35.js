let max = 1000;
let mulArray = [0];
let sum = 0;
for (let i = 1; i < max; i++) {
    if (i * 3 >= max) {
        break
    }
    mulArray.push(i * 3);
}
for (let i = 1; i < max; i++) {
    if (i * 5 >= max) {
        break
    }
    mulArray.push(i * 5);;
}
let uniqueArray = [...new Set(mulArray)];
for (let i = 0; i < uniqueArray.length; i++) {
    sum += uniqueArray[i];
}
console.log(sum);