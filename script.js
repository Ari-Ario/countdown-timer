
// let date = new Date();

// console.log(date, typeof(date))

function takeDate(){
    let date = new Date();
    let countDownDate = new Date(document.getElementById('date').value).getTime();
    let x = setInterval(function() {
        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        console.log(distance)

        let years = Math.floor((distance / (1000 * 60 * 60 * 24* 30 * 12)));
        let months = Math.floor((distance % (1000 * 60 * 60 * 24* 30 * 12)) / (1000 * 60 * 60* 24* 30));
        var days = Math.floor((distance % (1000 * 60 * 60 * 24* 30 )) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"

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
    //2023-12-05T14:23
}
