// import { createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// 리덕스의 경우 action과 많은 actionCreator를 써야하는 단점들이 있다.
// switch의 경우 case, default 등 써야할 부분이 많다.
// 그래서 사람들이 생각할 때 많은 코드를 쳐야한다고 생각한다 >>> 그래서 Redux toolkit(적은량의 코드로 같은 기능을 하게 도와줌)을 사용하면 좋다.

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case addToDo.type:
// 			// console.log(action);
// 			return [{ text: action.payload, id: Date.now() }, ...state]; // 이 부분은 createReducer처럼 state를 mutate하지 못하여 새로운 state를 만들어야 했다.
// 		case deleteToDo.type:
// 			return state.filter((toDo) => toDo.id !== action.payload); // action은 function인 createAction으로 만들어지기 때문에 action.id가 아닌 action.payload가 id를 갖는다.
// 		default:
// 			return state;
// 	}
// };

// creataReducer는 state를 mutate하기 쉽게 만들어 준다.
const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() }); // 위 본래의 코드랑 다르게 여기서는 return을 하지 않는다(state를 mutate할 뿐). redux toolkit과 immer가 해준다.
	},
	[deleteToDo]: (state, action) => {
		state.filter((toDo) => toDo.id !== action.payload);
	},
});

const store = configureStore({ reducer }); //configureStore는 함수로 아주 쿨한 미들웨어와 함께 store를 생성한다. Redux Developer Tools를 사용할 수 있다.

export const actionCreators = {
	addToDo,
	deleteToDo,
};

// store.subscribe()  //변경사항을 알려준다.

export default store;
