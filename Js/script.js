// Function to toggle dropdown visibility
function toggleDropdown() {  
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Array to store cart products
var cartProducts = [];

// Function to add items to the cart
function addToCart(button) {
    var product = button.parentNode;
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    // Create a new cart item
    var cartItem = document.createElement('li');
    cartItem.innerHTML = `${productName} - $${productPrice.toFixed(2)} <button onclick="removeFromCart('${productName}')">Remove</button>`;

    // Append the cart item to the cart list
    document.getElementById('cart-items').appendChild(cartItem);

    // Add product to the cartProducts array
    cartProducts.push({ name: productName, price: productPrice });

    // Update total price
    updateTotal(productPrice);
}

// Function to update the total price
function updateTotal(price) {
    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.textContent);

    var newTotal = currentTotal + price;

    totalElement.textContent = newTotal.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(productName) {
    var index = cartProducts.findIndex(product => product.name === productName);
    if (index !== -1) {
        var removedPrice = cartProducts[index].price;
        cartProducts.splice(index, 1);
        updateTotal(-removedPrice);
    }

    var cartItems = document.getElementById('cart-items');
    var items = cartItems.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(productName)) {
            cartItems.removeChild(items[i]);
            break;
        }
    }
}

// Function to clear the cart
function clearCart() {
    cartProducts = [];
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total').textContent = '0.00';
}
