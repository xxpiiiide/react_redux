import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// mutate state는 절대 사용하지 않고 대신 new state objects를 리턴해야한다. >>> 상태를 수정하는 것이 아니라 새로운 상태를 리턴해야한다.
const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text , id: Date.now()}]; // 이 array는 과거의 state와 새로운 TODO를 갖게된다.
		case DELETE_TODO:
			return [];
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// const createToDo = (toDo) => {
// 	const li = document.createElement('li');
// 	li.innerText = toDo;
// 	ul.appendChild(li);
// };

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = '';
	store.dispatch({ type: ADD_TODO, text: toDo });
	// createToDo(toDo);
};

form.addEventListener('submit', onSubmit);
