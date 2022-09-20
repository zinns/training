# ZINNS Training

## This repo includes several folders to train mandatory skills for Front End Development

Each folder has different level of knowledge and as the trainings are completed the level of knowledge grows.

## Installation

You should clone this repo using HTTPS / SSH or GH CLI

This repo uses `Yarn` as package manager
Once the repo is local run this script to get all the necessary packages `yarn`

## Training

Every new task or exercise should be in its own branch
You have to follow the next convention to be able to share your progress

`your.name/topic/exercise-number`

Example:
`edgar.zea/javascript/exercise-3`

## CI - CD

This repo has CI and CD configured. The steps to make a good implementation are:
- Make sure you have named your branch following the branch convention
- Make sure your branch is updated with develop
- Make sure you format all your files
- Make sure there are no linter errors for JS files
- Make sure you follow the [commit convention](#commits-convention)

# Board

There is a Board (Project) in GitHub where are cards related with tasks.

If the card is related to a SCRUM task you have to follow the next convention:

    **Historia**
    Navbar

    **Puntaje**

      - [ ] 1
      - [ ] 2
      - [ ] 3
      - [x] 5
      - [ ] 8

    **Descripción**
    - Agregar logo del sitio al navbar

The Board has 4 columns:
- To do
- In progress
- QA
- Done

When a card is created it should be in **To Do**.
At the moment you start to work on some card it should be moved to **In progress**
Only when the [PR](#pr) is created the card should be in **QA**

When the card is in **QA** your reviewer has to check your implementation and approve it or request changes.

If the PR is approved the card can be moved to **Done**

## Commits Convention

Here is a guide for each part of the commit

`type(scope): subject`

- Type: type of change that you're committing:
- - feat      - A new feature
- - fix        - A bug fix
- - docs      - Documentation only changes
- - style     - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- - refactor  - A code change that neither fixes a bug nor adds a feature
- - perf      - A code change that improves performance
- - test      - Adding missing tests or correcting existing tests
- - build     - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- - ci        - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- - build     - Other changes that don't modify src or test files
- - revert    - Reverts a previous commit

- Scope: What is the scope of this change (e.g. component or file name)
- Subject: Write a short, imperative tense description of the change

## Deliveries

When some task has been done, you have to push your changes to your branch and create the PR of this change in order to review your changes

## PR

When you're creating a PR of your changes, follow the next steps:
- Add a description about the changes done
- Add a preview if the changes were visual
- Add a reviewer
- Add yourself as assignee
- Add the specific label
- Select the project assigned (if it applies)
- If there is a card for the changes done in the PR, move the cards and add the PR ID to each card
