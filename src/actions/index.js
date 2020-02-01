
export const billChanged = (checked) => {
	let billType;
	if(checked){
		billType = 'annually';
	}else{
		billType = 'monthly'
	}
	console.log('checked = '+checked);
	return {
		type: 'BILL_TYPE_CHANGED',
		payload: billType
	};
};

export const planSelected = (plan) => {
	return {
		type: 'PLAN_TYPE_CHANGED',
		payload: plan
	};
};

