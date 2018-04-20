import React, { Component } from 'react';

import { BugStats } from './views/BugStats';
import { BugList } from './views/BugList';
import { BugEdit } from './views/BugEdit';
import BugSort from './views/BugSort';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './actions';

class BugTracker extends Component{
	
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { model : bugs, addNew, toggle, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs}></BugStats>
				<BugSort></BugSort>
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}}></BugList>
			</div>
		)
	}
}

function mapDispatchToBugTrackerProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);	
}

function mapStateToBugTrackerProps(state){
	return { model : state.bugsData }
}
export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker);
