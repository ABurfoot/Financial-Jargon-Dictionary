import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'financial_jargon_dictionary',
  password: 'SQL1!',
  port: 5432,
});

// Route to get all financial terms
app.get('/api/terms', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, explanation, category, difficulty, pronunciation, example FROM financial_terms');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'An error occurred while fetching terms' });
  }
});

// Route to get a random featured term
app.get('/api/featured-term', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, explanation, category, difficulty, pronunciation, example FROM financial_terms ORDER BY RANDOM() LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'An error occurred while fetching the featured term' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});