//! timer fields


const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const milisecondElement = document.querySelector('.milisecond');
// const open = document.querySelector('.open');


//! Buttons

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');




startButton.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 10);

});

pauseButton.addEventListener('click', () => {
	clearInterval(interval);
});

stopButton.addEventListener('click', () => {
	clearInterval(interval);
	clearFields();
});
let resultsControl = false;
let newCoun = 0;





let hour = 00,
	minute = 00,
	second = 00,
	milisecond = 00,
	interval,
	counter = 0,
	disabled = true

function  startTimer() {
	milisecond++;

	//* Milisecond
	if(milisecond < 9) {
		milisecondElement.innerText = "0" + milisecond;

	}
	if(milisecond > 9){
		milisecondElement.innerText = milisecond;
	}
	if(milisecond > 99){
		second++;
		secondElement.innerText = "0" + second;
		milisecond = 0;
		milisecondElement.innerText = "0" + milisecond;
	}

	//* Seconds
	if(second < 9) {
		secondElement.innerText = "0" + second;
	}
	if(second > 9) {
		secondElement.innerText = second;
	}
	if(second > 59) {
		minute++;
		minuteElement.innerText = "0" + minute;
		second = 0;
		secondElement.innerText = "0" + second;
	}

	//* Minutes
	if(minute < 9) {
		minuteElement.innerText = "0" + minute;
	}
	if(minute > 9) {
		minuteElement.innerText = minute;
	}
	if(minute > 59) {
		minute++;
		hourElement.innerText = "0" + hour;
		minute = 0;
		minuteElement.innerText = "0" + minute;
	}

	//* Hourse
	if(hour < 9) {
		hourElement.innerText = "0" + hour;
	}
	if(hour > 9) {
		hourElement.innerText = hour;
	}
	if(hour > 24) {
		hourElement.innerText = "0";
		milisecondElement.innerText = "0";
		secondElement.innerText = "0";
		minuteElement.innerText = "0";
		minute = 0;
		second = 0;
		milisecond = 0;
		hour = 0;

	}




}

function clearFields() {
	hour = 00;
	minute = 00;
	second = 00;
	milisecond = 00;
	hourElement.innerText = "00";
	milisecondElement.innerText = "00";
	secondElement.innerText = "00";
	minuteElement.innerText = "00";
}
