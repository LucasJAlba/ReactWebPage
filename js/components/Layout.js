import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import MainContent from './MainContent/MainContent';

import en from '../languages/En/strings';
import sp from '../languages/Sp/strings';
import fr from '../languages/Fr/strings';


export default class Layout extends React.Component {

	constructor(){
		super();
		this.state = {
			lang : en,
			bodyHeight : window.innerHeight - 172+"px"
		};
		this.langOpts = [{text:'English',id:'en'},{text:'French',id:'fr'},{text:'Spanish',id:'sp'}];
		this.styles = {
			commonCSS : {
				color: "#E6E6E6",
				background : "#222",
				bodyHeight: this.state.bodyHeight,
				captionWidth : "21px",
				inletRule : "inset 0 0 7px 1px #222"
			}
		};
	}
	handleResize (e) 		{this.setState({bodyHeight: window.innerHeight -172+"px"});}
	componentDidMount () 	{window.addEventListener('resize', this.handleResize.bind(this));}
	componentWillUnmount ()	{window.removeEventListener('resize', this.handleResize.bind(this));}
	setLang(lang){

		//this.setState({lang:fr})
		switch(lang){
			case 'fr':
				this.setState({lang:fr})
				break;
			case 'sp':
				this.setState({lang:sp})
				break;
			default:
				this.setState({lang:en})
		}
	}
	render(){
		return (
			<div>
				<Header title={this.state.lang.title} commonCSS={this.styles.commonCSS} subtitle={this.state.lang.greeting} langOpts={this.langOpts} langFn={this.setLang.bind(this)} />
				<div style={{width:"100%",height:this.state.bodyHeight,background: this.styles.commonCSS.background}}>
					<Navigation strings={this.state.lang} height={this.state.bodyHeight} commonCSS={this.styles.commonCSS} links={this.props.links}/>
					<MainContent commonCSS={this.styles.commonCSS} height={this.state.bodyHeight}/>
				</div>
				<Footer title={this.state.lang.title} commonCSS={this.styles.commonCSS}/>
			</div>
		);
	}

}