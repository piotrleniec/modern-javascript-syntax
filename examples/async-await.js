console.log('Running examples/async-await.js')

function fetch(url, error, trackingId) {
  console.log(`[${trackingId}] Fetching ${url}`)

  if (error) {
    return Promise.reject({ message: 'Internal server error.' })
  }

  const response = {
    json: () => Promise.resolve({ token: '5vwapco4n057' })
  }

  return Promise.resolve(response)
}

function foo(error, trackingId) {
  return fetch('/data.json', error, trackingId)
    .then(response => response.json())
    .then(data => { console.log(`[${trackingId}] data =`, data) })
    .catch(error => { console.log(`[${trackingId}] error =`, error) })
}

async function bar(error, trackingId) {
  try {
    const response = await fetch('/data.json', error, trackingId)
    const data = await response.json()
    console.log(`[${trackingId}] data =`, data)
  }
  catch(error) {
    console.log(`[${trackingId}] error =`, error)
  }
}

console.log('[1] Calling foo(true, 1)')
foo(true, 1)

console.log('[2] Calling foo(false, 2)')
foo(false, 2)

console.log('[3] Calling bar(true, 3)')
bar(true, 3)

console.log('[4] Calling bar(false, 4)')
bar(false, 4)
