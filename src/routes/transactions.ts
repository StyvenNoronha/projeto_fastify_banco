import { knex } from '@/database'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
