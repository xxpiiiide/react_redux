import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
	const [text, setText] = useState('');
	function onChange(e) {
		setText(e.target.value);
	}
	function onSubmit(e) {
		e.preventDefault();
		console.log(text);
		setText('');
		addToDo(text);
	}
	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			{/* <ul>{JSON.stringify(toDos)}</ul> */}
			<ul>
				{toDos.map((toDo) => (
					<ToDo {...toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
}

// 그냥 function을 만들어서 connect를 사용하는 것이다.
// Redux state로부터 home(component)에 prop으로써 전달한다.
function mapStateToProps(state) {
	// console.log(state, ownProps);
	return { toDos: state };
}

function mapDispatchToProps(dispatch) {
	//console.log(dispatch);
	return {
		addToDo: (text) => dispatch(actionCreators.addToDo(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// getCurrentState를 이용하여 store로부터 state를 가져다 줄것이다.(mapStateToProps는 함수로써 Redux Store로 부터 온것이다.)
// connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다.
// mapDispatchToProps만
