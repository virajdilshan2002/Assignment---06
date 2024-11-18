$(document).ready(function () {
  $("#btn-add-item").on("click", function () {
    $("#orderTable").append(`
      <tr>
          <td>Order</td>
           <td>Order</td>
           <td>Order</td>
           <td>Order</td>
      </tr>
    `);
  });
});
