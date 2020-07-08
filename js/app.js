// App.js
(function () {
  window.onload = function () {
    var year   = new Date().getFullYear()
    var yearEl = document.querySelector('#year')
    yearEl.innerHTML = year
  }
})()
