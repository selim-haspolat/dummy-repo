const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]

const deepItems = _.flattenDeep(items)

console.log(deepItems);