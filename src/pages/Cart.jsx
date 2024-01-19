import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { removefromcart } from '../Redux/slice/cartSlice';

function Cart() {
  const cartitems = useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()

  return (
   <>
     <button style={{marginTop:"150px",marginLeft:"50px"}} className='btn btn-success'>
    <Link to={'/'} className='text-white text-decoration-none '> <i class="fa fa-arrow-left me-2" aria-hidden="true" ></i>
Back to Home
    </Link>
   </button>
   <div className='row w-100'>
    {
      cartitems?.length>0?
      <div className='col-lg-6 col-md-6 m-5'>
      <table className='table shadow border'>
<thead>
  <tr>
    <th>#</th>
    <th>Product</th>
    <th>Image</th>
    <th>Price</th>
    <th>Actions</th>
    
  </tr>
</thead>
<tbody>
  {
    cartitems?.map((item,index)=>(
      <tr>
    <td>{index+1}</td>
    <td>{item.title}</td>
    <td   ><img src={item.thumbnail}  height={"50px"} width={"50px"}  alt="" /></td>
    <td>&#8377;{item.price}</td>
    <td><Button variant="outline-danger" onClick={()=>dispatch(removefromcart(item.id))}><i class="fa fa-trash" aria-hidden="true"></i></Button></td>
  </tr>

    ))
  }
  
</tbody>
      </table>

    </div>:
    <p className='text-danger'>No items in cart</p>
    }
    

   </div>
   </>
  )
}

export default Cart