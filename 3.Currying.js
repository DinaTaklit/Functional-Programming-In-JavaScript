import _ from './node_modules/lodash/lodash.js'

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

// Transfor a normal function into currying function
const dragon_nrmal_to_currying = _.curry(dragon_nrmal);
console.log(dragon_nrmal_to_currying('fluffykins')('tiny')('lighthning'));
