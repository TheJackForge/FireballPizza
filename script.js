const menuContainer = document.getElementById('menu-item-container');
const saladContainer = document.getElementById('salad-items-container');
const appetizerContainer = document.getElementById('appetizer-items-container');
const sandwichContainer = document.getElementById('sandwich-items-container');
const kidsContainer = document.getElementById('kids-items-container');
const floatingNavBar = document.getElementById('floating-nav-bar');


const pizzaOptions = [
    {
        type: '3-Cheese Pizza',
        smallPrice: 10,
        mediumPrice: 14,
        largePrice: 18,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Pepperoni',
        smallPrice: 12,
        mediumPrice: 16,
        largePrice: 20,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Hawaiian',
        smallPrice: 13,
        mediumPrice: 17,
        largePrice: 21,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Deluxe',
        smallPrice: 15,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget'
    },
    {
        type: 'Veggie',
        smallPrice: 13,
        mediumPrice: 17,
        largePrice: 21,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'BBQ Chicken',
        smallPrice: 16,
        mediumPrice: 20,
        largePrice: 24,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'Donair',
        smallPrice: 16,
        mediumPrice: 20,
        largePrice: 24,
        toppings: 'risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget',
    },
    {
        type: 'Meat Explosion',
        smallPrice: 18,
        mediumPrice: 22,
        largePrice: 26,
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
        type: 'Waldorf Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Taco Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
]

const appetizerOptions = [
    {
        type: 'Avocado Toast',
        price: 6,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Mozzarella Sticks',
        price: 6,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Onion Ring Stacker',
        price: 8,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken Wings',
        price: 10,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken Fingers',
        price: 10,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Nachos',
        price: 11,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
]

const sandwichOptions = [
    {
        type: 'Classic Fireball Burger',
        price: 10,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Double Classic with Cheese',
        price: 12,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Smoked Bacon Burger',
        price: 12,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'The Pizza Burger',
        price: 13,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Grilled Cheese',
        price: 9,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'The Fireball BLT',
        price: 10,
        ingredients: 'euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Chicken and Waffle Sandwich',
        price: 11,
        ingredients: 'leuismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at'
    },
    {
        type: 'Southwest Quesadilla',
        price: 11,
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
        type: 'Macaroni and Cheese',
        price: 5,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Fireball Pepperoni Pizza',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Hotdog',
        price: 6,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Double Slider Burgers',
        price: 7,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Chicken Nuggets',
        price: 7,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
    {
        type: 'Kid\'s Chicken Quesadilla',
        price: 7,
        ingredients: 'vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit'
    },
]

// FLOATING NAV BAR

const navList = document.getElementById('nav-list');
const navListHeight = (navList.offsetHeight);

window.addEventListener('scroll', () => {
        floatingNavBar.classList.add('active');
        if (window.scrollY <= navListHeight) {
            floatingNavBar.classList.remove('active');
        } else {
            floatingNavBar.classList.add('active');
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
        <div class="salad-type-price-div">
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
        <div class="appetizer-type-price-div">
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
    sandwichOptions.forEach((sandwich) => {
        let sandwichItem = document.createElement('div');
        sandwichItem.classList.add('sandwich-item');
        sandwichItem.innerHTML = `
        <div class="sandwich-type-price-div">
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
        <div class="kids-type-price-div">
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