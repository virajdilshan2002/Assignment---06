function addItem() {
  let item = new Item(
    $("#itemCode").val(),
    $("#itemName").val(),
    $("#quantity").val(),
    $("#unitPrice").val()
  );

  itemDB.push(item);
  clearItemFields();
}

function clearItemFields() {
  $("#itemCode").val("");
  $("#itemName").val("");
  $("#quantity").val("");
  $("#unitPrice").val("");
}

function loadAllItems() {
  $("#itemTable").empty();
  for (let i = 0; i < itemDB.length; i++) {
    let item = itemDB[i];
    $("#itemTable").append(`
      <tr>
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
      </tr>
    `);
  }
}

function generateItemID() {
  try {
    let lastItemId = itemDB[itemDB.length - 1].id;
    let newItemId = parseInt(lastItemId.substring(1, 4)) + 1;
    if (newItemId < 10) {
      $("#itemCode").val("I00" + newItemId);
    } else if (newItemId < 100) {
      $("#itemCode").val("I0" + newItemId);
    } else {
      $("#itemCode").val("I" + newItemId);
    }
  } catch (e) {
    $("#itemCode").val("I001");
  }
}

$("#addNewItemBtn").click(function () {
  generateItemID();
});

$("#saveItemBtn").click(function () {
  addItem();
  generateItemID();
  clearItemFields();
  loadAllItems();
});
