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


//========================================================================

// Advanced example to show why currying is useful
let dragons = [
    {name: 'fluffykins', element: 'lighthning'},
    {name: 'noomi', element: 'lighthning'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'timewrap'},
]

const hasElement = (element, item) => item.element === element;
let lighthningDragons = dragons.filter( item => hasElement('lighthning', item));
console.log(lighthningDragons);

// Now see the improvement with currying

const hasElement_curry = _.curry(hasElement);
let lighthningDragons_curry = dragons.filter(hasElement_curry('lighthning'));
console.log(lighthningDragons_curry);