console.log('Running examples/default-parameters.js')

function foo(a, b) {
  if (typeof b === 'undefined') {
    b = 2
  }

  console.log('a =', a)
  console.log('b =', b)
}

console.log('Calling foo()')
foo()

console.log('Calling foo(1)')
foo(1)

console.log('Calling foo(1, 3)')
foo(1, 3)

function bar(a, b = 2) {
  console.log('a =', a)
  console.log('b =', b)
}

console.log('Calling bar()')
bar()

console.log('Calling bar(1)')
bar(1)

console.log('Calling bar(1, 3)')
bar(1, 3)
