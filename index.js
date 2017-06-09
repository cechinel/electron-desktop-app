(function () {
	'use strict';
    
    const electron = require('electron')
    const app = electron.app
    const BrowserWindow = electron.BrowserWindow

	app.on('ready', function() {
		let mainWindow = new BrowserWindow({
			width: 800,
			heigth: 600
		})
	})
	
})();