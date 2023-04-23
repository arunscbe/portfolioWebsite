$(document).ready(()=>{
    var monthNames = ["01","02","03","04","05","06","07","08","09","10","11","12" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var newDate =new Date();

// Extract the current date from Date object
newDate.setDate(newDate.getDate());

// Output the day, date, month and year  
setInterval(function() {
      var minutes = new Date().getMinutes();
      $("#display-mins").html(( minutes < 10 ?"0" :"" ) + minutes);
        },1000);
    
setInterval(function() {
      var hours =new Date().getHours();
      $("#display-hours").html(( hours < 10 ?"0" :"" ) + hours);
        }, 1000);

$('#display-date').html(newDate.getDate() +'-' + monthNames[newDate.getMonth()] +'-' + newDate.getFullYear());   

/*
setInterval(function() {
      // Create a newDate() object and extract the minutes of the current time on the visitor's
      var minutes =new Date().getMinutes();
      // Add a leading zero to the minutes value
      $("#min").html(( minutes < 10 ?"0" :"" ) + minutes);
        },1000);*/       
    
})