let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Add to Cart */
function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

/* Display Cart */
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    if (!cartItems) return; // prevent error

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">❌</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

/* Remove Item */
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

/* Theme Toggle */
function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

/* SEARCH FIX */
document.adocument.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("search");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            let products = document.querySelectorAll(".product-card");

            products.forEach(product => {
                let text = product.innerText.toLowerCase();

                if (text.includes(value)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });

        });
    }

});ddEventListener("DOMContentLoaded", function () {
    let search = document.getElementById("search");

    if (search) {
        search.addEventListener("keyup", function () {
            let value = this.value.toLowerCase();
            let products = document.querySelectorAll(".product-card");

            products.forEach(p => {
                let text = p.innerText.toLowerCase();
                p.style.display = text.includes(value) ? "block" : "none";
            });
        });
    }

    displayCart();
});
