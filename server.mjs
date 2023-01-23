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
  const unusedKeys = ['action', 'repository', 'sender', 'organization', 'number'];

  try {
    const payload = req.body;
    const update = Object.keys(payload).filter(key => !unusedKeys.includes(key));
    const {
      action,
      sender: { login: actor },
      repository: { name: location },
    } = payload;

    const message = `
      *GitHub Changes*\n
Update: *${JSON.stringify(update)}*\n
Action: *${action}*\n
User: *${actor}*\n
Repo: *${location}*\n
&#8211;&#8211;&#8211;&#8211;&#8211;&#8211;&#8211;&#8211;&#8211;
    `;

    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&parse_mode=MarkdownV2&text=${message}`,
    );

    res.send('Everything went well 🚀').status(200);
  } catch (error) {
    console.log(error);
    res.send('There was an update but there was an error sending the body').status(200);
  }
});

// LISTEN
app.listen(PORT, () => console.log('Server ready 🚀'));

export default app;
