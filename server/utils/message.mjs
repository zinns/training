/* eslint-disable camelcase */

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
  'workflow',
];

export const extractData = body => {
  const payload = body;
  const update = Object.keys(payload)
    .filter(key => !unusedKeys.includes(key))
    .map(key => (key === 'pusher' ? 'push' : key));
  const {
    sender: { login: actor },
    repository: { name: location },
  } = payload;

  return {
    actor,
    location,
    payload,
    update,
  };
};

export const validatePayload = (payload, update) => {
  return update.length === 1 ? payload[update[0]]?.status !== 'in_progress' : true;
};

export const createDescription = (payload, update) => {
  return update.length === 1
    ? {
        check_run: ` \\-\\> ${payload?.check_run?.name} \\-\\> status: ${payload?.check_run?.status} \\-\\> conclusion: ${payload?.check_run?.conclusion}`,
        check_suite: ` \\-\\> ${payload?.check_suite?.head_branch} \\-\\> status: ${payload?.check_suite?.status} \\-\\> conclusion: ${payload?.check_suite?.conclusion}`,
        issue: ` \\-\\> name: ${payload?.issue?.title}`,
        pull_request: ` \\-\\> ${payload?.pull_request?.state} \\-\\> merged: ${
          payload?.pull_request?.merged
        } ${
          payload?.pull_request?.merged
            ? ` \\-\\> merged by: ${payload?.pull_request?.merged_by.login}`
            : ''
        }`,
        push: ` \\-\\> ${payload?.commits?.length} ${
          payload?.forced ? 'forced commit(s)' : 'commit(s)'
        } \\-\\> ${payload?.ref?.split('/').splice(2).join('')}`,
        workflow_job: ` \\-\\> ${payload?.workflow_job?.head_branch} \\-\\> job: ${payload?.workflow_job?.name} \\-\\> status: ${payload?.workflow_job?.status} \\-\\> conclusion: ${payload?.workflow_job?.conclusion}`,
        workflow_run: ` \\-\\> ${payload?.workflow_run?.head_branch} \\-\\> status: ${payload?.workflow_run?.status} \\-\\> conclusion: ${payload?.workflow_run?.conclusion}`,
      }[update[0]]
    : null;
};

export const formatMessage = (actor, description, location, update) => {
  const updateFormatted = [...(update.length > 1 ? update.join('/') : update[0])]
    .map(char => (char === '_' ? ' ' : char))
    .join('');
  const message = `*GitHub Changes*
User: *${actor}*
Update: *${updateFormatted}${description ?? ''}*
Repo: *${location}*`;

  return message;
};
