import { expect, test, beforeAll, afterAll, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'
import { describe } from 'node:test'

describe('transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  test('o usuário consegue criar uma nova transação', async () => {
    const response = await request(app.server)
      .post('/transactions')
      .send({ title: 'test do vitest', amount: 200, type: 'credit' })

    expect(response.statusCode).toEqual(201)
  })

  test('listar todas as transações', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({ title: 'test do vitest', amount: 200, type: 'credit' })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'test do vitest',
        amount: 200,
      }),
    ])
  })
})
