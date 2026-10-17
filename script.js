const shoeImages = {
  Black: [
    "images/shoe-01.jpg",
    "images/shoe-08.jpg",
    "images/shoe-12.jpg"
  ],
  White: [
    "images/shoe-02.jpg",
    "images/shoe-04.jpg",
    "images/shoe-14.jpg"
  ],
  Blue: [
    "images/shoe-06.jpg",
    "images/shoe-07.jpg",
    "images/shoe-13.jpg"
  ],
  Red: [
    "images/shoe-03.jpg",
    "images/shoe-10.jpg",
    "images/shoe-11.jpg"
  ],
  Green: [
    "images/shoe-05.jpg",
    "images/shoe-09.jpg",
    "images/shoe-15.jpg"
  ]
};

const shoes = [
  { id: 1, name: "Air Max Runner", brand: "Nike", size: 42, color: "Black", price: 130, image: shoeImages.Black[0] },
  { id: 2, name: "UltraBoost 22", brand: "Adidas", size: 44, color: "White", price: 180, image: shoeImages.White[0] },
  { id: 3, name: "RS-X Sneaker", brand: "Puma", size: 46, color: "Red", price: 110, image: shoeImages.Red[0] },
  { id: 4, name: "Air Force 1", brand: "Nike", size: 48, color: "White", price: 75, image: shoeImages.White[1] },
  { id: 5, name: "Superstar", brand: "Adidas", size: 42, color: "Green", price: 90, image: shoeImages.Green[0] },
  { id: 6, name: "Suede Classic", brand: "Puma", size: 44, color: "Blue", price: 160, image: shoeImages.Blue[0] },
  { id: 7, name: "Pegasus 39", brand: "Nike", size: 46, color: "Blue", price: 120, image: shoeImages.Blue[1] },
  { id: 8, name: "NMD R1", brand: "Adidas", size: 48, color: "Black", price: 140, image: shoeImages.Black[1] },
  { id: 9, name: "Cali Sport", brand: "Puma", size: 42, color: "Green", price: 70, image: shoeImages.Green[1] },
  { id: 10, name: "Revolution 6", brand: "Nike", size: 44, color: "Red", price: 130, image: shoeImages.Red[1] },
  { id: 11, name: "Forum Low", brand: "Adidas", size: 46, color: "Red", price: 155, image: shoeImages.Red[2] },
  { id: 12, name: "Future Rider", brand: "Puma", size: 48, color: "Black", price: 150, image: shoeImages.Black[2] },
  { id: 13, name: "Jordan Retro", brand: "Nike", size: 42, color: "Blue", price: 210, image: shoeImages.Blue[2] },
  { id: 14, name: "Run Falcon", brand: "Adidas", size: 44, color: "White", price: 100, image: shoeImages.White[2] },
  { id: 15, name: "Flyer Runner", brand: "Puma", size: 46, color: "Green", price: 85, image: shoeImages.Green[2] },
  { id: 16, name: "Air Force One Premium", brand: "Nike", size: 42, color: "White", price: 125, image: "images/shoe-16.jpg" },
  { id: 17, name: "Court High Retro", brand: "Nike", size: 44, color: "Red", price: 140, image: "images/shoe-17.jpg" },
  { id: 18, name: "Free Run Trail", brand: "Nike", size: 46, color: "Green", price: 135, image: "images/shoe-18.jpg" },
  { id: 19, name: "Flex Runner", brand: "Nike", size: 48, color: "Green", price: 180, image: "images/shoe-19.jpg" },
  { id: 20, name: "Urban Court", brand: "Nike", size: 42, color: "Orange", price: 165, image: "images/shoe-20.jpg" },
  { id: 21, name: "Fresh Foam 574", brand: "New Balance", size: 44, color: "Pink", price: 95, image: "images/shoe-21.jpg" },
  { id: 22, name: "Air Max Orange Burst", brand: "Nike", size: 46, color: "Orange", price: 190, image: "images/shoe-22.jpg" },
  { id: 23, name: "Air Max Sunrise", brand: "Nike", size: 48, color: "Orange", price: 175, image: "images/shoe-23.jpg" },
  { id: 24, name: "Smash Classic", brand: "Puma", size: 42, color: "White", price: 80, image: "images/shoe-24.jpg" },
  { id: 25, name: "New Balance 247", brand: "New Balance", size: 44, color: "Green", price: 120, image: "images/shoe-25.jpg" },
  { id: 26, name: "Air Max Sunset", brand: "Nike", size: 46, color: "Orange", price: 210, image: "images/shoe-26.jpg" },
  { id: 27, name: "Air Force One Wheat", brand: "Nike", size: 48, color: "Brown", price: 145, image: "images/shoe-27.jpg" },
  { id: 28, name: "Old Skool Maroon", brand: "Vans", size: 42, color: "Red", price: 115, image: "images/shoe-28.jpg" },
  { id: 29, name: "Street Classic", brand: "Nike", size: 44, color: "White", price: 150, image: "images/shoe-29.jpg" },
  { id: 30, name: "Revolution Red", brand: "Nike", size: 46, color: "Red", price: 105, image: "images/shoe-30.jpg" }
];

const productGrid = document.getElementById('productGrid');
const filterForm = document.getElementById('filterForm');
const brandFilter = document.getElementById('brandFilter');
const colorFilter = document.getElementById('colorFilter');
const sizeFilter = document.getElementById('sizeFilter');
const priceFilter = document.getElementById('priceFilter');
const noProductsMessage = document.getElementById('noProductsMessage');

function renderProducts(productList) {
  if (productList.length === 0) {
    productGrid.innerHTML = '';
    noProductsMessage.classList.remove('d-none');
    return;
  }

  noProductsMessage.classList.add('d-none');

  productGrid.innerHTML = productList.map(shoe => `
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="product-card">
        <div class="image-container">
          <img src="${shoe.image}" alt="${shoe.color} ${shoe.name}" loading="lazy" />
        </div>

        <div class="info-box" title="${shoe.name} (${shoe.brand})">
          ${shoe.name} - ${shoe.brand}
        </div>

        <div class="row g-1">
          <div class="col-4">
            <div class="tag-box">Sz: ${shoe.size}</div>
          </div>
          <div class="col-4">
            <div class="tag-box">${shoe.color}</div>
          </div>
          <div class="col-4">
            <div class="tag-box text-success fw-bold">$${shoe.price}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts() {
  const selectedBrand = brandFilter.value;
  const selectedColor = colorFilter.value;
  const selectedSize = sizeFilter.value;
  const selectedPriceRange = priceFilter.value;

  const filtered = shoes.filter(shoe => {
    const brandMatch = selectedBrand === 'All' || shoe.brand === selectedBrand;

    const colorMatch = selectedColor === 'All' || shoe.color === selectedColor;

    const sizeMatch = selectedSize === 'All' || shoe.size === Number(selectedSize);

    let priceMatch = true;
    if (selectedPriceRange !== 'All') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      priceMatch = shoe.price >= min && shoe.price <= max;
    }

    return brandMatch && colorMatch && sizeMatch && priceMatch;
  });

  renderProducts(filtered);
}

filterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  filterProducts();
});

renderProducts(shoes);
