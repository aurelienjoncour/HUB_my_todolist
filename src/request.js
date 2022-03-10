/* eslint-disable */
const fetch = require('node-fetch');

const TOKEN = 'REPLACE_YOUR_TOKEN_HERE';

// based on this public API
// https://documenter.getpostman.com/view/8858534/SW7dX7JG?version=latest#intro

export async function addTask(token, description) {
  const raw = JSON.stringify({ description });
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: raw,
    redirect: 'follow',
  };

  const tasks = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions);
  const list = await tasks.json();
  return list;
}

export async function delTask(token, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
  };

  const tasks = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, requestOptions);
  const list = await tasks.json();
  return list;
}

export async function getAllTask(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
  };

  const tasks = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions);
  const list = await tasks.json();
  return list;
}

// Example of how to use the functions
async function main() {
  const newTask = await addTask(TOKEN, 'new Task');
  console.log(newTask);
  const tasks = await getAllTask(TOKEN);
  console.log(tasks);
  const deletedTask = await delTask(TOKEN, newTask.data._id);
  console.log(deletedTask);
}