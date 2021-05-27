import React from 'react';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

function Detail({ toDo, onBtnClick }) {
	// const id = useParams(); // useParams를 이용하는 방법도 있다.
	// console.log('id >>>', id);

	return (
		<> 
			<h1>{toDo?.text}</h1> 
			<h5>Created at: {toDo?.id}</h5>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	// console.log(ownProps);
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
