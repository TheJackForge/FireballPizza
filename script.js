const menuContainer = document.getElementById('menu-item-container')
const saladContainer = document.getElementById('salad-items-container')
const appetizerContainer = document.getElementById('appetizer-items-container')

const pizzaOptions = [
    {
        type: '3-Cheese Pizza',
        smallPrice: 11,
        mediumPrice: 14,
        largePrice: 18,
        toppings: 'fresh mozzarella, parmesan, ricotta'
    },
    {
        type: 'Pepperoni',
        smallPrice: 12,
        mediumPrice: 15,
        largePrice: 19,
        toppings: 'fresh mozzarella, pepperoni'
    },
    {
        type: 'Hawaiian',
        smallPrice: 12,
        mediumPrice: 15,
        largePrice: 19,
        toppings: 'pineapple, ham, tomato sauce and cheese'
    },
    {
        type: 'Deluxe',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions'
    },
    {
        type: 'Veggie',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions'
    },
    {
        type: 'BBQ Chicken',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions'
    },
    {
        type: 'Meat Explosion',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions'
    },
    {
        type: 'Donair',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions',
    },
    {
        type: 'Donair',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions',
    },
    {
        type: 'Donair',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, fresh green peppers, mushrooms, onions',
    },
]

const saladOptions = [
    {
        type: 'House Salad',
        price: 5,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Chicken Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
]

const appetizerOptions = [
    {
        type: 'House Salad',
        price: 5,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Chicken Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Chef\'s Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
    {
        type: 'Caesar Salad',
        price: 7,
        ingredients: 'lettuce, tomatoes, cucumbers, house dressing'
    },
]

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
            <div class="pizza-item-ingredients"><p>${pizza.toppings}</p>
        </div>
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

populateMenu();
populateSaladMenu();
populateAppetizerMenu();