#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};

// The first argument will be the project name.
const projectName = process.argv[2];

// Clone templete
const gitCheckoutCommand = `git clone --depth 1 https://github.com/rasa2k/create-frontend-starter ${projectName}`;
const installDepsCommand = `git ${projectName} && npm install`;

console.log(`Cloning the repository with name ${projectName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependecies for ${projectName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the follow commands to start ${projectName}`);
