import { createStore } from 'redux'; // store는 data(state)를 넣는 곳

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer는 data를 modify 하는 함수이다.
const countModifier = (count = 0) => {
	// ... modify state
	return count;
};

const countStore = createStore(countModifier); // createeStore는 reducer를 받는 함수여야한다.

console.log(countStore.getState())