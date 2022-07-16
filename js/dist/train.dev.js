"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// form.js
var formId = "save-later-form"; // ID of the form

var url = location.href; //  href for the page

var formIdentifier = "".concat(url, " ").concat(formId); // Identifier used to identify the form

var saveButton = document.querySelector("#save"); // select save button

var alertBox = document.querySelector(".alert"); // select alert display div

var form = document.querySelector("#".concat(formId)); // select form

var formElements = form.elements; // get the elements in the form

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */

var getFormData = function getFormData() {
  var data = _defineProperty({}, formIdentifier, {});

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      if (element.name.length > 0) {
        data[formIdentifier][element.name] = element.value;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return data;
};

saveButton.onclick = function (event) {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  var message = "Form draft has been saved!";
  displayAlert(message);
};
/**
 * This function displays a message
 * on the page for 1 second
 *
 * @param {String} message
 */


var displayAlert = function displayAlert(message) {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 1000);
};
/**
 * This function populates the form
 * with data from localStorage
 *
 */


var populateForm = function populateForm() {
  if (localStorage.key(formIdentifier)) {
    var savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = formElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var element = _step2.value;

        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var message = "Form has been refilled with saved data!";
    displayAlert(message);
  }
};

document.onload = populateForm(); // populate the form when the document is loaded