// import { times } from 'lodash'
// import times from 'lodash/times'
//
// times(3, () => console.log('whee'))


// import map from 'lodash/map'
//
// console.log(map([{id: 'foo'}, {id: 'bar'}], 'id')) // ['foo', 'bar']
// console.log(map([{id: 'foo'}, {id: 'bar'}], obj => obj.id))


// import forEach from 'lodash/forEach'
//
// forEach({foo: 'bar', baz: 'quux'}, (value, key) => {
//   console.log(key, value)
//   // prints 'foo bar' then 'baz quux'
// })


// import forEach from 'lodash/forEach'
//
// forEach(['foo', 'bar'], obj => {
//   console.log(obj) // prints 'foo' then 'bar
// })


// import _ from 'lodash'
// const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// console.log(_(array)
//   .map(i => parseInt(i, 10))
//   .filter(i => i % 2 === 1)
//   .take(5)
//   .value()
// ) // prints '[ 1, 3, 5, 7, 9 ]'


import map from 'lodash/map'
import filter from 'lodash/filter'
import take from 'lodash/take'
const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

console.log(
  take(
    filter(
      map(array, i => parseInt(i, 10)),
    i => i % 2 === 1),
  5)
) // prints '[ 1, 3, 5, 7, 9 ]'