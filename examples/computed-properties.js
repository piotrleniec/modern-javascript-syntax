console.log('Running examples/computed-properties.js')

const propertyName = 'foo'
console.log('propertyName =', propertyName)
const propertyValue = 'bar'
console.log('propertyValue =', propertyValue)

const a = {}
a[propertyName] = propertyValue
console.log('a =', a)

const b = { [propertyName]: propertyValue }
console.log('b =', b)
