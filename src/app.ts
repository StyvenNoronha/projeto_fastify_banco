import fastify from 'fastify'

import { transactionsRoutes } from './routes/transactions'
import { search } from './routes/search'
import cookie from '@fastify/cookie'
export const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.register(search)
