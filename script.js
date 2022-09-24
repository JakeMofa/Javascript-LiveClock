function realtimeClock() {
    

    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();


    //Insert AM an PM system here
    var amPM = (hours < 12) ? "AM" : "PM";






    // Convert the hours component to 12hour format
    hours = (hours > 12) ? hours -12:hours;


    // Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);


    //Display the clock
    document.getElementById('clock').innerHTML =
    hours + " : " + minutes + " : " + seconds + "  " + amPM;
    var t = setTimeout(realtimeClock, 500);



















}