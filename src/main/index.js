import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { comHandler } from './helper'
const { exec } = require('child_process')
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit() // Exit if another instance is running
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows

  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  const window = createWindow()

  // IPC connector
  ipcMain.on('quit', () => app.quit())
  ipcMain.on('start', (e, payload) => {
    console.log('... start')
    console.log({ payload })

    const wrapper = (msg) => {
      window.webContents.send('message', msg)
    }

    comHandler(wrapper, payload)
  })
  ipcMain.on('power_off', () => {
    const desktopEnv = process.env.XDG_CURRENT_DESKTOP || process.env.DESKTOP_SESSION || 'unknown'

    console.log('Detected Desktop Environment:', desktopEnv) // Debugging

    if (process.platform === 'win32') {
      exec('shutdown /i') // Open Windows Shutdown dialog
    } else if (process.platform === 'linux') {
      if (desktopEnv.includes('GNOME')) {
        exec('gnome-session-quit') // GNOME shutdown dialog
      } else if (desktopEnv.includes('XFCE')) {
        exec('xfce4-session-logout') // XFCE shutdown dialog
      } else if (desktopEnv.includes('LXDE')) {
        console.log('lxsession-logout') // LXDE shutdown menu
        exec('lxsession-logout') // LXDE shutdown menu
      } else {
        console.log('Unsupported DE, using fallback shutdown command.')
        exec('shutdown -h now') // Fallback: Immediate shutdown
      }
    }
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
