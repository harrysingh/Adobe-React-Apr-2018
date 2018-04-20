import axios from 'axios';

export function addNew(bugName){
	return function(dispatch){
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date(),
			desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eius, possimus. Ipsam facere laboriosam nesciunt consectetur eius, soluta fuga rerum ex quidem inventore esse corrupti explicabo blanditiis, quasi, voluptatum consequuntur!'
		};
		axios
			.post('http://localhost:4200/bugs', newBugData)
			.then(response => response.data)
			.then(newBug => dispatch({type : 'ADD_NEW', payload : newBug}));
	};
}
