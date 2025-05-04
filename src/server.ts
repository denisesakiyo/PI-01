import mongoose from 'mongoose';
import app from './app';
import 'dotenv/config';

// URL foi retirada do script-projetiPI
const MONGO_DB_URL = process.env.DB_URL ?? '';

//mongoose.conect(endpoint) é a função que conecta a aplicação mongodb
mongoose
  .connect(MONGO_DB_URL, {
    auth: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    dbName: 'dados',
  })
  .then(async () => {
    console.log('MongoDB Connection Succeeded');
  })
  .catch((err) => {
    console.log(`Error in DB connection`, err.message);
  });

const PORT = process.env.PORT ?? 3333;

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
