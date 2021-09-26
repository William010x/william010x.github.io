import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="shadow">
                <Container style={{paddingLeft: "15px", paddingRight: "15px"}}>
                    <Nav className="w-100"> {/* className="w-100 nav-justified" */}
                        <Nav.Item>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#home">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 250})} exact to="/#about">
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#skills">
                                Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#jobs">
                                Experience
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={HashLink} scroll={el => window.scroll({behavior: "smooth", top: el.offsetTop - 50})} exact to="/#projects">
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="justify-content-end">
                        <a href="https://www.github.com/william010x" className="github" target="_blank" rel="noreferrer">
                            <Image src={Github} className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/william-san" className="linkedin" target="_blank" rel="noreferrer">
                            <Image src={LinkedIn} className="icon"/>
                        </a>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;