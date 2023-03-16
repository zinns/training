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
  const unusedStatuses = ['in_progress', 'queued'];

  return update.length === 1 ? !unusedStatuses.includes(payload[update[0]]?.status) : true;
};

export const createDescription = (payload, update) => {
  return {
    check_run: ` \\-\\> ${payload?.check_run?.name} \\-\\> status: ${payload?.check_run?.status} \\-\\> conclusion: ${payload?.check_run?.conclusion}`,
    check_suite: ` \\-\\> ${payload?.check_suite?.head_branch} \\-\\> status: ${payload?.check_suite?.status} \\-\\> conclusion: ${payload?.check_suite?.conclusion}`,
    issue: ` \\-\\> name: ${payload?.issue?.title} ${
      update?.[1] ? `\\-\\> action: ${update[1]}` : ''
    } `,
    pull_request: ` \\-\\> ${payload?.pull_request?.state} \\-\\> merged: ${
      payload?.pull_request?.merged
    } ${
      payload?.pull_request?.merged
        ? ` \\-\\> merged by: ${payload?.pull_request?.merged_by.login} \\-\\> reviewers: ${
            payload?.pull_request?.requested_reviewers.length > 0
              ? payload?.pull_request?.requested_reviewers.join(', ')
              : payload?.pull_request?.requested_reviewers.length
          } \\-\\> labels: ${
            payload?.pull_request?.labels.length > 0 ? payload?.pull_request?.labels.join(', ') : 0
          }`
        : ''
    }`,
    push: ` \\-\\> ${payload?.commits?.length} ${
      payload?.forced ? 'forced commit(s)' : 'commit(s)'
    } \\-\\> ${payload?.ref?.split('/').splice(2).join('')}`,
    workflow_job: ` \\-\\> ${payload?.workflow_job?.head_branch} \\-\\> job: ${payload?.workflow_job?.name} \\-\\> status: ${payload?.workflow_job?.status} \\-\\> conclusion: ${payload?.workflow_job?.conclusion}`,
    workflow_run: ` \\-\\> ${payload?.workflow_run?.head_branch} \\-\\> status: ${payload?.workflow_run?.status} \\-\\> conclusion: ${payload?.workflow_run?.conclusion}`,
  }[update[0]];
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
