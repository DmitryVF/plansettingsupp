import React, { Component } from 'react';
import './book-list.css';
import BookListItem from '../book-list-item';

import { bindActionCreators } from 'redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
// import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { withBookstoreService } from '../hoc';

// import { booksLoaded, booksRequested , booksError } from '../../actions';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

// p.s. At the end of the lessN125 was described how this component
// interacts with redux.

const BookList = ({books, onAddedToCart}) => {
	// presentational component
	return (
			<ul className='book-list'>
			{
				books.map((book)=>{
					return(
						<li key={book.id}>
							<BookListItem book={book}
							onAddedToCart={()=>onAddedToCart(book.id)}/>
						</li>)
				})
			}
			</ul>
	)
}

class BookListContainer extends Component {
	// container realizes loading, error and other logic.
	// container could be placed in separeted files that are stored
	// in a /containers directory

	componentDidMount(){
		this.props.fetchBooks();

		// previous :
		// //1. receive data
		// 	//// bookstoreService comes here from HOC via props
		// const { bookstoreService, booksLoaded, booksRequested } = this.props;
		// booksRequested(); //it's for spinner rerender
		// bookstoreService.getBooks()
		// //2. dispatch action to store
		// .then((data)=> booksLoaded(data)); 

	}

	render (){
		const { books, loading, error, onAddedToCart } = this.props;
		if (loading) {
			return <Spinner />;
		}

		if (error) {
    		return <ErrorIndicator />;
    	}

    	return <BookList books= {books} onAddedToCart = {onAddedToCart}/>
	}
}



// const mapStateToProps = (state) => {
// 	return {
// 		books: state.books
// 	}
// };


// state that is needed to come into component via props:
					//  (			state 	     )
const mapStateToProps = ({bookList: {books, loading , error}}) => {
	   //  (		props 		   )
	return { books, loading, error };
};




// without ActionCreators:
// const mapDispatchToProps = (dispatch) => {
// 	return { 
// 		booksLoaded: (newBooks) => {
// 			dispatch({
// 				type: 'BOOKS_LOADED',
// 				payload: newBooks
// 			});
// 		}
// 	};
// };

//without bindActionCreators:
// const mapDispatchToProps = (dispatch) => {
// 	return { 
// 		booksLoaded: (newBooks) => {
// 			dispatch(booksLoaded(newBooks));
// 		}
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
// 		booksLoaded
// 	}, dispatch);
// };

// the shortest form:...
// const mapDispatchToProps = {
// 		booksLoaded,
// 		booksRequested
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//  const { bookstoreService } = ownProps;
// 	return {
// 		fetchBooks: () => dispatch( fetchBooks(bookstoreService)()),
// 		// without thunk:
// 		// fetchBooks: fetchBooks(bookstoreService, dispatch),
		

// 		// moved to actions
// 		// fetchBooks: () => {
// 		// 	dispatch(booksRequested()); //it's for spinner rerender
// 		// 	bookstoreService.getBooks() //1. receive data
// 		// 		.then( (data)=> dispatch(booksLoaded(data)) )  //2. dispatch action to store		
// 		// 		.catch( (err)=> dispatch(booksError(err)) );
// 		// }
// 		onAddedToCart: (id) => dispatch(bookAddedToCart(id))
// 		//{console.log('Added to cart', id);}
// 	}
// };

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps; //bookstoreService comes as a prop via HOC withBookstoreService (bookList was wrapped by HOC using compose func)
	return bindActionCreators({
		// Prop      //ActionCreator
		fetchBooks: fetchBooks(bookstoreService),
		onAddedToCart: bookAddedToCart
	}, dispatch);
};	 

// ownProps are the props that were binded in connect function
// example:
//<Person details='full'/>
// mapDispatchToProps = (dispatch, ownProps) => {
// 	console.log(ownProps.details); //full
// }
// also ownProps can be binded using compose function
// (like it is done with Redux)


export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);


// without compose:
// export default withBookstoreService()(
// 	connect(mapStateToProps, mapDispatchToProps)(BookList));

