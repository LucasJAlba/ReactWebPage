import React from 'react';

require('./LinkList.css');

export default class SplitDragWindow extends React.Component {
	render(){
		var styles = {
			listStyle : {
				color: this.props.commonCSS.color,
				marginLeft: this.props.commonCSS.captionWidth
			}
		};
		var links = this.props.links;
		return (
			<ul class="listStyle" style={styles.listStyle}>
				{links.map(function(rt){ return <li>{rt.link}</li>;})}
			</ul>
		);
	}
}