function bugsReducer(currentState = [], action){
	if (action.type === 'LOADED'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'UPDATE'){
		return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
	}
	if (action.type === 'REMOVE'){
		return currentState.filter(bug => bug.id !== action.payload.id);
	}
	return currentState;
	
}

export default bugsReducer;