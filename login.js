const Nightmare = require('nightmare');
const nightmare = Nightmare({
  show: true
});
const fs = require('fs');

const {
  user,
  pass
} = JSON.parse(fs.readFileSync(`${__dirname}/config.json`, 'utf8'));

nightmare
  .goto('https://stackoverflow.com/users/login')
  .type('#email', user)
  .type('#password', pass)
  .click('#submit-button')
  .wait(5000)
  .end()
  .then(console.log("Login Successful, see you tomorrow"))
  .catch((error) => {
    console.error('Login Failed:', error);
  });