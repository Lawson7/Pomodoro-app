
let workMins = 25;
let breakMins = 5;

//sets times to variables.
const workTime = document.querySelector('#work_time');
workTime.textContent = workMins + ' mins';

const breakTime = document.querySelector('#break_time');
breakTime.textContent = breakMins + ' mins';

const timerValue = document.querySelector('#timer_value');
timerValue.textContent = workMins + ' mins';




//functions to plus/minus times
function addWork(){
    if (workMins > 0){
        workMins += 1;
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins + ' mins';
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins + ' mins';
    }
};

function minusWork(){
    if (workMins > 1){
        workMins -= 1;
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins + ' mins';
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
        timerValue.textContent = workMins + ' mins';
    }
};

function addBreak(){
    if (breakMins > 0){
        breakMins += 1;
        breakTime.textContent = breakMins + ' mins';
    } else {
        breakMins = 1
        breakTime.textContent = breakMins + ' mins';
    }
};

function minusBreak(){
    if (breakMins > 1){
        breakMins -= 1;
        breakTime.textContent = breakMins + ' mins';
    } else {
        breakMins = 1
        breakTime.textContent = breakMins + ' mins';
    }
};



function startWorkTime(){


//get the time work expires
let countTo = new Date()
countTo.setMinutes(countTo.getMinutes() + workMins);
countTo = new Date(countTo).getTime();



let clear = setInterval(function(){
//time now
let timeNow = new Date().getTime();
//time to count...
let distance = countTo - timeNow;

let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);


timerValue.textContent = minutes + "m " + seconds + "s ";


if (minutes == 0 && seconds == 0) {
    clearInterval(clear);
    startBreakTime();
}
}, 1000);
};

function startBreakTime(){


    //get the time break expires
    let countTo2 = new Date()
    countTo2.setMinutes(countTo2.getMinutes() + breakMins);
    countTo2 = new Date(countTo2).getTime();
    
    
    
    let clear2 = setInterval(function(){
    //time now
    let timeNow2 = new Date().getTime();
    //time to count...
    let distance2 = countTo2 - timeNow2;
    
    let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
    
    timerValue.textContent = minutes2 + "m " + seconds2 + "s ";
    
    
    if (minutes2 == 0 && seconds2 == 0) {
        clearInterval(clear2);
        startWorkTime();
    }
    }, 1000);
    };