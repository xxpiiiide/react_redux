import { createStore } from 'redux'; // store는 data(state)를 넣는 곳

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer는 data를 modify 하는 함수이다.
const countModifier = (count = 0, action) => {
	console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
	return count;
};

const countStore = createStore(countModifier); // createeStore는 reducer를 받는 함수여야한다.

countStore.dispatch({type: "ADD"}) // store의 dispatch를 이용하여 action을 보낼 수 있다. 파라미터는 객체여야한다.
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "MINUS"})


console.log(countStore.getState())