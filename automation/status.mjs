import * as dotenv from 'dotenv';
dotenv.config();

import { Octokit } from 'octokit';
import { differenceInBusinessDays } from 'date-fns';
import axios from 'axios';

const getMissingStatuses = async () => {
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;

  try {
    const octokit = new Octokit({
      auth: `${process.env.GH_TOKEN}`,
      userAgent: 'zinns integration',
    });

    const { data: status } = await octokit.rest.issues.listComments({
      issue_number: '40' /* eslint-disable-line camelcase */,
      owner: 'zinns',
      repo: 'training',
      since: new Date(`${year}-${month}-1`),
    });

    const today = new Date();
    const lastComment =
      status.length > 0 ? new Date(status[status.length - 1].created_at) : fullDate;

    const missingStatuses = differenceInBusinessDays(today, lastComment);

    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&text=There are ${missingStatuses} missing status(es)`,
    );
  } catch (error) {
    console.log(error);
  }
};

getMissingStatuses();
