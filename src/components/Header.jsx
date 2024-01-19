import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Header() {
    const wishlistarray = useSelector((state) => state.wishlistReducer)
    const cartlistarray = useSelector((state) => state.cartReducer)
    console.log("wishlist array/header  ................", wishlistarray)
    return (
        <>
            <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{ zIndex: "1" }}>
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand href="#home"> <img src="https://www.pngplay.com/wp-content/uploads/1/Shopping-Cart-PNG-Image.png" alt="" height={'40px'} className='me-4 mb-3' />Ekart</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link className='btn border rounded me-3' style={{ width: "100px" }} ><Link to={'/wishlist'} style={{ color: "white", textDecoration: "none" }}>Wishlist<Badge bg="secondary">{wishlistarray.length}</Badge> </Link> </Nav.Link>
                            <Nav.Link className='btn border rounded ' style={{ width: "100px" }}><Link to={'/cart'} style={{ color: "white", textDecoration: "none" }}>Cart  <Badge bg="secondary">{cartlistarray.length}</Badge></Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header