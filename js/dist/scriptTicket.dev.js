"use strict";

var userNameInput = document.getElementById("name");
var idInput = document.getElementById("id");
var fromTicketInput = document.getElementById("st1");
var toTicketInput = document.getElementById("st2");
var fromDateInput = document.getElementById("date");
var phoneInput = document.getElementById("phone");
var ticketsInput = document.getElementById("tickets");
var payInput = document.getElementById("pay");
var mainBtn = document.getElementById("mainBtn");
var sameStationAlert = document.getElementById("sameStationAlert");
var validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var ticketsContainer;

if (localStorage.getItem("myBookingTickets") == null) {
  ticketsContainer = [];
} else {
  ticketsContainer = JSON.parse(localStorage.getItem("myBookingTickets"));
  displayTickets();
}

function addTicket() {
  var product = {
    name: userNameInput.value,
    fromTick: fromTicketInput.value,
    toTick: toTicketInput.value,
    fDate: fromDateInput.value,
    phone: phoneInput.value,
    tick: ticketsInput.value,
    pay: payInput.value,
    id: idInput.value
  };

  if (userNameInput.value == "" || fromTicketInput.value == "" || toTicketInput.value == "" || fromDateInput.value == "" || phoneInput.value == "" || ticketsInput.value == "" || payInput.value == "") {// alert("Cann't be empty");
  } else if (!phoneInput.value.match(validPhone)) {// alert("Please enter correct phone number")
  } else if (fromTicketInput.value == toTicketInput.value) {
    // alert("Please enter different stations")
    sameStationAlert.classList.add("d-block");
  } else {
    ticketsContainer.push(product);
    localStorage.setItem("myBookingTickets", JSON.stringify(ticketsContainer));
    clearForm();
    displayTickets();
    console.log(ticketsContainer);
  }
}

function clearForm() {
  userNameInput.value = "";
  fromTicketInput.value = "";
  toTicketInput.value = "";
  fromDateInput.value = "";
  phoneInput.value = "";
  ticketsInput.value = "";
  payInput.value = "";
  idInput.value = "";
  mainBtn.innerHTML = "Add Ticket";
}

function displayTickets() {
  var cartoona = "";

  for (var i = 0; i < ticketsContainer.length; i++) {
    cartoona += "\n        <div class=\"m-4 py-4\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"images/ticket.jpeg\" class=\"card-img-top card-img\" alt=\"...\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title text-center\">Your Travel</h5>\n                  <p class=\"card-text text-center \">That's your Ticket number " + i + " From " + ticketsContainer[i].fromTick + " To " + ticketsContainer[i].toTick + " on a date " + ticketsContainer[i].fDate + " Via cairo metro.</p>\n                  <div class=\"row justify-content-center mb-3\">\n                  <button onClick=\"changeFormForUpdate(" + i + ")\" class=\"btncard mr-4\">Update</button>\n                  <button onClick=\"deleteTicket(" + i + ")\" class=\"btncard\">Delete</button>\n                  </div>\n                  <button type=\"button\" onclick=\"location.href= 'payment.html';\" class=\"btn d-flex justify-content-center m-auto w-75 btn-outline-info\">Payment</button>\n                </div>\n              </div>\n            </div>\n        ";
  }

  document.getElementById("ticketsContainer").innerHTML = cartoona;
}

function deleteTicket(productIndex) {
  ticketsContainer.splice(productIndex, 1);
  localStorage.setItem("myBookingTickets", JSON.stringify(ticketsContainer));
  displayTickets();
}

function searchTickets(searchTerm) {
  cartoona = "";

  for (var i = 0; i < ticketsContainer.length; i++) {
    if (ticketsContainer[i].fromTick.toLowerCase().includes(searchTerm.toLowerCase()) == true || ticketsContainer[i].toTick.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
      //console.log("exsist")
      cartoona += "\n            <div class=\"col-sm-4 py-4\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"images/ticket.jpeg\" class=\"card-img-top card-img\" alt=\"...\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title text-center\">Your Travel</h5>\n                      <p class=\"card-text text-center \">That's your Ticket number " + i + " From " + ticketsContainer[i].fromTick + " To " + ticketsContainer[i].toTick + " on a date " + ticketsContainer[i].fDate + " Via cairo metro.</p>\n                      <div class=\"row justify-content-center\">\n                      <button onClick=\"changeFormForUpdate(" + i + ")\" class=\"btncard mr-4\">Update</button>\n                      <button onClick=\"deleteTicket(" + i + ")\" class=\"btncard\">Delete</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            ";
    } else {//console.log("not exsist")
    }
  }

  document.getElementById("ticketsContainer").innerHTML = cartoona;
}

function changeFormForUpdate(productIndex) {
  userNameInput.value = ticketsContainer[productIndex].name;
  idInput.value = ticketsContainer[productIndex].id;
  fromTicketInput.value = ticketsContainer[productIndex].fromTick;
  toTicketInput.value = ticketsContainer[productIndex].toTick;
  fromDateInput.value = ticketsContainer[productIndex].fDate;
  ticketsInput.value = ticketsContainer[productIndex].tick;
  payInput.value = ticketsContainer[productIndex].pay;
  phoneInput.value = ticketsContainer[productIndex].phone;
  mainBtn.innerHTML = "update";
  deleteTicket();
  ticketsContainer.push(product);
  localStorage.setItem("myBookingTickets", JSON.stringify(ticketsContainer));
  clearForm();
  displayTickets();
}