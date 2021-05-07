import { createStore } from 'redux'; // store는 data(state)를 넣는 곳

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer는 data를 modify 하는 함수이다.
const countModifier = (count = 0, action) => {
	// if (action.type === 'ADD') {
	// 	return count + 1;
	// } else if (action.type === 'MINUS') {
	// 	return count - 1;
	// } else {
	// 	return count;
	// }
	// if와 else 말고 switch를 써보도록 해볼 것

	switch (action.type) {
		case ADD:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier); // createeStore는 reducer를 받는 함수여야한다.

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // subscribe는 store 안에 있는 변화들을 알 수 있게 해줍니다.

const handleAdd = () => {
	countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
	countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
