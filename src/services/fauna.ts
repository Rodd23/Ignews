import { Client as FaunaClient } from 'faunadb';

export const client = new FaunaClient({
    secret:  process.env.FAUNADB_KEY,
    domain: "db.us.fauna.com",
})

