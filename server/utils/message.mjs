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
        check_run: ` &#8594; ${payload?.check_run?.name} &#8594; status: ${payload?.check_run?.status} &#8594; conclusion: ${payload?.check_run?.conclusion}`,
        check_suite: ` &#8594; ${payload?.check_suite?.head_branch} &#8594; status: ${payload?.check_suite?.status} &#8594; conclusion: ${payload?.check_suite?.conclusion}`,
        issue: ` &#8594; name: ${payload?.issue?.title}`,
        pull_request: ` &#8594; ${payload?.pull_request?.state} &#8594; merged: ${
          payload?.pull_request?.merged
        } ${
          payload?.pull_request?.merged
            ? ` &#8594; merged by: ${payload?.pull_request?.merged_by.login}`
            : ''
        }`,
        push: ` &#8594; ${payload?.commits?.length} ${
          payload?.forced ? 'forced commit(s)' : 'commit(s)'
        } &#8594; ${payload?.ref?.split('/').splice(2).join('')}`,
        workflow_job: ` &#8594; ${payload?.workflow_job?.head_branch} &#8594; job: ${payload?.workflow_job?.name} &#8594; status: ${payload?.workflow_job?.status} &#8594; conclusion: ${payload?.workflow_job?.conclusion}`,
        workflow_run: ` &#8594; ${payload?.workflow_run?.head_branch} &#8594; status: ${payload?.workflow_run?.status} &#8594; conclusion: ${payload?.workflow_run?.conclusion}`,
      }[update[0]]
    : null;
};

export const formatMessage = (actor, description, location, update) => {
  const message = `
*GitHub Changes*\n
User: *${actor}*\n
Update: *${update.length > 1 ? update.join('/') : update[0]}${description ?? ''}*\n
Repo: *${location}*\n
`;

  return message;
};
