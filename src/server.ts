import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
import { randomUUID } from 'node:crypto'
const app = fastify()

app.get('/buscar', async () => {
  const test = await knex('transactions').select('*')

  return test
})

app.get('/user', async () => {
  const user = await knex('transactions')
    .insert({
      id: randomUUID(),
      title: 'teste',
      amount: 1000,
    })
    .returning('*')
  return user
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server Running')
  })
