console.log('Running examples/template-literals.js')

const user = { name: 'Peter', age: 24 }
console.log('user =', user)

const a = 'Hello. My name is ' + user.name + ". I'm " + user.age + ' years old.'
console.log('a =', a)

const b = ['Hello. My name is ', user.name, ". I'm ", user.age, ' years old.'].join('')
console.log('b =', b)

const c = `Hello. My name is ${user.name}. I'm ${user.age} years old.`
console.log('c =', c)
