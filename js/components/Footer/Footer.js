import React from 'react';

export default class Footer extends React.Component {
	render(){
		return (
			<div style={Object.assign({borderRadius: "0 0 11px 10px"},this.props.commonCSS)}>
				<div style={{padding : "20px"}}>Built Using React.JS</div>
			</div>
		);
	}

}