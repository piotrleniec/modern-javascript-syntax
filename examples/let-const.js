console.log('Running examples/let-const.js')

function foo() {
  var a = 1

  if (true) {
    var b = 2
  }

  while (true) {
    var c = 3
    break
  }

  console.log('a =', a)
  console.log('b =', b)
  console.log('c =', c)
}

function bar() {
  let a = 1

  if (true) {
    let b = 2
  }

  while (true) {
    let c = 3
    break
  }

  console.log('a =', a)
  // console.log('b =', b) COMPILE TIME ERROR
  // console.log('c =', c) COMPILE TIME ERROR
}

function baz() {
  let a = 1
  console.log('a =', a)
  a = 2
  console.log('a =', a)

  const b = 1
  console.log('b =', b)
  // b = 2 COMPILE TIME ERROR
}

console.log('Calling foo')
foo()
console.log('Calling bar')
bar()
console.log('Calling baz')
baz()
