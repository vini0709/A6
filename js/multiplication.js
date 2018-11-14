/*
        File: /~vini0709/A6/js/Multiplication.js
        91.461 GUI Programming I  Assignment# 6:  Creating an Interactive Dynamic Table
        Vinishaben Patel, Umass Lowell Computer Science, Vinishaben_Patel@student.uml.edu
        Copyright (c) 2018 by Vinishaben Patel. All rights reserved.
        updated by VP on November 13, 2018 at 11:00 PM
        Description:  javascript validates user's input and creates multiplication table for valid inputs
*/

"use strict";

function generateTable(sMultiplier, eMultiplier, sMultiplicand, eMultiplicand) {

  /* invokes myDeleteFunction() if previous table already exits */
  if (document.getElementById("table").hasChildNodes()) {
    myDeleteFunction();
  }

  /* invokes validateForm to validate user's inputs */
  if (validateForm(sMultiplier, eMultiplier, sMultiplicand, eMultiplicand)) {
    myFunction(sMultiplier, eMultiplier, sMultiplicand, eMultiplicand);
  }
}

/* creates multiplication table from validated inputs */
function myFunction(sMultiplier, eMultiplier, sMultiplicand, eMultiplicand) {

  var i;
  var j;
  var r;
  var s;

  /* creates table and assign id to it */
  var table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.getElementById("table").appendChild(table);

  for(i = sMultiplicand - 1, r = 0;  i <= eMultiplicand;  i++, r++) {

    var row = table.insertRow(r);

    for(j = sMultiplier - 1, s = 0; j <= eMultiplier; j++, s++) {

      var cell = row.insertCell(s);

      /* multiplier row*/
      if (r === 0 && s > 0) {
        cell.innerHTML = j;
      }

      /* multiplicand column */
      else if (s === 0 && r > 0) {
        cell.innerHTML = i;
      }

      /* multiplication of corresponding entries */
      else if (s > 0 && r > 0) {
        cell.innerHTML = i * j;
      }

    } // inner for loop ends

  }  // outer for loop ends

}  // myFunction ends

function myDeleteFunction() {

  document.getElementById("table").innerHTML = "";
  return;

} // myDeleteFunction ends

/* validates user's inputs and display alert message is inputs are not valid */
function validateForm(sMultiplier, eMultiplier, sMultiplicand, eMultiplicand) {

  /* parse inputs to int in order to compare them using logical and arithmetic operators */
  var p = parseInt(sMultiplier);
  var q = parseInt(eMultiplier);
  var r = parseInt(sMultiplicand);
  var s = parseInt(eMultiplicand);

  /* checks if inputs are blank or not a valid number (e.g. 1..3) */
  if(isNaN(p) || isNaN(q) || isNaN(r) || isNaN(s)) {
    alert("Please consider the given range and enter valid inputs");
    return false;
  }

  /* validates if multiplier's range */
  else if(p < -50 || q > 50) {
    alert("Multiplier Range: -50 to 50");
    return false;
  }

  /* validates if multiplicand's range */
  else if(r < -100 || s > 100) {
    alert("Multiplicand Range: -100 to 100");
    return false;
  }

  /* checks if starting number is less ending number */
  else if((p > q) || (r > s)) {
    alert("Starting number must be less than ending number");
    return false;
  }

  /* if inputs passes all error checks it's return true to the calling function */
  else
  return true;

} // validateForm ends
