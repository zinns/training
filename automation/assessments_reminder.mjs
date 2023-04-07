import * as dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const assessmentsReminder = async () => {
  try {
    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&text=It is time to do the assessments`,
    );
  } catch (error) {
    console.log(error);
  }
};

assessmentsReminder();
