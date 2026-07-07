import pg from 'pg';

const { Pool } = pg;

// TODO: Make sure DATABASE_URL is set in your .env file.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Example usage later:
// const result = await pool.query('SELECT * FROM projects');
// console.log(result.rows);
