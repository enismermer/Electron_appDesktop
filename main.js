// console.log("Wesh Electron, je t'aime trop");


const { app, BrowserWindow } = require('electron');

// inclure le module 'path' de Node.js au début de votre fichier
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

  // la fonction createWindow() appelle une nouvelle fenetre
  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  })

  // la fonction app.quit() appelle à fermer une fenetre    
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })