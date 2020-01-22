var turncount = 0;
var xwin = 0;
// Code snippet for isOdd function (although useful, but not essential, for my 'if' condition below, I decided to use it since it's more clean than using strict equality "===" for each odd value) found here: https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
function isEven (val){
  return ((val-1) % 2);
}

function isOdd (val){
  return val % 2;
}

function reload () {
  document.location.reload(true);
}

$(document).ready(function() {

// Initial function inspired by: https://stackoverflow.com/questions/19618169/jquery-onclick-change-background-color-for-table-cells-always-when-clicked

$(function() {
      $('td').click(function() {  
        
 if(turncount < 10) {
        if (isEven(turncount)) {
  // Code snippet to check for empty cells: https://stackoverflow.com/questions/6813227/how-do-i-check-if-an-html-element-is-empty-using-jquery
          if ($(this).is(":empty")) {
              $(this).html("X")
              turncount +=1;
          }
        }

        else {
          if (isOdd(turncount)) {
            if ($(this).is(":empty")) {
              $(this).html("O")
              turncount +=1;
            }
          }
        }
   
   // X wins

 // Code snippet to determine via $ if a cell contains a particular value: https://stackoverflow.com/questions/902597/jquery-checking-to-see-if-div-contains-text-then-action
   
      // X wins top row
      if($("#c1:contains('X')").length && 
         $("#c2:contains('X')").length && 
         $("#c3:contains('X')").length) {
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      // X wins 'backslash' pattern
      if($("#c1:contains('X')").length && 
         $("#c5:contains('X')").length && 
         $("#c9:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      // X wins first row vertical
      if($("#c1:contains('X')").length && 
         $("#c4:contains('X')").length && 
         $("#c7:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      // X wins middle row horizontal
      if($("#c4:contains('X')").length && 
         $("#c5:contains('X')").length && 
         $("#c6:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
 
      // X wins middle row vertical
      if($("#c2:contains('X')").length && 
         $("#c5:contains('X')").length && 
         $("#c8:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      // X wins last row vertical
      if($("#c3:contains('X')").length && 
         $("#c6:contains('X')").length && 
         $("#c9:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
 
      // X wins bottom row
      if($("#c7:contains('X')").length && 
         $("#c8:contains('X')").length && 
         $("#c9:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      
      // X wins 'forward slash' pattern
      if($("#c3:contains('X')").length && 
         $("#c5:contains('X')").length && 
         $("#c7:contains('X')").length) { 
         $("#result").html("X Wins!")
         turncount = 10;
        }
   
      else if (turncount == 9) {
        $("#result").html("DRAW!!")
      }

   // O wins
 
      // O wins top row
      if($("#c1:contains('O')").length && 
         $("#c2:contains('O')").length && 
         $("#c3:contains('O')").length) {
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      // O wins 'backslash' pattern
      if($("#c1:contains('O')").length && 
         $("#c5:contains('O')").length && 
         $("#c9:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      // O wins first row vertical
      if($("#c1:contains('O')").length && 
         $("#c4:contains('O')").length && 
         $("#c7:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      // O wins middle row horizontal
      if($("#c4:contains('O')").length && 
         $("#c5:contains('O')").length && 
         $("#c6:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
 
      // O wins middle row vertical
      if($("#c2:contains('O')").length && 
         $("#c5:contains('O')").length && 
         $("#c8:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      // O wins last row vertical
      if($("#c3:contains('O')").length && 
         $("#c6:contains('O')").length && 
         $("#c9:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
 
      // O wins bottom row
      if($("#c7:contains('O')").length && 
         $("#c8:contains('O')").length && 
         $("#c9:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      
      // O wins 'forward slash' pattern
      if($("#c3:contains('O')").length && 
         $("#c5:contains('O')").length && 
         $("#c7:contains('O')").length) { 
         $("#result").html("O Wins!")
         turncount = 10;
        }
   
      else if (turncount == 9) {
        $("#result").html("DRAW!!")
      }
 }
      });
     });
}); 
