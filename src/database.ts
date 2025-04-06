import { knex as knexConfig, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './tmp/migrations',
  },
}

export const knex = knexConfig(config)
