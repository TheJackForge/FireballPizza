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
        toppings: 'plenty of \'roni, cheese'
    },
    {
        type: 'Hawaiian',
        smallPrice: 12,
        mediumPrice: 15,
        largePrice: 19,
        toppings: 'ham, pineapple, note: pineapple does belong on pizza'
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
        toppings: 'all the vegetables even the gross ones',
    },
    {
        type: 'BBQ Chicken',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'chicken, our homestyle bbq sauce, onions, made by a chef wearing New Balance sneakers',
    },
    {
        type: 'Meat Explosion',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'pepperoni, Italian sausage, ham, meat you didn\'t even know existed, meat',
    },
    {
        type: 'Donair',
        smallPrice: 14,
        mediumPrice: 19,
        largePrice: 23,
        toppings: 'donair meat, sweet sauce, our chef will say "yes boss" as he sends it out to you',
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

const sandwichOptions = [

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

function populateSandwichMenu() {
    appetizerOptions.forEach((sandwich) => {
        let sandwichItem = document.createElement('div');
        sandwichItem.classList.add('appetizer-item');
        sandwichItem.innerHTML = `
        <div class="type-price-div">
            <p>${sandwich.type}</p>
            <div class="appetizer-pricing">
            <span>${sandwich.price}</span>
            </div>
        </div>
        <div class="sandwich-item-ingredients">
            <p>${sandwich.ingredients}</p>
        </div>
        `
    appetizerContainer.appendChild(appetizerItem);
    })
}

populateMenu();
populateSaladMenu();
populateAppetizerMenu();