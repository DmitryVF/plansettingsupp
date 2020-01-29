const updateOrder = (state, bookId, quantity) => {
	// extract books, cartItems from state:
	const { bookList: {books}, shoppingCart: {cartItems}} = state;
   	const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);	
        	// If it's nothing found it'll return -1
    const item = cartItems[itemIndex];
        	// if itemIndex == -1, item will be undefined
    const newItem = updateCartItem(book, item, quantity);
	        return {
	          orderTotal: 0,
	          cartItems: updateCartItems(cartItems, newItem, itemIndex)
	        };
}

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0){ //delete item from cart
  	return [
    ...cartItems.slice(0, idx),
    ...cartItems.slice(idx + 1)
  ];

  }

  //If we haven't found item in cart it'll return '-1'
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};


const updateCartItem = (book, item = {}, quantity) => {
	// Is for adding or increasing count of cartItem

	// Эта запись значит: берем id, count, ... из item
	// Но если их там нет, то присваиваем по умолчанию 
	// значения для id - book.id и т д
  const {
  	// defaults:
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 			
	} = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};


const updateShoppingCart = (state, action) => {
	if (state=== undefined) {
		return {
			cartItems: [
			// {
			// 	id: 1, 
			// 	title: "Book 1",
			// 	count: 3, 
			// 	total: 150
			// },

			// {
			// 	id: 2, 
			// 	title: "Book 2",
			// 	count: 2, 
			// 	total: 70
			// }
			],
			orderTotal: 0
		}
	}
	switch (action.type) {
		case 'BOOK_ADDED_TO_CART':
        	return updateOrder(state, action.payload, 1);

	    case 'BOOK_DECREASED_IN_CART':
	    	return updateOrder(state, action.payload, -1);
	        
	    case 'BOOK_DELETED_IN_CART':
	    	const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
	    	return updateOrder(state, action.payload, -item.count);
		default:
        	return state.shoppingCart;
	}
};
export default updateShoppingCart;