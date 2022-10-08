import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Buttons = ({ add, del, count }) => {

  return (
    <div>
      <button onClick={add} disabled={count==0?false:true}>add</button>
      <button onClick={del} disabled={count==6?false:true}>del</button>
    </div>
  )
}

export default Buttons