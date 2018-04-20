import axios from 'axios';

export function load(){
	return function(dispatch){
		axios
			.get('http://localhost:4200/bugs')
			.then(response => response.data)
			.then(bugs => dispatch({type : 'LOADED', payload : bugs}));
	};
}
