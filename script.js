
// let date = new Date();

// console.log(date, typeof(date))
let x = NaN;

function takeDate(){
    let date = new Date();
    let countDownDate = new Date(document.getElementById('date').value).getTime();
    if (isNaN(countDownDate)) {return;}

    x = setInterval(function() {
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
          document.getElementById("years").style.display = "none";
          document.getElementById("years-text").style.display = "none";
          if (months == 0) {
            document.getElementById("months").style.display = "none";
            document.getElementById("months-text").style.display = "none";
            if (days == 0) {
              document.getElementById("days").style.display = "none";
              document.getElementById("days-text").style.display = "none";
            }
          }
        }

        
        if (years < 10){
          document.getElementById("years").innerHTML = "0" + years
        } else {document.getElementById("years").innerHTML = years}
        
        if (months < 10){
          document.getElementById("months").innerHTML = "0" + months
        } else { document.getElementById("months").innerHTML = months}


        if (days < 10){
          document.getElementById("days").innerHTML = "0" + days
        } else {document.getElementById("days").innerHTML = days}

        if (hours < 10){
          document.getElementById("hours").innerHTML = "0" + hours
        } else {document.getElementById("hours").innerHTML =  hours}
        if (minutes < 10){
          document.getElementById("minutes").innerHTML = "0" + minutes
        } else {document.getElementById("minutes").innerHTML = minutes}
        if (seconds < 10){
          document.getElementById("seconds").innerHTML = "0" + seconds
        } else {document.getElementById("seconds").innerHTML = seconds}

        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("years").innerHTML = "00"
          document.getElementById("months").innerHTML = "00" 
          document.getElementById("days").innerHTML = "00"
          document.getElementById("hours").innerHTML =  "ti"
          document.getElementById("minutes").innerHTML = "me"
          document.getElementById("seconds").innerHTML = "<0"
        }
      }, 1000);
}

function pause(){
  clearInterval(x);
}


function changeColorBox(event) {
  let selectElement = document.getElementById("colorSelector").value
  let bg = document.getElementById("main")
  let bgTh = document.getElementsByTagName("tr")

  if (selectElement === "black"){
    bg.style.backgroundColor = "black";
    bg.style.color=  "white";
  } else if (selectElement === "red"){
    bg.style.backgroundColor = "rgb(84, 12, 2)";
    bg.style.color=  "rgb(255, 100, 4)";
  } else if (selectElement === "blue"){
    bg.style.backgroundColor = "rgb(2, 11, 84)";
    bg.style.color=  "rgb(11, 187, 255)";
  } else if (selectElement === "yellow"){
    bg.style.backgroundColor = "black";
    bg.style.color=  "orange";
  } else {
    alert("Something went wrong!")
  }
}

