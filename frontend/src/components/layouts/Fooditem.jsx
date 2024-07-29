import React from 'react'
import { LiaRupeeSignSolid } from 'react-icons/lia';


export default function Fooditem() {
    return (
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className="card p-3 rounded">
                <img src="https://b.zmtcdn.com/data/dish_photos/653/73d8715d9d4017e7811f81e73d28b653.jpg?fit=around|130:130&crop=130:130;*,*" alt="" className="card-img-top mx-auto" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Dominos Pizza</h5>
                    <p className='fooditem_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur adipisci distinctio fugiat deleniti omnis quaerat alias inventore, placeat in maxime nobis blanditiis itaque numquam nisi quos aliquid incidunt ratione.</p>
                    <p className="card-text">
                        <LiaRupeeSignSolid/>  180
                    </p>
                    <button
                        type="button"
                        id="cart_btn"
                        className="btn btn-primary d-inline ml-4"
                    >
                        Add to Cart
                    </button>
                    <br />
                    <p>
                        Status: {""}
                        <span
                            id="stock_status"
                            className={10 > 5 ? "greenColor" : "redColor"}
                        >
                            {10 > 5 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}
