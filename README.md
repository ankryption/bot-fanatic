# bot-fanatic
<p align="center">
 <img src="https://media.giphy.com/media/nGnKGLOqzhfGM/giphy.gif" width="400" height="200"/>
</p>

A simple bot built with `nightmare.js` to *earn* your `fanatic` badge on *StackOverflow* 

### Steps 

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
0 6 * * * cd ~/path/to/bot-fanatic && node fanatic.js
```

### Please Note
If you are running this on `ubuntu` (virtual X server environment), you will need to use  `xvfb-run`  as below

```bash
# Update the system dependencies
sudo apt-get update

# Install nodejs, npm, xvfb and related dependencies
apt-get install -y nodejs npm xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib

# Start a cron job
env EDITOR=nano crontab -e

# Setup cron for 6am everyday
0 6 * * * cd ~/path/to/bot-fanatic && DEBUG=nightmare xvfb-run -a --server-args="-screen 0 1366x768x24" node fanatic.js
```

### License

[MIT][MIT]. See [LICENSE][licence-file] for details.

[MIT]: http://rem.mit-license.org
[licence-file]: https://github.com/nkshio/bot-fanatic/blob/master/LICENSE
