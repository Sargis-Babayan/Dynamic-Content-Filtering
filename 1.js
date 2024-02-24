// Sample product data
const products = [
    { id: 1, name: "Product 1", category: "Home", price: 50, tags: ["new", "eco-friendly"] },
    { id: 2, name: "Product 2", category: "Apparel", price: 30, tags: ["sale"] },
    { id: 3, name: "Product 3", category: "Electronics", price: 100, tags: ["new"] },
    // Add more products as needed
];

// Initial product listing
function render(){
    renderProducts(products);

// Event listeners for filter changes
document.getElementById('category').addEventListener('change', updateFilters);
document.getElementById('newTag').addEventListener('change', updateFilters);
document.getElementById('saleTag').addEventListener('change', updateFilters);
document.getElementById('ecoFriendlyTag').addEventListener('change', updateFilters);

// Function to render products based on current filters
function renderProducts(productsToShow) {
    const productListings = document.getElementById('product-listing');
    productListings.innerHTML = '';

    if (productsToShow.length === 0) {
        productListings.innerHTML = '<p>No products found.</p>';
    } else {
        productsToShow.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `<p>${product.name}</p><p>${product.category}</p><p>${product.price}</p>`;
            productListings.appendChild(productElement);
        });
    }
}

// Function to update filters and re-render products
function updateFilters() {
    const selectedCategory = document.getElementById('category').value;
    const newTagChecked = document.getElementById('newTag').checked;
    const saleTagChecked = document.getElementById('saleTag').checked;
    const ecoFriendlyTagChecked = document.getElementById('ecoFriendlyTag').checked;

    let filteredProducts = products;

    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (newTagChecked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('new'));
    }

    if (saleTagChecked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('sale'));
    }

    if (ecoFriendlyTagChecked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('eco-friendly'));
    }

    renderProducts(filteredProducts);
}
}