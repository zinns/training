import * as dotenv from 'dotenv';
dotenv.config();

import { Octokit } from 'octokit';
import { differenceInBusinessDays } from 'date-fns';
import axios from 'axios';

const getMissingStatuses = async () => {
  try {
    const octokit = new Octokit({
      auth: `${process.env.GH_TOKEN}`,
      userAgent: 'zinns integration',
    });

    const { data } = await octokit.rest.issues.listComments({
      issue_number: '40' /* eslint-disable-line camelcase */,
      owner: 'zinns',
      repo: 'training',
    });

    const today = new Date();
    const lastComment = new Date(data[data.length - 1].created_at);

    const missingStatuses = differenceInBusinessDays(today, lastComment);

    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&text=There are ${missingStatuses} missing status(es)`,
    );
  } catch (error) {
    console.log(error);
  }
};

getMissingStatuses();
