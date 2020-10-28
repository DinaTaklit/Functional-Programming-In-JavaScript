//====================================================
//======== The world without functors
//====================================================

let plus1 = function(value){
    return value +1;
}

console.log(plus1(3)) // 4
// what if we want to pass an array?
console.log(plus1([3,4])) // Breaks!

// We should add code

let plus1 = function(value){
    if (Array.isArray(value)){
        var newArray = []
        for (let i = 0; i < value.length; i++){
            newArray[i] = value[i] +1
        }
        return newArray;
    }
    return value + 1;
}

console.log(plus1([3,4])) // [4,5]

// Now what if we want to pass string?
// Again we should modify the first code

let plus1 = function(value){
    if (Array.isArray(value)){
        var newArray = []
        for (let i = 0; i < value.length; i++){
            newArray[i] = value[i] +1
        }
        return newArray;
    }
    if (typeof value === 'string'){
        var chars = vlaue.split('')
        var newCharArray = []
        for (let i=0; i<chars.length; i++){
            newCharArray[i] = String.fromCharCode(
                chars[i].charCodeAt(0) + 1
            )
        }
        return newArray.join('')
    }
    return value + 1;
}
console.log(plus1('ABC')) // return => ABCD

// Now what if we want instead do minus 1, things become worst, here were functors comes in hand.
