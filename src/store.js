import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

// 리덕스의 경우 action과 많은 actionCreator를 써야하는 단점들이 있다.
// switch의 경우 case, default 등 써야할 부분이 많다.
// 그래서 사람들이 생각할 때 많은 코드를 쳐야한다고 생각한다 >>> 그래서 Redux toolkit(적은량의 코드로 같은 기능을 하게 도와줌)을 사용하면 좋다.

// creatAction은
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// console.log(addToDo, deleteToDo);
// console.log(addToDo.type, deleteToDo.type);
// console.log(addToDo(), deleteToDo());

const reducer = (state = [], action) => {
	switch (action.type) {
		case addToDo.type:
			// console.log(action);
			return [{ text: action.payload, id: Date.now() }, ...state];
		case deleteToDo.type:
			return state.filter((toDo) => toDo.id !== action.payload); // action은 function인 createAction으로 만들어지기 때문에 action.id가 아닌 action.payload가 id를 갖는다.
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
