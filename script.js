const menuContainer = document.getElementById('menu-item-container')

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
    }

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

populateMenu();