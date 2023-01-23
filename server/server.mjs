// CONFIG

import express from 'express';

import {
  createDescription,
  extractData,
  formatMessage,
  validatePayload,
} from './utils/message.mjs';
import { sendMessage } from './utils/sendMessage.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.post('/github-updates', async (req, res) => {
  try {
    const { actor, location, payload, update } = extractData(req.body);
    const isValid = validatePayload(payload, update);
    const description = createDescription(payload, update);
    const message = formatMessage(actor, description, location, update);

    console.log(isValid, message);

    if (isValid) {
      // await sendMessage(message);
    }

    res.send('Everything went well 🚀').status(200);
  } catch (error) {
    console.log(error);
    res.send('There was an update but there was an error sending the body').status(200);
  }
});

// LISTEN
app.listen(PORT, () => console.log('Server ready 🚀'));

export default app;
