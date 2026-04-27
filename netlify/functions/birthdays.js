import { Client } from 'pg'

export const handler = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })
  try {
    await client.connect()
    const result = await client.query('SELECT * FROM columpio.birthdays')
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        stack: err.stack,
        code: err.code
      })
    }
  } finally {
    await client.end()
  }
}

