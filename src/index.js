import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// dispatchToDo,DeleteToDo action creator로 오로지 object만 return하게 한다.
const addToDo = (text) => {
	return {
		type: ADD_TODO,
		text,
	};
};

const deleteToDo = (id) => {
	return {
		type: DELETE_TODO,
		id,
	};
};


// mutate state는 절대 사용하지 않고 대신 new state objects를 리턴해야한다. >>> 상태를 수정하는 것이 아니라 새로운 상태를 리턴해야한다.
const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			const newToDoObj = { text: action.text, id: Date.now() };
			return [newToDoObj, ...state]; // 이 array는 과거의 state와 새로운 TODO를 갖게된다. ADD_TODO 될 때 인자값의 자리를 바꾸면 입력하는 값이 최신으로 보이게 된다.
		case DELETE_TODO:
			const cleaned = state.filter((toDo) => toDo.id !== action.id); // 새로운 array를 return 하기 위해 Filter메소드를 사용하였다. mutate는 절대 금지
			return cleaned;
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
	const toDos = store.getState();
	ul.innerHTML = ''; // store가 바뀔때마다 매번 모든것을 repainting하므로 설정해주어야 헌다.
	toDos.forEach((toDo) => {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		btn.innerText = 'DEL';
		btn.addEventListener('click', dispatchDeleteToDo);
		li.id = toDo.id;
		li.innerText = toDo.text;
		li.appendChild(btn); // appendChild는 자식태그를 갖는 메서드
		ul.appendChild(li);
	});
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
	store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
	// console.log(e.target.parentNode.id);
	const id = parseInt(e.target.parentNode.id); // parseInt를 하지 않으면 id값이 그냥 string으로 받아진다.
	store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = ''; // 입력값을 초기화 시켜주는 값
	dispatchAddToDo(toDo);
	// createToDo(toDo);
};

form.addEventListener('submit', onSubmit);
