import React from 'react';

export default class CaptionContainer extends React.Component {
	render(){
		let styles = {
			containerCaption : {
			    padding : "4px",
		        position : "absolute",
		        width : parseInt(this.props.height) - parseInt(this.props.commonCSS.captionWidth) + 13+"px",
		        color : this.props.commonCSS.color,
		        transformOrigin: "top left",
		        transform : "rotate(90Deg)",
		        left: this.props.commonCSS.captionWidth,
		        padding: "4px",
		        background: this.props.commonCSS.background,
		        height: "13px",
		        overflow : "hidden"
			}
		};
		return (
			<div style={styles.containerCaption}>{this.props.text}</div>
		);
	}

}