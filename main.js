const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        frame: true,
        title: 'Appli Bagnères',
        width: 800,
        height: 600,
        resize: true,
        minWidth: 400,
        minHeight: 300,
        icon: path.join(__dirname, 'assets/bagneres.png'),
        webPreferences: {
            preload: path.join(__dirname, 'front/preload.js'),
            webSecurity: true,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow();    
})