import _ from './node_modules/lodash/lodash.js'

// Example to show why currying is useful
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