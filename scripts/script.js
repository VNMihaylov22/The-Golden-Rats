function addToCart(button) {
    var product = button.parentNode;
    var productName = product.dataset.name;
    var productPrice = parseFloat(product.dataset.price);

    var cartItem = document.createElement('li');
    cartItem.textContent = productName + ' - '  + productPrice.toFixed(2) + 'lv';

    document.getElementById('cart-items').appendChild(cartItem);

    updateTotal(productPrice);
}

function updateTotal(price) {
    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.textContent);

    var newTotal = currentTotal + price;

    totalElement.textContent = newTotal.toFixed(2);
}