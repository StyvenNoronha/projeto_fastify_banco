import fastify from "fastify";

const app = fastify()

app.get('/hello',()=>{
    return 'hello world fastify'
})

app.listen({
    port:3333,

}).then(()=>{
    console.log('HTTP server Running')
})