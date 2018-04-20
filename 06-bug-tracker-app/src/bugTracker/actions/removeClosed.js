import axios from 'axios';

export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let bugsToRemove = bugs.filter(bug => bug.isClosed);
		bugsToRemove.forEach(bug => {
			axios
			.delete(`http://localhost:4200/bugs/${bug.id}`)
			.then(response => dispatch({type : 'REMOVE', payload : bug}));
		})
		
	};
}