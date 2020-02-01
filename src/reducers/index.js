import updatePlanSettings from './plan-settings';
import updateProfile from './profile';

const initialState = {
	
	planSettings: {
		billType:'monthly',
		planType: 'trials'
	},
	profile: {
			name: 'John Due', 
			email: 'JohnDue1234@gmail.com',
			currentPassword: "**********",
			newPassword: "New Password",
			confirmPassword: "Confirm New Password"
	}
};



// Naming conventions:
// [request type]_[object]_[action]

// const reducer = (state = initialState, action) => {

const reducer = (state, action) => {
	console.log('state');
	return {
		planSettings: updatePlanSettings(state, action), 
		profile: updateProfile(state, action)
	}
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

