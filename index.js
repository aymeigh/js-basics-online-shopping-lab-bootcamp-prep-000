var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObject = {itemName: [item], itemPrice: Math.floor(Math.random()*100)};
  cart.push(itemObject);
  return [item] + " has been added to your cart.";  
  }

function viewCart() {
  var contents = [];
  let itemPrice = Math.floor(Math.random()*100);
  let i = 0; 
  while (i < cart.length) {
    contents.push(`you have ${i} at ${itemPrice},`);
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
} else {
  return `In your cart, ${contents} and ${i} at $${ itemPrice}.`; 
}
}

function total() {
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
