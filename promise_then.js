
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 0);
});

promise1
    .then(value => { return value + ' and bars'; })
    .then(value => { return value + ' and bars again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) });

//********************************************************* */


const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
        const x = "geeksforgeeks";
        const y = "geekssforgeeks";
        if (x === y) {
            resolve("Strings are same");
        } else {
            reject("Strings are not same");
        }
    });

    return promise;
};

async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log("Error: " + error);
    }
}

demoPromise();

//******************************************************

const example2 = new Promise(function (resolve, reject) {
    const string1 = "sup";
    const string2 = "sup";
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});

example2
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(err => { console.log(err) });









