// Recurstion simple example
const countDownForm = num => {
    if (num===0) return;
    console.log(num);
    countDownForm(num -1);
}

// countDownForm(10);

//=============================================
// Recursion : advanced example.

const categories = [
    { id: 'animals', parent: null},
    { id: 'mamals', parent: 'animals'},
    { id: 'cats', parent: 'mamals'},
    { id: 'dogs', parent: 'mamals'},
    { id: 'chihuahua', parent: 'dogs'},
    { id: 'labrador', parent: 'dogs'},
    { id: 'persian', parent: 'cats'},
    { id: 'siamese', parent: 'cats'}
]

/***
 * We want to get this tree
{
    "animals": {
        "mamals": {
            "cats": {
                "persian": null,
                "siamese": null,
            }
            "dogs": {
                "chihuahua": null,
                "labrador": null
            }
        }
    }
}
*****/

// So let us use recursion to solve this problem


const makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(category => category.parent === parent)
        .forEach(category => 
            node[category.id] = makeTree (categories, category.id))
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null),
        null,
        2
    )
);
