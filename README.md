# evilportals

A repository for the portals i make for the Wifi Pineapples evilportal module

## Installation

Rename the repository folder to `Vodafone` and copy this folder (including the `.enable` file) into `/root/portals/` on your WiFi Pineapple. If you are using the SD card, copy it into `/sd/portals/` instead. The portal directory must be named `Vodafone` so the EvilPortal module can detect it once the `.enable` file is executable.

All assets referenced by `index.php` reside in this folder:

- `style.css`
- `tabs.js`
- `ping.js`
- `assets/vodafone-logo.png` *(add your own logo image)*

The credentials will be stored in `creds.txt` inside the same directory.
