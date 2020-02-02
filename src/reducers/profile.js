

const updateProfile = (state, action) => {
	if (state=== undefined) {
		return {
			name: 'John Due', 
			email: 'JohnDue1234@gmail.com',
			currentPassword: "**********",
			newPassword: "New Password",
			confirmPassword: "Confirm New Password"
		}
	}
	switch (action.type) {
		case 'PROFILE_EDIT':
			console.log('PROFILE_EDIT');
			return  {
				planType: state.planSettings.planType, 
				billType: action.payload
			}
		
        default:

        	return state.profile;
	}
	// switch (action.type) {
	// 	case 'BOOK_ADDED_TO_CART':
 //        	return updateOrder(state, action.payload, 1);

	//     case 'BOOK_DECREASED_IN_CART':
	//     	return updateOrder(state, action.payload, -1);
	        
	//     case 'BOOK_DELETED_IN_CART':
	//     	const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
	//     	return updateOrder(state, action.payload, -item.count);
	// 	default:
 //        	return state.shoppingCart;
	// }
};
export default updateProfile;