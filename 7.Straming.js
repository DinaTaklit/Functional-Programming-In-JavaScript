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

createStupidNumberStream.each(console.log)