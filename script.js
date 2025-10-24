document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Image Switching Functionality ---
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Function to change the main image source
    window.changeImage = (newSrc) => {
        mainImage.src = newSrc;
        
        // Remove 'active' class from all thumbnails and add it to the clicked one
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.src.includes(newSrc)) {
                thumb.classList.add('active');
            }
        });
    }

    // Initialize the first thumbnail as active (assuming thumb-1.jpg is the default main image)
    const defaultThumbnail = document.querySelector('.thumbnail[src="thumb-1.jpg"]');
    if (defaultThumbnail) {
        defaultThumbnail.classList.add('active');
    }

    // --- 2. Tab Switching Functionality (Description/Specs/Reviews) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the ID of the content to show (from the data-tab attribute)
            const targetTabId = button.getAttribute('data-tab');

            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button
            button.classList.add('active');

            // Activate the corresponding content
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // --- 3. Add to Cart Simulation (Frontend Only) ---
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const quantityInput = document.getElementById('quantity');
    const cartCountSpan = document.getElementById('cart-count');

    let cartCount = 0; // In a real app, this would come from the backend/database

    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const productName = document.getElementById('product-name').textContent;

        if (quantity > 0) {
            // Simulate adding to cart
            cartCount += quantity;
            cartCountSpan.textContent = cartCount;

            // Simple notification (In a real app, use a proper modal/toast)
            alert(`${quantity} x "${productName}" added to cart! Total items: ${cartCount}`);

            // A real request to the backend would look like this:
            // fetch('/api/cart/add', { 
            //     method: 'POST', 
            //     body: JSON.stringify({ productId: 'NEMA17-P01', quantity: quantity }) 
            // });
        } else {
            alert('Please enter a valid quantity.');
        }
    });
});
