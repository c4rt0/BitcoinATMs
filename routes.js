'use strict';

const Accounts = require('./app/controllers/accounts');
const Creations = require('./app/controllers/atms');

module.exports = [
  { method: 'GET', path: '/', config: Accounts.index },
  { method: 'GET', path: '/signup', config: Accounts.showSignup },
  { method: 'GET', path: '/login', config: Accounts.showLogin },
  { method: 'GET', path: '/logout', config: Accounts.logout },
  { method: 'POST', path: '/signup', config: Accounts.signup },
  { method: 'POST', path: '/login', config: Accounts.login },

  { method: 'GET', path: '/home', config: Creations.home },
  { method: 'GET', path: '/atms', config: Creations.atms },
  { method: 'POST', path: '/addAtm', config: Creations.addAtm },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  }
];
