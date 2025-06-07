# evilportals

A repository for the portals i make for the Wifi Pineapples evilportal module

## Installation


All assets referenced by `index.php` reside in this folder:

- `style.css`
- `tabs.js`
- `ping.js`
- `assets/vodafone-logo.png` *(add your own logo image)*

The credentials will be stored in `creds.txt` inside the same directory.

## Deployment

- Copy all files to the Pineapple's portal directory.
- Ensure `evilportal-Vodafone.ep` uses Unix (LF) line endings.
- Make `.enable` executable and leave `.disable` empty.

Use the Pineapple web UI or run `portal enable evilportal-Vodafone` from the CLI to activate the portal.
