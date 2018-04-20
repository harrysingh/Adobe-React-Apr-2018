import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var spinnerActionCreators = {
	increment(){
		return { type : 'INCREMENT' };
	},
	decrement(){
		return { type : 'DECREMENT' };
	}
};

let Spinner = ({ value, increment, decrement }) => (
	<div>
		<input type="button" value="DECREMENT" onClick={decrement}/>
		<span>[{value}]</span>
		<input type="button" value="INCREMENT" onClick={increment}/>
	</div>
);

export default connect(
	(state) => ({value : state.spinnerData}),
	(dispatch) => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);