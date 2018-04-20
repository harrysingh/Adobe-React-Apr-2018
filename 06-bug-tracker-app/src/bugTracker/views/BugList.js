import React, { Component} from 'react';
import { BugItem } from './BugItem';

export class BugList extends Component{
	render(){
		let { bugs, toggle, removeClosed } = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem key={index} bug={bug} toggle={toggle}></BugItem>
		));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => removeClosed()} />
			</section>
		)
	}
}