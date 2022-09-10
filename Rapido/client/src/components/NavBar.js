import React from 'react'
import { Navbar, Container, Button, Nav, Form, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './NavBar.css';




function NavBar() {

    let navigate = useNavigate();

    //logout user
    const userLogout = () => {
        localStorage.removeItem("pos-user");
        navigate("/")
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><b>Rapido</b></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                            <Nav.Link as={NavLink} to="bookaride">Book A Ride</Nav.Link>
                            <Nav.Link as={NavLink} to="postaride">Post A ride</Nav.Link>
                            <Nav.Link as={NavLink} to="myrides">My Rides</Nav.Link>
                            <Nav.Link as={NavLink} to="profile" >Profile </Nav.Link>

                        </Nav>
                        {isSuccess !== true ? (
                            <>
                                <Button className='m-2' variant="outline-primary" onClick={() => navigate('/register')}>Signin/Signup</Button>
                            </>) :
                            (
                                <Button className='m-2' variant="outline-primary" onClick={userLogout}>
                                    Logout
                                </Button>
                            )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar