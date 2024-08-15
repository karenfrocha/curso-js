function sincrona() {
  const user = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())

  console.log(user)
  console.log((user as any).name)
}

async function assincrona() {
  const user = await fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())

  console.log(user)
  console.log((user as any).name)
}

sincrona()
assincrona()