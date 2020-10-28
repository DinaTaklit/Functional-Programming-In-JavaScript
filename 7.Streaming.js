import fs from 'file-system'
import higland from 'highland'

//==========================================
// Simplest example of Sreaming
//==========================================

const createStupidNumberStream = {
    each: (callback) => {
        setTimeout(() => callback(1), 1000)
        setTimeout(() => callback(2), 2000)
        setTimeout(() => callback(3), 3000)
    }
}

// createStupidNumberStream.each(console.log)

//==========================================
// Advanced example of Sreaming
//==========================================


higland(fs.createReadStream('customers.csv', 'utf8'))
    .split()
    .map(line => line.split(','))
    .map(part => ({
        name: part[0],
        numPurchases: part[1]
    }))
    .filter(customer => customer.numPurchases > 2)
    .map(customer => customer.name)
    .each( item => console.log('each: ', item))
