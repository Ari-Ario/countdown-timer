
// let date = new Date();

// console.log(date, typeof(date))

function takeDate(){
    let date = new Date();
    let countDownDate = document.getElementById('date')
    countDownDate += ":00.000Z"
    let arr = countDownDate.split("T")
    arr[1] = arr[1].split("")
    arr[1].pop()
    arr[1].join("")
    // calling the ths in the table

    let document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML =  hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = "00"

    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"

        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML =  hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds

        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    //2023-12-05T14:23
}
