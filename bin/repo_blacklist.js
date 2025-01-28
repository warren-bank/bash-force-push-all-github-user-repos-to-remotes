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
 * GitLab: LFS objects are missing.
 * Ensure LFS is properly set up or try a manual "git lfs push --all".
 *
 * Git LFS: (0 of 3 files) 0 B / 7.69 MB
 * LFS upload missing objects:
 *   (missing) apps/website/static/video/video-3s.avi (a281bfa75571537d7e2c0179589fb3648066be1d5409510c4ddb68d3712f6f97)
 *   (missing) apps/website/static/video/playground-how-to.mp4 (d0b84ec354723cd5eb3ab45c14b5ac39b68aac21604bdb702a5a15e2b2a36461)
 *   (missing) apps/website/static/video/video-15s.avi (3eb7acdfdc29b83a012483f1b38413a6a179ae34025611a022fc07e7418a1767)
 *
 * notes:
 *   - error occurs when pushing tags in repo to Gitlab
 *   - Github, Codeberg, and Gitlab repos are all consistent;
 *     only Gitlab is missing all tags
 */
blacklist.push('fork-ffmpeg.wasm')

/*
 * GitLab: LFS objects are missing.
 * Ensure LFS is properly set up or try a manual "git lfs push --all".
 *
 * Git LFS: (1 of 11 files) 162.21 MB / 1.75 GB
 * LFS upload missing objects:
 *   (missing) obb_image_generator/wine.zip (b4496eed06154cd6ee81f969d8679b29dede15ff8c8b289c81f2bbe88d35d1f1)
 *   (missing) obb_image_generator/wine.txz (fa600e26aa624b7c9b28451cf55f3ed036f6cd5553ac75558bb6f49e1db42d42)
 *   (missing) obb_image_generator/ubuntu-prepared.zip (47f6a0ca4c699e6a46ded8508138ab9e250e9ba6c0f5fb2dfd3c863bb03b5948)
 *   (missing) obb_image_generator/patches.zip (f839cc26c734381cca65cee8f19a0c9dd61c467fb1ca7ae7612e72a09b833fd8)
 *   (missing) obb_image_generator/ubuntu-prepared.txz (bd95302a76fe6d6911b6c37f6cc09cd667c5346d8817e52482389269658de4cf)
 *   (missing) app/src/main/assets/imagefs.txz (68491a479524185489abae06045bf9f9d0018b57ec7bd7d26faeb58edcd2f1b5)
 *   (missing) obb_image_generator/patches.txz (81b664900f48a282d5c0fd0ad4c52d88db55b6547751a1d760412539271661dc)
 *
 * notes:
 *   - error occurs when pushing repo to Gitlab
 *   - Github and Codeberg repos are both consistent;
 *     only Gitlab fails to upload repo
 */
blacklist.push('mirror-Android-winlator')

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
blacklist.push('mirror-crx-lazy-tabs')
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
blacklist.push('mirror-node-subtitle-transform')
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
blacklist.push('fork-node-multiplayer-scrabble-server')
blacklist.push('fork-pyodide')
blacklist.push('nodejs-mobile')
blacklist.push('smali-Google-Duo')
blacklist.push('wget-regex')

module.exports = blacklist
