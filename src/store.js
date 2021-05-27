import { configureStore, createSlice } from '@reduxjs/toolkit';

// 리덕스의 경우 action과 많은 actionCreator를 써야하는 단점들이 있다.
// switch의 경우 case, default 등 써야할 부분이 많다.
// 그래서 사람들이 생각할 때 많은 코드를 쳐야한다고 생각한다 >>> 그래서 Redux toolkit(적은량의 코드로 같은 기능을 하게 도와줌)을 사용하면 좋다.

// createSlice함수는 이미 작성했던 코드 라인을 현저하게 줄여준다. reducer뿐만아니라 actions도 생성한다.
const toDos = createSlice({
	name: 'toDosReducer',
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		remove: (state, action) =>
			state.filter((toDo) => toDo.id !== action.payload),
	},
});

const store = configureStore({ reducer: toDos.reducer }); //configureStore는 함수로 아주 쿨한 미들웨어와 함께 store를 생성한다. Redux Developer Tools를 사용할 수 있다.

console.log(toDos.actions);

export const { add, remove } = toDos.actions;

// store.subscribe()  //변경사항을 알려준다.

export default store;
