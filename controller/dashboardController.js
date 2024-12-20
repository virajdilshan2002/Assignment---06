$(document).ready(function () {
  const $recentOrderTable = $("#recentOrderTable");

  // Populate recent orders table from orderDB
  const updateRecentOrders = () => {
    $recentOrderTable.empty(); // Clear existing rows
    orderDB.forEach((order) => {
      $recentOrderTable.append(`
          <tr>
            <td>${order.orderId}</td>
            <td>${order.date}</td>
            <td>${order.customerId}</td>
            <td>${order.total.toFixed(2)} Rs/=</td>
          </tr>
        `);
    });
  };

  // Initialize recent orders table
  updateRecentOrders();
});
