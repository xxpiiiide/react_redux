import { createStore } from 'redux';


// 리덕스의 경우 action과 많은 actionCreator를 써야하는 단점들이 있다.
// switch의 경우 case, default 등 써야할 부분이 많다.
// 그래서 사람들이 생각할 때 많은 코드를 쳐야한다고 생각한다 >>> 그래서 Redux toolkit(적은량의 코드로 같은 기능을 하게 도와줌)을 사용하면 좋다.


const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
	return {
		type: ADD,
		text,
	};
};

const deleteToDo = (id) => {
	return {
		type: DELETE,
		id: parseInt(id),
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

const store = createStore(reducer);

export const actionCreators = {
	addToDo,
	deleteToDo,
};

// store.subscribe()  //변경사항을 알려준다.

export default store;
