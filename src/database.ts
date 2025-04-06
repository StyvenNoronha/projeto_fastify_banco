import { knex as knexConfig, Knex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw Error('DATABASE NOT FOUND')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './tmp/migrations',
  },
}

export const knex = knexConfig(config)
