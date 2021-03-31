//= require common/script.js


// -------- Execution of functions --------

ready(() => {
  // -------- Exports --------

  //= require header/script.js

  window.onresize = () =>
    headerScript.headerTeleport()
})
