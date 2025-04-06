import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
const app = fastify()

app.register(transactionsRoutes)

app.get('/buscar', async () => {
  const test = await knex('transactions').select('*')

  return test
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server Running')
  })
