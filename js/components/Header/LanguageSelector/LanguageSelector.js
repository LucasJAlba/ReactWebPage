import React from 'react';
require("./LanguageSelector.css");
export default class LanguageSelector extends React.Component {
	handleChange(e){
		this.props.langFn(e.target.value)
	}
	render(){
		let options = this.props.langOpts;
		return (
			<div class="languageSelector">
				<select onChange={this.handleChange.bind(this)}>
					{options.map(result => <option key={result.id} value={result.id}>{result.text}</option>)}
				</select>
			</div>
		);
	}

}