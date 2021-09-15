/* global $ */
$(document).ready(function(){
  $(".start").click(function(){
    startTimer();
  });
  
  $(".stop").click(function(){
    stopTimer();
  });
  
  $(".reset").click(function(){
    resetTimer();
  });
});

let interval;
let firstDecimalPlace = 0, onesPlace = 0, tensPlace = 0, hundredsPlace = 0;

function startTimer(){
  interval = setInterval(timeMeasurement, 100);
  $(".start").prop("disabled", true);
  $(".stop").prop("disabled", false);
  $(".reset").prop("disabled", false);
}

function timeMeasurement(){
  firstDecimalPlace++;
  $(".second-one-tenth").text(firstDecimalPlace);
  
  if(firstDecimalPlace > 9){
    firstDecimalPlace = 0;
    onesPlace++;
    $(".second-one-tenth").text(firstDecimalPlace);
    $(".second-1").text(onesPlace);
    
    if(onesPlace > 9){
      onesPlace = 0;
      tensPlace++;
      $(".second-1").text(onesPlace);
      $(".second-10").text(tensPlace);
      
      if(tensPlace > 9){
      tensPlace = 0;
      hundredsPlace++;
      $(".second-10").text(tensPlace);
      $(".second-100").text(hundredsPlace);
      }
    }
  }
  
  /* 上限値（999.9秒） */
  if(firstDecimalPlace == 9 && onesPlace == 9 && tensPlace == 9 && hundredsPlace == 9){
    stopTimer();
    $(".start").prop("disabled", true);
  }
}

function stopTimer(){
  clearInterval(interval);
  $(".start").prop("disabled", false);
  $(".stop").prop("disabled", true);
}

function resetTimer(){
  clearInterval(interval);
  firstDecimalPlace = 0, onesPlace = 0, tensPlace = 0, hundredsPlace = 0;
  $(".second-100, .second-10, .second-1, .second-one-tenth").text(0);
  $(".start").prop("disabled", false);
  $(".stop").prop("disabled", true);
  $(".reset").prop("disabled", true);
}