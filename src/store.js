import { createStore } from 'redux';

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

export const acttionCreators = {
	addToDo,
	deleteToDo,
};

// store.subscribe()  //변경사항을 알려준다.

export default store;
