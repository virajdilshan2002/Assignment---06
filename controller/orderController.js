$(document).ready(function () {
  let total = 0;

  // Update total label
  const updateTotal = () => {
    $(".lblTotal").text(`Total: ${total.toFixed(2)} Rs/=`);
  };

  //generate order id
  const generateOrderId = () => {
    try {
      let lastOrderId = orderDB[orderDB.length - 1].id;
      let newId = parseInt(lastOrderId.substring(1, 4)) + 1;
      if (newId < 10) {
        $("#orderId").val("O00" + newId);
      } else if (newId < 100) {
        $("#orderId").val("O0" + newId);
      } else {
        $("#orderId").val("O" + newId);
      }
    } catch (e) {
      $("#orderId").val("O001");
    }
  };

  generateOrderId();

  // Add item to table
  const addToTable = (order) => {
    $("#orderTable").append(`
      <tr>
        <td>${order.itemCode}</td>
        <td>${order.price.toFixed(2)}</td>
        <td>${order.qty}</td>
        <td>${order.total.toFixed(2)}</td>
      </tr>
    `);
  };

  // Search item
  $(".search-btn").on("click", function () {
    const itemCode = $("#selectItemForm input[placeholder='']").val().trim();
    if (itemCode) {
      $("#selectItemForm input[disabled]").eq(0).val("Sample Item");
      $("#selectItemForm input[disabled]").eq(1).val("100.00");
      $("#selectItemForm input[disabled]").eq(2).val("50");
    } else {
      alert("Enter item code!");
    }
  });

  // Add item to order
  $("#btn-add-item").on("click", function () {
    const itemCode = $("#selectItemForm input[placeholder='']").val();
    const price = parseFloat($("#selectItemForm input[disabled]").eq(1).val());
    const qty = parseInt(
      $("#selectItemForm input[placeholder='']").eq(1).val()
    );

    if (itemCode && price && qty > 0) {
      const totalCost = price * qty;
      total += totalCost;
      let orderId = $("#orderId").val();
      orderDB.push({ orderId, price, qty, total: totalCost });
      addToTable({ itemCode, price, qty, total: totalCost });
      updateTotal();
      $("#selectItemForm input").val("");
    } else {
      alert("Fill all fields correctly!");
    }
  });

  // Purchase order
  $("#btn-purchase").on("click", function () {
    if (orderDB.length > 0) {
      alert("Order placed successfully!");
      total = 0;
      $("#orderTable").empty();
      updateTotal();
    } else {
      alert("No items in the order!");
    }
  });
});
