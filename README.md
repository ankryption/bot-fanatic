## so-fanatic

A simple bot built with `nightmare.js` to *earn* your `fanatic` badge on *StackOverflow* 

### Follow the steps below

```bash
# Clone this repository
git clone https://github.com/nkshio/bot-fanatic.git

# Install Dependencies
npm install

# Update your login credentials
vi config.json

# Start a cron job
env EDITOR=nano crontab -e

# Setup cron for 6am everyday
`0 6 * * * cd ~/path/to/bot-fanatic && node fanatic.js`
```

PS
If you are running this on `ubuntu` (virtual X server environment), you will need to use  `xvfb-run`  as below

```bash
# Setup cron for 6am everyday
`0 6 * * * cd bot-fanatic && DEBUG=nightmare xvfb-run -a --server-args="-screen 0 1366x768x24" node fanatic.js`
```