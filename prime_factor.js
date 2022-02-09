let start = performance.now();
let largest = 1;
let x = 1000;
for (let i = 2; i <= x; i++) {
    if (x % i == 0) {
        x = x / i;
        largest = i;
    }
}
let duration = performance.now() - start;
console.log(largest);
console.log("The code took " + duration + " seconds long to compile on my slow HP laptop.");