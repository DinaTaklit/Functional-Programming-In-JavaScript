
// A normal function
const dragon_nrmal = (name, size, element) => 
    `${name} is a ${size} dragon that breathes ${element}!`

console.log(dragon_nrmal('fluffykins', 'tiny', 'lighthning'));

// Currying version
const dragon_currying = 
    name => 
    size =>
    element => `${name} is a ${size} dragon that breathes ${element}!`
    
console.log(dragon_currying('fluffykins')('tiny')('lighthning'));
