const _ = require('lodash');

const array = [4,6,2,8,3,5,9,6,1];

console.log('Imprimindo de 3 em 3');

_.chunk(array,3).forEach((item) => {
    console.log('-----');

    item.forEach((i) => {
        console.log(i + "!");
    })
});

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], n => n % 2);
// → [[1, 3], [2, 4]]
