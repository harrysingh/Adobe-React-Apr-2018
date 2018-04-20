import React, { Component } from 'react';

export class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={() => toggle(bug)}>
					{bug.name}
				</span>
				<div>[ {bug.isClosed.toString()} ]</div>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}