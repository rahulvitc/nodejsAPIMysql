let getResponse = (data, callback) => {
    if(data.name == 'Shivam') {
    callback(null, 'Hello Sir Its you ! Welcome')
    } else if (data.name == '') {
    callback('Name can not be blank'); // send error message
    } else {
    callback(undefined, 'Someone else is trying to login !!') // undefined — no error
    }
}

let data = {
    name: 'Shivam', 
    address: 'New Delhi'
}

getResponse(data, (errorMessage, results) => {
if(errorMessage) {
console.log(errorMessage)
} else {
console.log('result : ',results)
}
})