const blacklist = []

/*
 * https://gitlab.com/warren-bank/fork-Android-KeePassDX/-/issues/1
 * https://github.com/Kunzisoft/KeePassDX/issues/1333
 *
 * [fsck error in packed object] duplicateEntries: contains duplicate file entries
 *
 * notes:
 *   - error occurs when pushing repo to Gitlab
 *   - Github and Codeberg repos contain the same history as the upstream repo
 *   - Gitlab repo contains a rewritten history to remove the duplicate file entries
 */
blacklist.push('fork-Android-KeePassDX')

/*
 * notes:
 *   - no issue
 *   - repos are only mirrors, and won't ever be updated
 */
blacklist.push('mirror-Android-BlackBox')
blacklist.push('mirror-Android-Conscrypt-Provider')
blacklist.push('mirror-Android-DroidPlay')
blacklist.push('mirror-Android-DSU-Sideloader')
blacklist.push('mirror-Android-limbo')
blacklist.push('mirror-Android-MPC-HC-remote-control')
blacklist.push('mirror-Android-MultiApp')
blacklist.push('mirror-Android-MultiApp-opensdk')
blacklist.push('mirror-Android-RemoteAdbShell')
blacklist.push('mirror-Android-spynet-camera')
blacklist.push('mirror-Android-twoyi')
blacklist.push('mirror-Android-VirtualXposed')
blacklist.push('mirror-Android-waydroid')
blacklist.push('mirror-Android-winlator')
blacklist.push('mirror-bash-migrate-github-to-codeberg')
blacklist.push('mirror-crx-lazy-tabs')
blacklist.push('mirror-crx-man-in-the-middle')
blacklist.push('mirror-DialogMate2')
blacklist.push('mirror-electron-permaweb-desktop')
blacklist.push('mirror-firmware-lightbulb-camera-Anyka-ak3918-by-Gergely-Palfi')
blacklist.push('mirror-firmware-lightbulb-camera-Anyka-ak3918-by-Muhammed-Kalkan')
blacklist.push('mirror-golang-chromecast')
blacklist.push('mirror-golang-expect')
blacklist.push('mirror-golang-someutils')
blacklist.push('mirror-golang-windowz')
blacklist.push('mirror-golang-winsay')
blacklist.push('mirror-golang-ws-tcp-proxy')
blacklist.push('mirror-googlecode-moonblink')
blacklist.push('mirror-Java-AdbLib')
blacklist.push('mirror-localsend')
blacklist.push('mirror-node-ftp-srv')
blacklist.push('mirror-node-subtitle-transform')
blacklist.push('mirror-swissfileknife')
blacklist.push('mirror-TrayEverything')

/*
 * notes:
 *   - no issue
 *   - repos are large, and rarely updated
 */
blacklist.push('Android-NodeJS-Frontend')
blacklist.push('Android-NodeJS-Simple-Server')
blacklist.push('fork-Android-fdroidclient')
blacklist.push('fork-Android-VideoExpertsGroup-RTSP-Player-Demo')
blacklist.push('fork-AndroidX-Media3')
blacklist.push('fork-babel')
blacklist.push('fork-ffmpeg.wasm')
blacklist.push('fork-node-multiplayer-scrabble-server')
blacklist.push('fork-pyodide')
blacklist.push('nodejs-mobile')
blacklist.push('smali-Google-Duo')
blacklist.push('warren-bank-releases')
blacklist.push('wget-regex')

module.exports = blacklist
