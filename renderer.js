const shell = require('electron').shell
const openBtn = document.getElementById('openBtn')
const onOff = document.querySelector("#onOff");
let isOn = false;

let refreshIntervalId;

function pressionarTecla (){
shell.openPath("Background.vbs")    
}


openBtn.addEventListener('click', function (event) {
  openBtn.style.backgroundColor= (isOn? "red": "green");
  isOn= (isOn? false:true)
  onOff.innerHTML=(isOn? "On":"Off")
  refreshIntervalId = (isOn? setInterval(pressionarTecla, 2000):clearInterval(refreshIntervalId))
  
})