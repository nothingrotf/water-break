const { app } = require('electron')
const controlWindow = require('./ControlWindow.js')


function App() {
	const win = require('./CreateWindow.js')
	const tray = require('./Tray.js')
	const { toggle } = controlWindow(win)

	tray.on('click', toggle)
	win.on('blur', toggle)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
