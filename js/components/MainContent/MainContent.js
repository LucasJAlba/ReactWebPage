import React from 'react';

export default class MainContent extends React.Component {
	render(){
		let styles = {
			main : {
				width : window.innerWidth - 250 - 35+"px",
				//border : "1px solid green",
				float : "right",
				height:this.props.height,
				background: "-webkit-gradient(linear, right top, right bottom, from(#a00), to(#600))",
				WebkitBoxShadow: this.props.commonCSS.inletRule,
				boxShadow: this.props.commonCSS.inletRule
			}
		}
		return (
			<div style={styles.main}></div>
		);
	}

}