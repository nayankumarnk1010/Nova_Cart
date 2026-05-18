window.addEventListener("DOMContentLoaded", () => {

    // ================= SEARCH =================

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");

    searchBtn.addEventListener("click", () => {
        searchBox.classList.toggle("active");
    });

    // ================= PRODUCTS =================

    const apiURL =
        "https://cdn.jsdelivr.net/gh/adarshahelvar/NovaCart/products.json";

    const productsContainer =
        document.getElementById("productsContainer");

    const pagination =
        document.getElementById("pagination");

    const sortSelect =
        document.getElementById("sortSelect");

    const productCount =
        document.getElementById("productCount");

    const searchInput =
        document.querySelector(".search-input");

    const categoryLinks =
        document.querySelectorAll(".dropdown-content a");

    let products = [];
    let filteredProducts = [];

    let currentPage = 1;

    const cardsPerPage = 10;

    let currentCategory = "all";
    let currentSearch = "";

    // ================= LOCAL STORAGE CART =================

    let cart =
        JSON.parse(localStorage.getItem("novaCart")) || [];

    // ================= FETCH PRODUCTS =================

    async function fetchProducts() {

        try {

            const response = await fetch(apiURL);

            products = await response.json();

            filteredProducts = [...products];

            applyFilters();

        }

        catch (error) {

            console.log(error);

        }

    }

    // ================= APPLY FILTERS =================

    function applyFilters() {

        filteredProducts = [...products];

        // CATEGORY FILTER
        if (currentCategory !== "all") {

            filteredProducts =
                filteredProducts.filter(product =>
                    product.category.toLowerCase() ===
                    currentCategory.toLowerCase()
                );

        }

        // SEARCH
        if (currentSearch.trim() !== "") {

            filteredProducts =
                filteredProducts.filter(product =>

                    product.name.toLowerCase()
                    .includes(currentSearch.toLowerCase())

                );

        }

        // SORT
        if (sortSelect.value === "low-high") {

            filteredProducts.sort((a, b) =>
                a.price - b.price
            );

        }

        else if (sortSelect.value === "high-low") {

            filteredProducts.sort((a, b) =>
                b.price - a.price
            );

        }

        else if (sortSelect.value === "rating") {

            filteredProducts.sort((a, b) =>
                b.rating - a.rating
            );

        }

        currentPage = 1;

        renderProducts();

        renderPagination();

    }

    // ================= RENDER PRODUCTS =================

    function renderProducts() {

        productsContainer.innerHTML = "";

        const start =
            (currentPage - 1) * cardsPerPage;

        const end =
            start + cardsPerPage;

        const paginatedProducts =
            filteredProducts.slice(start, end);

        if (filteredProducts.length > 0) {

            productCount.innerHTML =
                `Showing ${start + 1}-${Math.min(end, filteredProducts.length)} of ${filteredProducts.length} products`;

        }

        else {

            productCount.innerHTML =
                `No products found`;

        }

        paginatedProducts.forEach(product => {

            productsContainer.innerHTML += `

                <div class="product_card">

                    <div class="product_img">
                        <img src="${product.image}">
                    </div>

                    <div class="product_content">

                        <div class="top_row">

                            <span class="category">
                                ${product.category}
                            </span>

                            <span class="rating">
                                <i class="bi bi-star-fill"></i>
                                ${product.rating}
                            </span>

                        </div>

                        <h3 class="product_name">
                            ${product.name}
                        </h3>

                        <p class="description">
                            ${product.description}
                        </p>

                        <div class="bottom_row">

                            <h2 class="price">
                                $${product.price}
                            </h2>

                            <button class="add_btn">
                                <i class="bi bi-bag-plus"></i>
                                Add
                            </button>

                        </div>

                    </div>

                </div>

            `;

        });

    }

    // ================= PAGINATION =================

    function renderPagination() {

        pagination.innerHTML = "";

        const totalPages =
            Math.ceil(filteredProducts.length / cardsPerPage);

        for (let i = 1; i <= totalPages; i++) {

            const btn =
                document.createElement("button");

            btn.innerText = i;

            btn.classList.add("page_btn");

            if (i === currentPage) {

                btn.classList.add("active_page");

            }

            btn.addEventListener("click", () => {

                currentPage = i;

                renderProducts();

                renderPagination();

            });

            pagination.appendChild(btn);

        }

    }

    // ================= SEARCH =================

    searchInput.addEventListener("input", (e) => {

        currentSearch = e.target.value;

        applyFilters();

    });

    // ================= CATEGORY =================

    categoryLinks.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            currentCategory =
                link.textContent.toLowerCase();

            applyFilters();

        });

    });

    // ================= SORT =================

    sortSelect.addEventListener("change", () => {

        applyFilters();

    });

    // ================= FETCH =================

    fetchProducts();

    // =====================================================
    // ================= CART SECTION ======================
    // =====================================================

    const cartBtn =
        document.getElementById("cartBtn");

    const cartSidebar =
        document.getElementById("cartSidebar");

    const closeCart =
        document.getElementById("closeCart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartItems =
        document.getElementById("cartItems");

    const subtotal =
        document.getElementById("subtotal");

    const total =
        document.getElementById("total");

    const cartItemCount =
        document.getElementById("cartItemCount");

    const clearCart =
        document.getElementById("clearCart");

    // ================= SAVE CART =================

    function saveCart() {

        localStorage.setItem(
            "novaCart",
            JSON.stringify(cart)
        );

    }

    // ================= TOAST =================

    function showToast(message) {

        const toast =
            document.createElement("div");

        toast.className = "toast_message";

        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("show");

        }, 100);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 2000);

    }

    // ================= OPEN CART =================

    cartBtn.addEventListener("click", () => {

        cartSidebar.classList.add("active");

        cartOverlay.classList.add("active");

    });

    // ================= CLOSE CART =================

    function closeCartSidebar() {

        cartSidebar.classList.remove("active");

        cartOverlay.classList.remove("active");

    }

    closeCart.addEventListener("click",
        closeCartSidebar);

    cartOverlay.addEventListener("click",
        closeCartSidebar);

    // ================= ADD TO CART =================

    document.addEventListener("click", (e) => {

        if (e.target.closest(".add_btn")) {

            const card =
                e.target.closest(".product_card");

            const name =
                card.querySelector(".product_name").innerText;

            const price =
                parseFloat(
                    card.querySelector(".price")
                    .innerText.replace("$", "")
                );

            const image =
                card.querySelector("img").src;

            const existing =
                cart.find(item => item.name === name);

            if (existing) {

                existing.quantity++;

            }

            else {

                cart.push({
                    name,
                    price,
                    image,
                    quantity: 1
                });

            }

            saveCart();

            renderCart();

            showToast("Added to cart");

        }

    });

    // ================= RENDER CART =================

    function renderCart() {

        cartItems.innerHTML = "";

        let subtotalPrice = 0;

        let totalItems = 0;

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty_cart">
                    Cart is empty
                </div>
            `;

        }

        cart.forEach((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            subtotalPrice += itemTotal;

            totalItems += item.quantity;

            cartItems.innerHTML += `

                <div class="cart_item">

                    <div class="cart_item_img">
                        <img src="${item.image}">
                    </div>

                    <div class="cart_item_details">

                        <h3 class="cart_item_name">
                            ${item.name}
                        </h3>

                        <p class="cart_item_price">
                            $${item.price.toFixed(2)} each
                        </p>

                        <div class="quantity_box">

                            <button class="quantity_btn minus_btn"
                                data-index="${index}">
                                -
                            </button>

                            <div class="quantity_value">
                                ${item.quantity}
                            </div>

                            <button class="quantity_btn plus_btn"
                                data-index="${index}">
                                +
                            </button>

                        </div>

                    </div>

                    <div class="cart_item_right">

                        <button class="delete_btn"
                            data-index="${index}">
                            <i class="bi bi-trash"></i>
                        </button>

                        <div class="cart_item_total">
                            $${itemTotal.toFixed(2)}
                        </div>

                    </div>

                </div>

            `;

        });

        subtotal.innerText =
            `$${subtotalPrice.toFixed(2)}`;

        total.innerText =
            `$${(subtotalPrice + 8.50).toFixed(2)}`;

        cartItemCount.innerText =
            `${totalItems} items`;

        saveCart();

    }

    // ================= PLUS / MINUS / DELETE =================

    document.addEventListener("click", (e) => {

        // PLUS
        if (e.target.classList.contains("plus_btn")) {

            const index =
                e.target.dataset.index;

            cart[index].quantity++;

            renderCart();

        }

        // MINUS
        if (e.target.classList.contains("minus_btn")) {

            const index =
                e.target.dataset.index;

            if (cart[index].quantity > 1) {

                cart[index].quantity--;

            }

            else {

                cart.splice(index, 1);

            }

            renderCart();

        }

        // DELETE
        if (e.target.closest(".delete_btn")) {

            const index =
                e.target.closest(".delete_btn")
                .dataset.index;

            cart.splice(index, 1);

            renderCart();

        }

    });

    // ================= CLEAR CART =================

    clearCart.addEventListener("click", () => {

        cart = [];

        renderCart();

    });

    // ================= INITIAL =================

    renderCart();

});