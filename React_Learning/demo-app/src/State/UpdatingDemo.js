import React, { Component } from 'react'

export default class UpdatingDemo extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'Mika'
        }
    }
    ChangeName(event){
        this.setState({
            name:'Mikalayah'
        })
    }

  render() {
    return (
      <div>
        <h2>Welcoming {this.state.name}</h2>
        <button onClick={(event)=>this.ChangeName(event)}>Update Name</button>
      </div>
    )
  }
  getSnapshotBeforeUpdate(preProps, preState){
    console.log("Snapshot taken before update", preState.name);
    return null;
  }

  componentDidMount(){
    console.log("Component is updated in the DOM")
  }

  shouldComponentUpdate(nextProps, nxtState){
    if(nxtState.name == this.state.name){
      return false
    }
    return true
  }
}
