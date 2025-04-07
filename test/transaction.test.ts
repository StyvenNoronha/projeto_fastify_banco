import { expect, test, beforeAll, afterAll } from 'vitest'
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

  test('o usuário consegue criar uma nova transação', async () => {
    const response = await request(app.server)
      .post('/transactions')
      .send({ title: 'test do vitest', amount: 200, type: 'credit' })

    expect(response.statusCode).toEqual(201)
  })
})
