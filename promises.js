const makeRequest = (location) => {
    return new Promise((resolve, reject) => {
        if (location === 'google') {
            resolve('google says hi')
        } else {
            reject('We can only talk to google')
        }
    })
}
const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`extra information + ${response}`)
    })
}

// makeRequest('google').then(response => {
//     console.log('response has been received')
//     return processRequest(response)
// }).then(proceessedResponse => {
//     console.log(proceessedResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {
    try {
        const response = await makeRequest('google')
        console.log('response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}
doWork()