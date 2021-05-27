import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, onBtnClick, id }) {
	return (
		<li>
			<Link to={`/${id}`}>{text}</Link>
			<button onClick={onBtnClick}>DEL</button>
		</li>
	);
}

function mapDispatchToProps(dispatch, ownProps) {
	//console.log(ownProps); // text와 id값을 받아온다.
	return {
		onBtnClick: () => dispatch(remove(ownProps.id)), // ToDo의 props와 redux-store의 dispatch의 조합으로 함수를 만들었다.
	};
}

export default connect(null, mapDispatchToProps)(ToDo);
