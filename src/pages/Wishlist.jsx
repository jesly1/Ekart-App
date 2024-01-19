import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removefromwishlist } from '../Redux/slice/wishlistSlice';
import { addtocart } from '../Redux/slice/cartSlice';

function Wishlist() {
    const wishlistitems=useSelector((state)=>state.wishlistReducer)
    const dispatch=useDispatch()
    const handlewishlistitem = (item)=>{
      dispatch(addtocart(item))
      dispatch(removefromwishlist(item.id))
    }
    console.log("1111111111111111111")
    console.log(wishlistitems)
  return (
   
   <>
   <button style={{marginTop:"150px",marginLeft:"50px"}} className='btn btn-success'>
    <Link to={'/'} className='text-white text-decoration-none '> <i class="fa fa-arrow-left me-2" aria-hidden="true" ></i>
Back to Home
    </Link>
   </button>
   <Row className='ms-5 me-5 mt-5' >
    {
        wishlistitems?.length>0?
        wishlistitems.map((item)=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} height={'200px'}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.description.slice(0,50)}..
                </Card.Text>
                <div className='d-flex align-tems-center justify-content-between'>
                <Button variant="outline-danger" onClick={()=>dispatch(removefromwishlist(item.id))}><i class="fa fa-trash" aria-hidden="true"></i></Button>
                <Button variant="outline-primary" onClick={()=> handlewishlistitem(item)}><i class="fa-solid fa-cart-plus"></i></Button>
        
                </div>
        
              </Card.Body>
            </Card>
            </Col>
        )):
        <p className='text-danger'>No items in wishlist</p>
    }
   </Row>
   </>
  )
}

export default Wishlist