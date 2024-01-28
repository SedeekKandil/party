$("#icon").on("click",function(){
    let width = $("#box-element").width()
    $("#box-container").animate({left:-width},1000)
})

$("#box-open").on("click",function(){
    let width = $("#box-element").width()
    $("#box-container").animate({left:0},1000)
})


$("#slide1").on("click",function(){
    $("#desc1").slideToggle(1000)
    $("#desc2").slideUp(1000)
    $("#desc3").slideUp(1000)
    $("#desc4").slideUp(1000)
})

$("#slide2").on("click",function(){
    $("#desc2").slideToggle(1000)
    $("#desc1").slideUp(1000)
    $("#desc3").slideUp(1000)
    $("#desc4").slideUp(1000)
})

$("#slide3").on("click",function(){
    $("#desc3").slideToggle(1000)
    $("#desc2").slideUp(1000)
    $("#desc1").slideUp(1000)
    $("#desc4").slideUp(1000)
})

$("#slide4").on("click",function(){
    $("#desc4").slideToggle(1000)
    $("#desc2").slideUp(1000)
    $("#desc3").slideUp(1000)
    $("#desc1").slideUp(1000)
})



$("#box-element a").on("click",function(){
    let sectionOffset = $($(this).attr("href")).offset().top
    $("body").animate({ scrollTop : sectionOffset }, 8000)
})


window.onload = function() {
   
    countDownToTime("10 october 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


  var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("0 character remaining, you can't add more characters");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});