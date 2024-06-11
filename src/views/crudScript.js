document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('addItemForm');
    const updateItemForm = document.getElementById('updateItemForm');


    if(addItemForm){
        addItemForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(addItemForm);
            const item = {
            product_name: formData.get('itemName'),
            quantity: formData.get('itemQuantity'),
            price: formData.get('itemPrice'),
            };

            try {
            const response = await fetch('/api/inventory', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (response.ok) {
                alert('Item added successfully');
                addItemForm.reset();
            } else {
                alert('Failed to add item');
            }
            } catch (error) {
            console.error('Error:', error);
            }
        });
    }

    if(updateItemForm){
        updateItemForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const urlParams = new URLSearchParams(window.location.search);
            const itemId = urlParams.get('id');
            const formData = new FormData(updateItemForm);
            const item = {
            product_name: formData.get('updateItemName'),
            quantity: formData.get('updateItemQuantity'),
            price: formData.get('updateItemPrice'),
            };
        
            try {
            const response = await fetch(`/api/inventory/${itemId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
        
            if (response.ok) {
                alert('Item updated successfully');
                window.location.href = '/table';
            } else {
                alert('Failed to update item');
            }
            } catch (error) {
            console.error('Error:', error);
            }
        });
    }
});
