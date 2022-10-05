# ZINNS Training

## This repo includes several folders to train mandatory skills for Front End Development

Each folder has different level of knowledge and as the trainings are completed the level of knowledge grows.

## Installation

You should clone this repo using HTTPS / SSH or GH CLI

This repo uses `Yarn` as package manager
Once the repo is local run this script to get all the necessary packages `yarn`

## Training

Every new task or exercise should be in its own **branch**
You have to follow the next convention to be able to share your progress

`your.name/topic/exercise-number`

Example:
`edgar.zea/javascript/exercise-3`

For advanced progress check this [global-branching](#global-branching)

## CI - CD

This repo has CI and CD configured. The steps to make a good implementation are:
- Make sure you have named your branch following the branch convention
- Make sure your branch is updated with develop
- Make sure all your folders and files are organized [see more](#folders)
- Make sure you format all your files
- Make sure there are no linter errors for JS files
- Make sure you follow the [commit convention](#commits-convention)


## Board

There is a Board (Project) in GitHub where are cards related with specific tasks.

At the beginning of the course there would be some cards for the first lessons that have a particular [structure](#card-structure) based on subtasks from a generic task.

As you move through the levels of the course there would be a part where you'll have to create the cards.

The base structure is try to split the website that you have to develop into components and add its 4 common screen sizes: (UW / Desktop / Tablet / Mobile) when it needs it.

At the end of each card there should be a check for QA and this have to be only for reviewers.

As you are completing the subtasks you'll have to check the task that was completed, make the specific commit and add it to the card as a comment including the commit ID (hash) and screenshots or video assets as probes of the changes.

Once a commit was submitted the reviewer can check the changes done an add the  date of the review to the QA check and must add a comment describing the bugs found with screenshots or video or if bugs were not found write some recommendations or congratulations.

### Card Structure

    [ ] Navbar
      - [ ] UW
      - [ ] Desktop
      - [ ] Tablet
      - [ ] Mobile
    [ ] Hero
      - [ ] UW
      - [ ] Desktop
      - [ ] Tablet
      - [ ] Mobile
    ...
    [ ] Footer
      - [ ] UW
      - [ ] Desktop
      - [ ] Tablet
      - [ ] Mobile
    [ ] QA

The Board has 4 columns:
- To do
- In progress
- QA Homework
- QA Projects
- Done

When a card is created it should be in **To Do**.
At the moment you start to work on some card it should be moved to **In progress**
Only when the [PR](#pr) is created the card should be in **QA** depending it is a Homework or Project task

When the card is in **QA** your reviewer has to check your implementation and approve it or request changes.

If the PR is approved the card can be moved to **Done**

## Folders

Inside the trainings folder there are some folders for each course section.
When you have to start a new exercise you'll have to create the folder to contain all the exercise files. You have to follow the next convention:

    - trainings
      - HTML-CSS
        - 01

Also you'll need to create folders for each type of files of the project for example:

    - trainings
      - HTML-CSS
        - 01
          - assets
            - image.png
          - index.html
          - styles
            - style.css
          - scripts
            - index.js


## JavaScript

When you were working on JS vanilla exercises you'll find there is a tool called ESLINT that maybe shows you some errors while you're writing code.
This linter helps the project to maintain a specific structure.
Also it would help to reinforce our rules for outside projects.

If you have some problems with this Linter and you don't find how to solve it, please contact me [Edgar Zea](https://github.com/eamzea) to help you or to fix this issue.

## React

When you were doing React exercises you have to run one of these scripts

**NPM**

`npm init react-app my-app`

**YARN**

`yarn create react-app my-app`

If you want to add some template you can review this documentation:

[Create React App Templates](https://create-react-app.dev/docs/custom-templates)

If you want to learn more about new tools you can check this

[Vite](https://vitejs.dev/)

## Run React

In order to run the react project you're working on there is one script in `package.json` file -> **`react`**
So you are able to run `yarn run react` and you have to pass the number of the project you are looking for, right now there is just one project.

Then, the script to execute should be **`yarn run react 1`** and automatically the server would start and you can continue with your development.
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
- Verify that your branch is updated
- Add a description about the changes done
- Add a preview if the changes were visual
- Add a reviewer
- Add yourself as assignee
- Add the specific label
- Select the project assigned (if it applies)
- If there is a card for the changes done in the PR, move the cards and add the PR ID to each card
