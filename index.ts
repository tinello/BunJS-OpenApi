//https://github.com/kogosoftwarellc/open-api/tree/main/packages

//middleware
//https://betterprogramming.pub/write-a-express-like-api-using-bunjs-79e77a6a7a31
//https://github.com/lau1944/bunrest

const name = 'G'

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hi " + name)
  },
})


console.log(`Listening on http://localhost:${server.port} ...`)
