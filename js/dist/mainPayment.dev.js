"use strict";

//Payment
// var nameInput = document.getElementById("name");
// var cardNum = document.getElementById("cardNum");
// var expiryDate = document.getElementById("expiryDate");
// var cvcInput = document.getElementById("cvc");
// var zipInput = document.getElementById("zip");
//Qr
var payBtn = document.getElementById("payBtn");
var qrContainer = document.getElementById("qrContainer");
var qrImg = document.getElementById("qrImg");

function addQr() {
  // if(nameInput.value != '' & cardNum.value != '' & expiryDate.value != '' & cvcInput.value != '' & zipInput.value != ''){
  var cartoona = "\n  <br>\n  <p class=\"font-weight-bold\">This is Your QR Booking Code :</p>\n  <img src=\"images/qr .jpeg\">\n  <br>\n\n  <a class=\"btn btn-dark mt-2\" href=\"images/qr .jpeg\" download rel=\"noopener noreferrer\" target=\"_blank\">\n   Download\n  </a>\n  ";
  qrContainer.innerHTML = cartoona;
  console.log("cartoona"); // }
}

;