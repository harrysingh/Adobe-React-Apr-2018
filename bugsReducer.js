function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug= {
			name : action.payload,
			isClosed : false
		}
		return [...currentState, newBug];
	}
	return currentState;
}