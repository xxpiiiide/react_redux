import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, onBtnClick }) {
	return (
		<li>
			{text} <button onClick={onBtnClick}>DEL</button>
		</li>
	);
}

function mapDispatchToProps(dispatch, ownProps) {
	//console.log(ownProps); // text와 id값을 받아온다.
	return {
		onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)), // ToDo의 props와 redux-store의 dispatch의 조합으로 함수를 만들었다.
	};
}

export default connect(null, mapDispatchToProps)(ToDo);
