
let workMins = 25;
let breakMins = 5;
let startBreak = false;

//sets times to variables.
const workTime = document.querySelector('#work_time');
workTime.textContent = workMins + ' mins';

const breakTime = document.querySelector('#break_time');
breakTime.textContent = breakMins + ' mins';

const timerValue = document.querySelector('#timer_value');
timerValue.textContent = workMins;




//functions to plus/minus times
function addWork(){
    if (workMins > 0){
        workMins += 1;
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins;
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins;
    }
};

function minusWork(){
    if (workMins > 1){
        workMins -= 1;
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins;
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins;
    }
};

function addBreak(){
    if (breakMins > 0){
        breakMins += 1;
        breakTime.textContent = breakMins;
    } else {
        breakMins = 1
        breakTime.textContent = breakMins;
    }
};

function minusBreak(){
    if (breakMins > 1){
        breakMins -= 1;
        breakTime.textContent = breakMins;
    } else {
        breakMins = 1
        breakTime.textContent = breakMins;
    }
};



function startWorkTime(){


//get the time work expires
let countTo = new Date()
countTo.setMinutes(countTo.getMinutes() + workMins);
countTo = new Date(countTo).getTime();



setInterval(function(){
//time now
let timeNow = new Date().getTime();
//time to count...
let distance = countTo - timeNow;

let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById('timer_value').innerHTML = minutes + "m " + seconds + "s ";
  
// If the count down is over, turn off.
if (distance < 0) {
    clearInterval();
    document.getElementById("timer_value").innerHTML = "breakFunc";
    startBreak = true;
}
}, 1000);
};