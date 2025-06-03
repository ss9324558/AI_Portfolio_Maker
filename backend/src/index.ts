import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Portfolio Maker API');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
