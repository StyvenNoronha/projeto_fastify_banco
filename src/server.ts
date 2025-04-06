import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import { search } from './routes/search'
const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.register(search)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server Running')
  })
