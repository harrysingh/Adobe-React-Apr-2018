var SM = (function(){

	var _currentState = undefined,
		_reducer = undefined,
		_init_action = { type : '@@INIT_ACTION' };

	function getState(){
		return _currentState;
	}

	function subscribe(listener){
		if (typeof listener === 'function')
			_listeners.push(listener);
	}

	function dispatch(action){
		let newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function triggerChange(){
		_listeners.forEach(listener => listener());
	}

	function createStore(reducer){

		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);

		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}
	return {
		createStore : createStore
	};
	
})();