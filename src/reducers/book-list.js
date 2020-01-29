const updateBookList = (state, action) => {
	if (state=== undefined) {
		return {
			books: [],
			loading: true,
			error: null
		};
	}
	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
			return  {
				// cartItems: state.cartItems, // is remained unchanged
				// orderTotal: state.orderTotal, // is remained unchanged 
				// or: more convinient:
				//...state, //destructuring the current satate and the modify old or add new fields:
				books: [],
				loading: true,
				error: null
				// Работа с данными в стор такая же как и с state в react: 
				// мы не можем напрямую менять элементы массива или объекта внутри стора
				// Нужно создавать поверхностную копию его с замененными элементами 
				// и эту кпоию присваивать старым свойствам store в return{} 
				// (return{} здесь - аналог setState(){} )
				// Простые перменные можно менять просто присваиванием нового значения в return{}. 
				// Как я представляю, это присваивание в методе return{} 
				// будет происходить в определенный специальный момент обновленеия дерева дом 
				//   безопасным способом. Если же менять элементы массива напрямую,
				// то изменения будут происходить сразу в момент этих изменеий.
			}
		case 'FETCH_BOOKS_SUCCESS':
			return 	{
				//...state,
				books: action.payload,
				loading: false,
				error: null
			}
		case 'FETCH_BOOKS_FAILURE':
        	return {
        		//...state,
        		books: [],
        		loading: false,
        		// error: true
        		error: action.payload
        	};	
        default:
        	return state.bookList;
        	//if this part of reducer doesn't know what to do with
        	// unknown action, then state.bookList is returned unchanged
	}
};
export default updateBookList;