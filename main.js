const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('title of the desktop app');
    mainWindow.loadURL('https://personal-website-dec49.web.app/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});