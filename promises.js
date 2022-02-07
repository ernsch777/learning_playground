/*
    1. Use the getCats, getDogs, and getBirds functions to retrieve data.
    2. Call the superSecretOrder function and pass it a single (flat) array of all the animals.
    3. Log to the console the result that superSecretOrder returns.
*/


function getCats(cb) {
    const random = Math.random() * 1000
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"])
    }, random)
}

function getDogs(cb) {
    const random = Math.random() * 1000
    setTimeout(function () {
        cb(["EatsAnything", "Barksalot", "HeadTilt"])
    }, random)
}

function getBirds(cb) {
    const random = Math.random() * 1000
    setTimeout(function () {
        cb(["Scruffy", "Baldy", "Screech"])
    }, random)
}

function superSecretOrder(items, cb) {
    const random = Math.random() * 1000
    setTimeout(function () {
        cb([...items].sort())
    }, random)
}

getCats(function (cats) {
    console.log(cats)
})