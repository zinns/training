/* eslint-disable camelcase */
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
  const unusedKeys = [
    'action',
    'after',
    'base_ref',
    'before',
    'commits',
    'compare',
    'created',
    'deleted',
    'forced',
    'head_commit',
    'number',
    'organization',
    'ref',
    'repository',
    'sender',
  ];

  try {
    const payload = req.body;
    const update = Object.keys(payload)
      .filter(key => !unusedKeys.includes(key))
      .map(key => (key === 'pusher' ? 'push' : key));
    const {
      action,
      sender: { login: actor },
      repository: { name: location },
    } = payload;
    const description =
      update.length === 1
        ? {
            check_run: `-> ${payload.check_run.name} -> status: ${payload.check_run.status} -> conclusion: ${payload.check_run.conclusion}`,
            check_suite: `-> ${payload.check_suite.head_branch} -> status: ${payload.check_suite.status} -> conclusion: ${payload.check_suite.conclusion}`,
            issue: `-> name: ${payload.issue.title}`,
            pull_request: `-> ${payload.pull_request.state}`,
            push: `-> ${payload.commits.length} ${
              payload.forced ? 'forced commit(s)' : 'commit(s)'
            } -> ${payload.ref.split('/').splice(2)}`,
            workflow_job: `-> ${payload.workflow_job.head_branch} -> job: ${payload.workflow_job.name} -> status: ${payload.workflow_job.status} -> conclusion: ${payload.workflow_job.conclusion}`,
            workflow_run: `-> ${payload.workflow_run.head_branch} -> status: ${payload.workflow_run.status} -> conclusion: ${payload.workflow_run.conclusion}`,
          }[update[0]]
        : null;

    const message = `
      *GitHub Changes*\n
Update: *${JSON.stringify(update)}${description ?? ''}*\n
Action: *${action}*\n
User: *${actor}*\n
Repo: *${location}*\n
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
