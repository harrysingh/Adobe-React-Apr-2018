import axios from 'axios';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };			
		axios
			.put(`http://localhost:4200/bugs/${bugToToggle.id}`, toggledBugData)
			.then(response => response.data)
			.then(toggledBug => dispatch({type : 'UPDATE', payload : toggledBug}));
	};
}
