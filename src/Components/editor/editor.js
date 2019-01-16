import React, { Component } from "react";

import './editor.css'

class Editor extends Component {

  state = {
    window: false,
    style: {}
  }

  expand = () => {
    if(this.state.window) {
      this.setState({
        window: false,
        style: {}
      })
    } else {
      this.setState({
        window: true,
        style: {
          width: '800px',
          height: '600px'
        }
      })
    }
  }


  render() {
    const { handleChange, input } = this.props
    return (
      <div className="editorBox" style={this.state.style}>
        <div className="editorHeader">Editor <i className="fas fa-expand-arrows-alt" onClick={this.expand}></i></div>
        <textarea id="editor" onChange={handleChange} style={this.state.style} value={input}></textarea>
      </div>
    );
  }
}

export default Editor;
