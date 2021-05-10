import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addToDo = (text) => {
	return {
		type: ADD,
		text,
	};
};

export const deleteToDo = (id) => {
	return {
		type: DELETE,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.new() }, ...state];
		case DELETE:
			return state.filter((toDo) => toDo !== action.id);
		default:
			return state;
	}
};

const store = createStore(reducer);

// store.subscribe()  //변경사항을 알려준다.

export default store;
