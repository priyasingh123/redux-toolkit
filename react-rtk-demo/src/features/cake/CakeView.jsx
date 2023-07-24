import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from './cakeSlice'

export default function CakeView() {
  //useSelector takes function(called selector function) as parameter and returns a value 
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes)

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button className="btn btn-primary mx-1" onClick={()=>dispatch (ordered())}>Order cake</button>
      <button className="btn btn-primary mx-1" onClick={()=>dispatch (restocked(2))}>Restock cake</button>
    </div>
  )
}
