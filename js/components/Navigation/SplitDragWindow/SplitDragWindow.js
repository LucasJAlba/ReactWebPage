import React from 'react';
import CaptionContainer from './CaptionContainer/CaptionContainer';
import Draggable from './DraggableBlock/DraggableBlock';
import LinkList from './LinkList/LinkList';

require('./SplitDragWindow.css');

export default class SplitDragWindow extends React.Component {
	constructor(){
		super();
		this.state = {listWidth : "232px",remainder : "0"};
	}
	changeFn(e){
		let captionText = e.x > 205 ? this.props.strings.captionBar.all : e.x < -5 ? this.props.strings.captionBar.none : this.props.strings.captionBar.some;
		this.setState({listWidth: `${e.x}+20px`,remainder:`${220-e.x}px`, text:captionText })
	}
   	
	render(){
		var styles = {
			leftBlock : {
				width : this.state.listWidth,
			},
			commonBlock :{
				height: this.props.height,
				boxShadow: this.props.commonCSS.inletRule,
			},
			rightBlock : {
				width:this.state.remainder,
				right: "-"+this.props.commonCSS.captionWidth,
			}
		};

		var links = this.props.links;
		return (
			<div>
				<CaptionContainer commonCSS={this.props.commonCSS} height={this.props.height} text={this.state.text || this.props.strings.captionBar.all}/>
          		<div style={{width: this.props.width}}>
					<div class="leftBlock commonBlock" style={Object.assign({},styles.commonBlock,styles.leftBlock)}>
						<LinkList links={this.props.links} commonCSS={this.props.commonCSS}/>
					</div>
					<Draggable width="2px" commonCSS={this.props.commonCSS} height={this.props.height} onChange={this.changeFn.bind(this)} />
					<div class="rightBlock commonBlock" style={Object.assign(styles.commonBlock,styles.rightBlock) }>
						<LinkList links={this.props.links} commonCSS={this.props.commonCSS}/>
					</div>
				</div>
			</div>
		);
	}
}