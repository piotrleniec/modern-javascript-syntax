console.log('Running examples/destructuring.js')

const object = { a: 1, b: 2, c: 3 }
console.log('object =', object)

function foo(object) {
  const a = object.a
  console.log('a =', a)

  const b = object.b
  console.log('b =', b)

  const c = object.c
  console.log('c =', c)
}

function bar(object) {
  const { a, b, c } = object

  console.log('a =', a)
  console.log('b =', b)
  console.log('c =', c)
}

console.log('Calling foo(object)')
foo(object)

console.log('Calling bar(object)')
bar(object)
