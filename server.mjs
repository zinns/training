// CONFIG
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.post('/github-updates', async (req, res) => {
  await axios.get(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${
      process.env.ZINNS_TELEGRAM_CHAT_ID
    }&text=${JSON.stringify(req.body)}`,
  );
  res.status(200);
});

// LISTEN
app.listen(PORT, () => console.log('Servidor listo en el puerto 3000'));

export default app;
