let array = [1, 2];
let i = 2;
let counter = 1;
let sum = 2;
while (array[counter] < 4000000) {
    i = i + array[counter - 1];
    array.push(i);
    ++counter;
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(array);
console.log(sum);