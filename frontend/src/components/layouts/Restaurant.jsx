import React from 'react'

export default function Restaurant(restaurant, onClick) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      <div className="card p-3 rounded">
        <img src="https://b.zmtcdn.com/data/pictures/chains/5/65155/a3f876979c7b1a123ff8d0548d774cb1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="Dominos" />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">Dominos Pizza</h5>
            <p className="rest_address">123, Street, Place, City-000000, State</p>
            <div className="rating-outer">
                <div className="rating-inner"></div>
                <span id="no_of_reviews">(140 reviews)</span>
            </div>
        </div>
      </div>
    </div>
  )
}
