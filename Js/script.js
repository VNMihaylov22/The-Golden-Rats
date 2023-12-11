function toggleDropdown() {  
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}


var cartProducts = [];

function addToCart(button) {
    var product = button.parentNode;
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    var cartItem = document.createElement('li');
    cartItem.innerHTML = `${productName} - $${productPrice.toFixed(2)} <button onclick="removeFromCart('${productName}')">Remove</button>`;

    document.getElementById('cart-items').appendChild(cartItem);

    cartProducts.push({ name: productName, price: productPrice });

    updateTotal(productPrice);
}

function updateTotal(price) {
    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.textContent);

    var newTotal = currentTotal + price;

    totalElement.textContent = newTotal.toFixed(2);
}

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

var cartProducts = [];

function addToCart(button) {
    var product = button.parentNode;
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    var cartItem = document.createElement('li');
    cartItem.innerHTML = `${productName} - $${productPrice.toFixed(2)} <button onclick="removeFromCart('${productName}')">Remove</button>`;

    document.getElementById('cart-items').appendChild(cartItem);

    cartProducts.push({ name: productName, price: productPrice });

    updateTotal(productPrice);
}

function updateTotal(price) {
    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.textContent);

    var newTotal = currentTotal + price;

    totalElement.textContent = newTotal.toFixed(2);
}

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

function clearCart() {
    cartProducts = [];
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total').textContent = '0.00';
}
