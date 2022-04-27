import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"

function navbar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height:"70px"}} >
    <Container>
    <Navbar.Brand href="/">Characters</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className='navbar' href="/quotes">Quotes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default navbar