import React from 'react';
import SplitDragWindow from './SplitDragWindow/SplitDragWindow'; // Both at the same time

require("./Navigation.css")
export default class Navigation extends React.Component {
	render(){
		var styles = {
			container : {
				height:this.props.height,
				borderRight : "1px solid "+this.props.commonCSS.background 
			}
		};
		return (
			<div class="navigationContainer" style={styles.container}>	
				<SplitDragWindow strings={this.props.strings} commonCSS={this.props.commonCSS} links={this.props.links} width="100%" height={this.props.height}/>
			</div>
		);
	}

}