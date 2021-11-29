const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'water-bottle.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('Water Reminder')

    return tray
}

module.exports = createTray()