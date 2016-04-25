import React from 'react';
import LangSelect from './LanguageSelector/LanguageSelector';

require('./Header.css');
export default class Header extends React.Component {
	render(){
		let styles = {
			header : {
				background:this.props.commonCSS.background,
				color: this.props.commonCSS.color
			}
		}
		return (
			<div class="header" style={styles.header}>
				<div class="title">{this.props.title}</div>
				<div class="subtitle">{this.props.subtitle}</div>
				<LangSelect langOpts={this.props.langOpts} langFn={this.props.langFn}/>
			</div>
		);
	}

}