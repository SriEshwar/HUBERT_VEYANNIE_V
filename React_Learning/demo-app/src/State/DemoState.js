import React from 'react'
import { useState } from 'react'
function DemoState() {
    // let variable = 'changes'

    const [variable, setVariable] = useState('changes')

  return (
    <div>
        <h1>Something {variable} here evertime </h1>
        <button onClick={()=>{setVariable('Change')}}>Click me</button>
    </div>
  )
}

export default DemoState