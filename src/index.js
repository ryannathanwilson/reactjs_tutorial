
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Ryan',
  lastName: 'Wilson'
};

const element = (
  <div>
    <h1>Hello, {formatName(user)}</h1>
    <h2>Good to see you here.</h2>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);

