import React from 'react';
import _Draggable from 'react-draggable';
export default class Draggable extends React.Component {
	constructor(){
		super();
		this.state = {
	        deltaPosition: {
	          x: 210, y: 0
	        },
          hover:false
    	};
	}
	handleDrag (e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.props.onChange(this.state.deltaPosition)
  }
  mouseOver() {this.setState({hover: true });}
  mouseOut()  {
    this.setState({hover: false});
  }
	
	render(){
		let styles = {
			draggable : {
				position : "absolute",
				right : 0,
				top : 0,
		    background : this.props.commonCSS.background,
		    height : this.props.height || "250px",
		    width : "10px",
        color : this.props.commonCSS.color,
        zIndex : "1000"
			},
      DraggableHover : {
        boxShadow : "1px 0px 6px 1px rgba(0,0,0,0.14), -1px 0px 6px 1px rgba(0,0,0,0.14)",
        cursor : "col-resize",
        background : "#383838",
        width : "5px"
      },
      draggableParent : {
        marginLeft:this.props.commonCSS.captionWidth,
        position: "relative"
      }
		};
    const deltaPosition = this.state.deltaPosition;    
    return (
        <div style={styles.draggableParent}>
          <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)} >
      			<_Draggable bounds="parent" axis="x" onDrag={this.handleDrag.bind(this)}>
      				<div style={Object.assign(this.state.hover?styles.DraggableHover : {}, styles.draggable)}></div>	
      			</_Draggable>
          </div>
        </div>
		);
	}

}