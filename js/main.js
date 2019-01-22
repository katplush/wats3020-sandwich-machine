/* JavaScript for WATS 3020 Sandwich Machine Assignment */

let bread = prompt('What kind of bread do you want? (white, wheat, flat)','white');

let meat = prompt('What kind of meat(s) do you want? You may select more then one by separating with a comma. (For example: chicken, beef, bacon)','chicken');

let topping = prompt('What kind of toppings would you like? Use commas to separate. (Such as tomato, lettuce, onion):','tomato, lettuce, onion');

let condiment = prompt('Enter the condiments you would like. (Such as ketchup, mayo, mustard)','mayo');

// The `prices` object below specifies the prices for each thing.

let prices = {
  sandwich: 5, // Base price for a sandwich is $5, includes bread
  meat: 1, // Each kind of meat on a sandwich costs $1
  topping: 0.5, // Each topping costs $0.50
  condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meat.split(',');
let toppingArray = topping.split(',');
let condimentArray = condiment.split(',');

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meat}</p>
    <p>Toppings: ${topping}</p>
    <p>Condiments: ${condiment}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`;

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector('#receipt-text');
receiptText.innerHTML = receiptTemplate;
