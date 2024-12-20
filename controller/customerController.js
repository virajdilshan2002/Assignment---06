function addCustomer() {
  let id = $("#customerId").val();
  let customerName = $("#customerName").val();
  let customerAddress = $("#customerAddress").val();
  let customerContact = $("#customerContact").val();

  let customer = new Customer(
    id,
    customerName,
    customerAddress,
    customerContact
  );

  customerDB.push(customer);
}

function loadAllCustomers() {
  $("#customerTable").empty();
  for (let i = 0; i < customerDB.length; i++) {
    let customer = customerDB[i];
    $("#customerTable").append(
      `<tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.contact}</td>
      </tr>`
    );
  }
}

function generateCustomerID() {
  try {
    let lastCustId = customerDB[customerDB.length - 1].id;
    let newCustId = parseInt(lastCustId.substring(1, 4)) + 1;
    if (newCustId < 10) {
      $("#customerId").val("C00" + newCustId);
    } else if (newCustId < 100) {
      $("#customerId").val("C0" + newCustId);
    } else {
      $("#customerId").val("C" + newCustId);
    }
  } catch (e) {
    $("#customerId").val("C001");
  }
}

function clearCustomerFields() {
  $("#customerName").val("");
  $("#customerAddress").val("");
  $("#customerContact").val("");
}

$("#saveCusBtn").click(function () {
  addCustomer();
  generateCustomerID();
  clearCustomerFields();
  loadAllCustomers();
});

$("#addNewCustomerBtn").click(function () {
  generateCustomerID();
});

$("#closeCusModal").click(function () {
  clearCustomerFields();
});

$("#closeCusModalFooter").click(function () {
  clearCustomerFields();
});

$("#refreshCusTable").click(function () {
  loadAllCustomers();
});
