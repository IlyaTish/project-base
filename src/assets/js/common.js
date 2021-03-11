//= require common/script.js


/* Execution of functions */

ready(() => {
  /* Exports */

  //= require common/script.js
  //= require header/script.js

  window.onresize = () => {
    headerScript.headerTeleport();
  }
})