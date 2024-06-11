document.addEventListener("DOMContentLoaded", () => {
  const inventoryTableBody = document.querySelector("#inventoryTable tbody");

  async function loadInventory() {
    try {
      const response = await fetch("/api/inventory");
      const items = await response.json();

      inventoryTableBody.innerHTML = "";

      items.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
              <td>${item.product_name}</td>
              <td>${item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <button class="delete" data-id="${item.id}">Delete</button>
                <button class="edit" data-id="${item.id}">Edit</button>

              </td>
            `;
        inventoryTableBody.appendChild(row);
      });

      document.querySelectorAll(".add").forEach((button) => {
        button.addEventListener("click", () => {
          window.location.href = `/addProduct.html`;
        });
      });

      document.querySelectorAll(".delete").forEach((button) => {
        button.addEventListener("click", async () => {
          const id = button.getAttribute("data-id");
          try {
            const response = await fetch(`/api/inventory/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              }
            });

            if (response.ok) {
              alert("Item Deleted successfully");
              window.location.href = "/table";
            } else {
              alert("Failed to delete item");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        });
      });

      document.querySelectorAll(".edit").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.getAttribute("data-id");
          window.location.href = `/editProduct.html?id=${id}`;
        });
      });
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  }

  loadInventory();
});
