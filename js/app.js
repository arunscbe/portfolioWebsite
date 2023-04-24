let resumeVis = true;
$(document).ready(()=>{

    var monthNames = ["01","02","03","04","05","06","07","08","09","10","11","12" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var newDate =new Date();

newDate.setDate(newDate.getDate());
 
setInterval(function() {
      var minutes = new Date().getMinutes();
      $("#display-mins").html(( minutes < 10 ?"0" :"" ) + minutes);
        },1000);
    
setInterval(function() {
      var hours =new Date().getHours();
      $("#display-hours").html(( hours < 10 ?"0" :"" ) + hours);
        }, 1000);

$('#display-date').html(newDate.getDate() +'-' + monthNames[newDate.getMonth()] +'-' + newDate.getFullYear());   

$('.resumeClose').on('click',()=>{
  $('.resumeContainer').hide();
  resumeVis = false;
})
  $('.resumeIcon').on('dblclick',()=>{
    if(!resumeVis){
      $('.resumeContainer').show();
    }    
  })
  $('.videoIcon').on('dblclick',()=>{
    
  })  
})