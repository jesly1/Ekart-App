import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addtowishlist } from '../Redux/slice/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/slice/cartSlice';
function Home() {
    const data=useFetch('https://dummyjson.com/products')
    const dispatch=useDispatch()
    console.log(data)
  return (
  <>
  <Row className='ms-5 me-5' style={{marginTop:"150px"}}>
    {
        data?.length>0?
        data.map((item)=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} height={'200px'}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.description.slice(0,50)}..
                </Card.Text>
                <div className='d-flex align-tems-center justify-content-between'>
                <Button variant="outline-danger" onClick={()=>dispatch(addtowishlist(item))}><i class="fa-solid fa-heart"></i></Button>
                <Button variant="outline-primary" onClick={()=>dispatch(addtocart(item))}><i class="fa-solid fa-cart-plus"></i></Button>
                
        
                </div>
        
              </Card.Body>
            </Card>
            </Col>

        )):
        <p className='text-danger'>Nothing to display</p>
    }
   
  </Row>
  </>
  )
}

export default Home