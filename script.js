

let ton = document.getElementById("sound");

const yearEL = document.getElementById("years")
const monthEl= document.getElementById("months")
const dayEL= document.getElementById("days")
const hourEl= document.getElementById("hours")
const minuteEl= document.getElementById("minutes")
const secondEl= document.getElementById("seconds")


function changeColorBox(event) {
  let selectElement = document.getElementById("colorSelector").value
  let bg = document.getElementById("main")

  if (selectElement === "black"){
    bg.style.backgroundColor = "black";
    bg.style.color=  "white";
  } else if (selectElement === "red"){
    bg.style.backgroundColor = "rgb(84, 12, 2)";
    bg.style.color=  "rgb(255, 100, 4)";
  } else if (selectElement === "blue"){
    bg.style.backgroundColor = "#001E3C";
    bg.style.color=  "rgb(11, 187, 255)";
  } else if (selectElement === "yellow"){
    bg.style.backgroundColor = "#1F2937";
    bg.style.color=  "orange";
  } else {
    alert("Something went wrong!")
  }
}


// time interval as object
class startStopTimer {
  constructor() {
    this.id = NaN;
    console.log("inside the class");
  }

  setTimer(){
    let date = new Date();
    let countDownDate = new Date(document.getElementById('date').value).getTime();
    if (isNaN(countDownDate)) {return;}

    this.id = setInterval(function() {
        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        console.log(distance)

        let years = Math.floor((distance / (1000 * 60 * 60 * 24* 365)));
        let months = Math.floor((distance % (1000 * 60 * 60 * 24* 365)) / (1000 * 60 * 60* 24* 30.41666666));
        let days = Math.floor((distance % (1000 * 60 * 60 * 24* 30.41666666 )) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with ids

        if (years == 0) {
          yearEL.style.display = "none";
          document.getElementById("years-text").style.display = "none";
          if (months == 0) {
            monthEl.style.display = "none";
            document.getElementById("months-text").style.display = "none";
            if (days == 0) {
              dayEL.style.display = "none";
              document.getElementById("days-text").style.display = "none";
            }
          }
        }
        
        if (years < 10){
          yearEL.innerHTML = "0" + years
        } else {yearEL.innerHTML = years}
        
        if (months < 10){
          monthEl.innerHTML = "0" + months
        } else { monthEl.innerHTML = months}

        if (days < 10){nction 
          hourEl.innerHTML = "0" + hours
        } else {hourEl.innerHTML =  hours}
        if (minutes < 10){
          minuteEl.innerHTML = "0" + minutes
        } else {minuteEl.innerHTML = minutes}
        if (seconds < 10){
          secondEl.innerHTML = "0" + seconds
        } else {secondEl.innerHTML = seconds}
      
        // If the count down is finished, write some text
        if (distance < 0) {
          // location.reload()
          // clearInterval(this.id);
          yearEL.innerHTML = "00"
          monthEl.innerHTML = "00" 
          dayEL.innerHTML = "00"
          hourEl.innerHTML =  "ti"
          minuteEl.innerHTML = "me"
          secondEl.innerHTML = "=0"
          ton.play();
        }
      }, 1000);
  }

  stopTimer(){
    clearTimeout(this.id)
  }

}

const x = new startStopTimer();
const start = x.setTimer;

