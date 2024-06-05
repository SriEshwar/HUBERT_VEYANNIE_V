import React, { Component } from 'react'
import './counter.css'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleMouseOver = () => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      };
  render() {
    return (

     
      <div class='Text' onMouseOver={this.handleMouseOver}>
        Counter APP ({this.state.count})
      </div>


    )
  }
}

export default Counter