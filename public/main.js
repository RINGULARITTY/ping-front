const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

//OSX handle
app.on('window-all-closed', () => { if (ProcessingInstruction.platform !== "darwin") app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });


