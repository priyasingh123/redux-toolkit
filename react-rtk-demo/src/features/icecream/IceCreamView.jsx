import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export default function IceCreamView() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIcecreams)
  const dispatch = useDispatch()
  const [iceCreamValue, setValue] = useState(0)
  const onChangeEvent = (e) => {
    setValue (parseInt (e.target.value))
  }
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams} </h2>
      <button className="btn btn-primary mx-1" onClick={() => dispatch (ordered())}>Order Ice Cream</button>
      <input type='number' value={iceCreamValue} id='iceCreamValue' onChange={onChangeEvent}/>
      <button className="btn btn-primary mx-1" onClick={() => dispatch (restocked(iceCreamValue))}>Restock Ice Cream</button>
    </div>
  )
}
