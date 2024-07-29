import React from 'react'
import Fooditem from './Fooditem'

export default function Menu() {
  return (
    <div>
      <div>
        <h2>Chaats</h2>
        <hr/>
        <div className="row">
            <Fooditem/>
            <Fooditem/>
            <Fooditem/>
            <Fooditem/>
        </div>
      </div>
      <div>
        <h2>Main Course</h2>
        <hr/>
        <div className="row">
            <Fooditem/>
            <Fooditem/>
            <Fooditem/>
            <Fooditem/>
        </div>
      </div>
    </div>
  )
}
