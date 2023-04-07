import * as dotenv from 'dotenv';
dotenv.config();

import { Octokit } from 'octokit';
import { subDays } from 'date-fns';
import axios from 'axios';

const STATUS_PER_WEEK = 5;

const getMissingStatuses = async () => {
  const fullDate = new Date();

  try {
    const octokit = new Octokit({
      auth: `${process.env.GH_TOKEN}`,
      userAgent: 'zinns integration',
    });

    const { data: status } = await octokit.rest.issues.listComments({
      // eslint-disable-next-line camelcase
      issue_number: '40',
      owner: 'zinns',
      repo: 'training',
      since: subDays(fullDate, 4),
    });

    const message = `
    In this week [Andres Soto](tg://user?id=1265976007) had ${
      STATUS_PER_WEEK - status.length
    } missing status\\(es\\)
    `;

    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&parse_mode=MarkdownV2&text=${message}`,
    );
  } catch (error) {
    console.log(error);
  }
};

getMissingStatuses();
