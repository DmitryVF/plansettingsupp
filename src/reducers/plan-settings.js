const updatePlanSettings = (state, action) => {
	if (state=== undefined) {
		return {
			billType:'monthly',
			planType: 'trials'
		};
	}
	switch (action.type) {
		case 'BILL_TYPE_CHANGED':
			console.log('BILL_TYPE_CHANGED');
			return  {
				planType: state.planSettings.planType, 
				billType: action.payload
			}
		case 'PLAN_TYPE_CHANGED':
			return 	{
				planType: state.planSettings.planType, 
				planType: action.payload,
				
			}
        default:
        	return state.bookList;
	}
	console.log(state);
};
export default updatePlanSettings;