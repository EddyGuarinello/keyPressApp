const { app } = require('electron');
var ks = require('node-key-sender');
let closeButton = document.querySelector("#closeButton");
const openBtn = document.getElementById('openBtn')
const onOff = document.querySelector("#onOff");
const body = document.querySelector("body");
let isOn = false;
let refreshIntervalId;

closeButton.addEventListener('click', function(){
  window.close();
})

function pressionarTecla (){ 
ks.sendKey('f')

}

openBtn.addEventListener('click', function (event) {
  body.style.backgroundColor= (isOn? "red": "green");
  isOn= (isOn? false:true)
  onOff.innerHTML=(isOn? "On":"Off")
  refreshIntervalId = (isOn? setInterval(pressionarTecla, 1000):clearInterval(refreshIntervalId))
})