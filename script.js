const menuContainer = document.getElementById('menu-item-container');
const saladContainer = document.getElementById('salad-items-container');
const appetizerContainer = document.getElementById('appetizer-items-container');
const sandwichContainer = document.getElementById('sandwich-items-container');
const kidsContainer = document.getElementById('kids-items-container');
const floatingNavBar = document.getElementById('floating-nav-bar');


const pizzaOptions = [
    {
        type: '3-Cheese Pizza',
        smallPrice: 11,
        mediumPrice: 14,
        largePrice: 18,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Pepperoni',
        smallPrice: 12,
        mediumPrice: 15,
        largePrice: 19,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Hawaiian',
        smallPrice: 12,
        mediumPrice: 15,
        largePrice: 19,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Deluxe',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Veggie',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'BBQ Chicken',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'Meat Explosion',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'Donair',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
]

const saladOptions = [
    {
        type: 'House Salad',
        price: 5,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
]

const appetizerOptions = [
    {
        type: 'House Salad',
        price: 5,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
]

const sandwichOptions = [
    {
        type: 'House Salad',
        price: 5,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'leuismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
]

const kidsOptions = [
    {
        type: '1000 Layer Cheese Pizza',
        price: 5,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Dinosaur Pepperoni Pizza',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Chicken Nuggets',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Hotdog',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'The Kid\'s Salad',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Steak Dinner',
        price: 28,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
]

// FLOATING NAV BAR

const navList = document.getElementById('nav-list');
const navListHeight = navList.offsetHeight;
console.log(navListHeight);

window.addEventListener('scroll', () => {
        floatingNavBar.classList.add('active');
        if (window.scrollY <= navListHeight) {
            floatingNavBar.classList.remove('active');
        }
})

// POPULATE MENU ELEMENTS

function populateMenu() {
    pizzaOptions.forEach( (pizza) => {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item')
    menuItem.innerHTML = `
        <div class="type-price-div">
            <p>${pizza.type}</p>
            <div class="size-pricing">
                <span>${pizza.smallPrice}</span><span>${pizza.mediumPrice}</span><span>${pizza.largePrice}</span>
            </div>
        </div>
        <div class="pizza-item-ingredients"><p>${pizza.toppings}</p></div>
        <div class="item-bottom-border"></div>
            
    `
    menuContainer.appendChild(menuItem);
})
}

function populateSaladMenu() {
    saladOptions.forEach((salad) => {
        let saladItem = document.createElement('div');
        saladItem.classList.add('salad-item');
        saladItem.innerHTML = `
        <div class="type-price-div">
            <p>${salad.type}</p>
            <div class="salad-pricing">
            <span>${salad.price}</span>
            </div>
        </div>
        <div class="salad-item-ingredients">
            <p>${salad.ingredients}</p>
        </div>
        `
    saladContainer.appendChild(saladItem);
    })
}

function populateAppetizerMenu() {
    appetizerOptions.forEach((appetizer) => {
        let appetizerItem = document.createElement('div');
        appetizerItem.classList.add('appetizer-item');
        appetizerItem.innerHTML = `
        <div class="type-price-div">
            <p>${appetizer.type}</p>
            <div class="appetizer-pricing">
            <span>${appetizer.price}</span>
            </div>
        </div>
        <div class="appetizer-item-ingredients">
            <p>${appetizer.ingredients}</p>
        </div>
        `
    appetizerContainer.appendChild(appetizerItem);
    })
}

function populateSandwichMenu() {
    appetizerOptions.forEach((sandwich) => {
        let sandwichItem = document.createElement('div');
        sandwichItem.classList.add('sandwich-item');
        sandwichItem.innerHTML = `
        <div class="type-price-div">
            <p>${sandwich.type}</p>
            <div class="sandwich-pricing">
            <span>${sandwich.price}</span>
            </div>
        </div>
        <div class="sandwich-item-ingredients">
            <p>${sandwich.ingredients}</p>
        </div>
        `
    sandwichContainer.appendChild(sandwichItem);
    })
}

function populateKidsMenu() {
    kidsOptions.forEach((kids) => {
        let kidsItem = document.createElement('div');
        kidsItem.classList.add('kids-item');
        kidsItem.innerHTML = `
        <div class="type-price-div">
            <p>${kids.type}</p>
            <div class="kids-pricing">
            <span>${kids.price}</span>
            </div>
        </div>
        <div class="kids-item-ingredients">
            <p>${kids.ingredients}</p>
        </div>
        `
    kidsContainer.appendChild(kidsItem);
    })
}

populateMenu();
populateSaladMenu();
populateAppetizerMenu();
populateSandwichMenu();
populateKidsMenu();