const { app, BrowserWindow } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const screen = new BrowserWindow({
    width: 250,
    height: 250,
  });
  screen.loadFile("index.html");
});
