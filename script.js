
let workMins = 25;
let breakMins = 5;
let startClick = false;

//sets times to variables.
const workTime = document.querySelector('#work_time');
workTime.textContent = workMins + ' mins';

const breakTime = document.querySelector('#break_time');
breakTime.textContent = breakMins + ' mins';

const timerValue = document.querySelector('#timer_value');
timerValue.textContent = '00:00'




//functions to plus/minus times
function addWork(){
    if (workMins > 0){
        workMins += 1;
        workTime.textContent = workMins + ' mins';
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
    }
};

function minusWork(){
    if (workMins > 1){
        workMins -= 1;
        workTime.textContent = workMins + ' mins';
    } else {
        workMins = 1
        workTime.textContent = workMins + ' mins';
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

if (startClick == false){ 
//will block further start clicks
startClick = true;

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

if (seconds <= 9 && minutes <= 9){
    timerValue.textContent = "0" + minutes + ":0" + seconds;
} else if (seconds <= 9){
    timerValue.textContent = minutes + ":0" + seconds;
} else if (minutes <= 9){
    timerValue.textContent = "0" + minutes + ":" + seconds;
} else {
    timerValue.textContent = minutes + ":" + seconds;
}

if (minutes == 0 && seconds == 0) {
    clearInterval(clear);
    startBreakTime();
}
}, 1000);
}else {
    console.log('You already started the timer!')
}

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
    
    if (seconds2 <= 9 && minutes2 <= 9){
        timerValue.textContent = "0" + minutes2 + ":0" + seconds2;
    } else if (seconds2 <= 9){
        timerValue.textContent = minutes2 + ":0" + seconds2;
    } else if (minutes2 <= 9){
        timerValue.textContent = "0" + minutes2 + ":" + seconds2;
    } else {
        timerValue.textContent = minutes2 + ":" + seconds2;
    }
    
    
    if (minutes2 == 0 && seconds2 == 0) {
        clearInterval(clear2);
        startWorkTime();
    }
    }, 1000);
    };