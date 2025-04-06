import { knex } from '@/database'
import { FastifyInstance } from 'fastify'

export async function search(app: FastifyInstance) {
  app.get('/buscar', async () => {
    const test = await knex('transactions').select('*')

    return test
  })
}
