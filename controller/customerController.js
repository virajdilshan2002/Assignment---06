$(document).ready(function () {
  $("#addNewCustomerBtn").on("click", function () {
    showPage("addNewCustomer");
  });

  function showPage(page) {
    $(".page").removeClass("active");
    $("#" + page).addClass("active");
  }
});
