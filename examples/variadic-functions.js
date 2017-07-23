console.log('Running examples/variadic-functions.js')

function foo(a, b) {
  console.log('a =', a)
  console.log('b =', b)
  console.log('Array.prototype.slice.call(arguments) =', Array.prototype.slice.call(arguments))
}

console.log('Calling foo()')
foo()

console.log('Calling foo(1)')
foo(1)

console.log('Calling foo(1, 2)')
foo(1, 2)

console.log('Calling foo(1, 2, 3)')
foo(1, 2, 3)

function bar(a, b, ...c) {
  console.log('a =', a)
  console.log('b =', b)
  console.log('c =', c)
}

console.log('Calling bar()')
bar()

console.log('Calling bar(1)')
bar(1)

console.log('Calling bar(1, 2)')
bar(1, 2)

console.log('Calling bar(1, 2, 3)')
bar(1, 2, 3)
