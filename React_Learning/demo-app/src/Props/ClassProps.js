import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {

    const {Data} = this.props
    const {type, size} = Data
    return (
      <h2>This is a {size} {type} apple</h2>
    )
  }
}

export default ClassProps