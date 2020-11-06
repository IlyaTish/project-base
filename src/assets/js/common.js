//= require ../blocks/common/script.js


/* Execution of functions */

ready(() => {
  /* Exports */

  //= require ../blocks/common/script.js
  //= require ../blocks/header/script.js

  window.onresize = () => {
    headerScript.headerTeleport();
  }
})