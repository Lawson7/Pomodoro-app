
let workMins = 25;
let breakMins = 5;

//sets times to variables.
const workTime = document.querySelector('#work_time');
workTime.textContent = workMins + ' mins';

const breakTime = document.querySelector('#break_time');
breakTime.textContent = breakMins + ' mins';



//functions to plus/minus times
function addWork(){
    if (workMins > 0){
        workMins += 1;
        workTime.textContent = workMins + ' mins';
    } else {
        alert('Cannot count from less that 1 mins')
        workMins = 1
        workTime.textContent = workMins + ' mins';
    }
};

function minusWork(){
    if (workMins > 1){
        workMins -= 1;
        workTime.textContent = workMins + ' mins';
    } else {
        alert('Cannot count from less that 1 mins')
        workMins = 1
        workTime.textContent = workMins + ' mins';
    }
};

function addBreak(){
    if (breakMins > 0){
        breakMins += 1;
        breakTime.textContent = breakMins + ' mins';
    } else {
        alert('Greater than 0 please')
        breakMins = 1
        breakTime.textContent = breakMins + ' mins';
    }
};

function minusBreak(){
    if (breakMins > 1){
        breakMins -= 1;
        breakTime.textContent = breakMins + ' mins';
    } else {
        alert('Greater than 0 please')
        breakMins = 1
        breakTime.textContent = breakMins + ' mins';
    }
};