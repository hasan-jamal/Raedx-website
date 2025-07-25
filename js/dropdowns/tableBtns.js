$(document).ready(function () {
  $(document).on("click", ".boxTable .btnDropdown", function (e) {
    e.preventDefault();
    var $dropdown = $(this).closest(".divDropdown");

    $dropdown.find(".publicStyleList").toggleClass("show");
    $(this).toggleClass("active");
  });

  $(document).on("click", ".boxTable .publicStyleList button", function (e) {
    e.preventDefault();
    var selectedText = $(this).text().trim();
    var $dropdown = $(this).closest(".divDropdown");

    // Update the span text
    $dropdown.find(".btnDropdown span").text(selectedText);
    $dropdown.find(".btnDropdown").addClass("active");
    $dropdown.find(".publicStyleList").addClass("show");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".boxTable .divDropdown").length) {
      $(".boxTable .publicStyleList").removeClass("show");
      $(".boxTable .btnDropdown").removeClass("active");
    }
  });
});

// /////////////////////////////////////
$("#custom-input-date").datepicker({ dateFormat: "dd/mm/yy" });

// ACTIONS
$("input").on("change", function (e) {
  $(this).siblings(".label-error").text("");
  $(this).removeClass("error");
});

$("#custom-input-date").on("focusout", function (e) {
  if ($(this).val() != "") {
    dateValidation($(this));
  }
});

// CHECK
function dateValidation(input) {
  var errorLabel = input.siblings(".label-error");
  var date = input.val();

  input.removeClass("error");
  errorLabel.text("");

  var matches = /^(\d{1,2})[/\/](\d{1,2})[/\/](\d{4})$/.exec(date);
  if (matches == null) {
    input.addClass("error");
    errorLabel.text("Date not valid.");
  }

  var d = matches[1];
  var m = matches[2] - 1;
  var y = matches[3];
  var composedDate = new Date(y, m, d);

  if (
    composedDate.getDate() == d &&
    composedDate.getMonth() == m &&
    composedDate.getFullYear() == y
  ) {
  } else {
    input.addClass("error");
    errorLabel.text("Date not valid.");
  }
}
