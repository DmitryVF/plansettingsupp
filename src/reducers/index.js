import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const initialState = {
	// it concerns manipulations with books only
	bookList: {
		books: [],
		loading: true,
		error: null,
	},

	// it concerns manipulations with cart only
	shoppingCart: {
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
	
};



// Naming conventions:
// [request type]_[object]_[action]

// const reducer = (state = initialState, action) => {

const reducer = (state, action) => {
	// console.log(action.type);
	return {
		bookList: updateBookList(state, action), 
		shoppingCart: updateShoppingCart(state, action)
	}
	// switch (action.type){
	// 	case 'FETCH_BOOKS_REQUEST':
	// 	case 'FETCH_BOOKS_SUCCESS':
	// 	case 'FETCH_BOOKS_FAILURE':
	// 		return {
	// 			...state,
	// 			bookList: updateBookList(state, action)
	// 		};
	// 	case 'BOOK_ADDED_TO_CART':
	// 	case 'BOOK_DECREASED_IN_CART':
	// 	case 'BOOK_DELETED_IN_CART':
	// 		return {
	// 			...state,
	// 			shoppingCart: updateShoppingCart (state, action)
	// 		};
 //        default:
	// 		return state;
	// }
} 
export default reducer;

// стор это типа state. Объем данных в нем можно увидеть в initialState
// обновление данных в нем только через редъюсер (настоящий файл)
// каждый раз, когда надо обновить состояние (данные в сторе), нужно
// сгенерить действие (action) и прикрепить к нему payload (при необходимости)
// action - это пустая функия, поступающая в компонент как свойство:
// на входе - новое значение параметра для стора. 
// Возвращает action - 'action.type' и payload == новое значение параметра для стора
// Диспатчер (внутренний метод Redux), получая action, обновляет state в соответствии с CASE в reduсer.
// Обновлять можно сразу все поля state, а не только тем что пришло в payload.
// после обновления state поступает в компонент через props благодаря mapStatetoProps
// аналогично функции action попадают в компонент благодаря mapDispatchtoProps.
//  компонент + mapStatetoProps и mapDispatchtoProps  
// подключаются к store с помощъю функции connect() 
// сервис подключается через HOC. Получение данных из сервиса может быть  
// в процессе componentDidMount() - либо непосредственно, либо через функцию,
// объявленную в mapDispatchtoProps. После получения данных они диспатчатся в Store
// как описано выше.
// Actions еще может содержать код запосов на сервер как отдельую функцию
// В таком случае это становится похоже на MVC:
// reducer - model; actions - controller; component - view...



// differenses between setState and Redux:
// -----------
// React: setState()
// { a: 0, b: 1 } //initial state
// setState({a: 100});
// after it becomes: { a: 100, b: 1 }

// Redux: reducer()
// --------
// { a: 0, b: 1 } //initial state

// const reducer = (state, action) => {
// 	return { a: 100 };
// }
// after it becomes: { a: 100 }
// to acheive the same result the folowing must be written:
// const reducer = (state, action) => {
// 	return { a: 100, b: state.b };
// }
// after it becomes: { a: 100, b: 1 }
// or:
// const reducer = (state, action) => {
// 	return { ...state,  a: 100};
// }
// after it becomes: { a: 100, b: 1 }

