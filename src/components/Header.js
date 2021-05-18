import React from "react";
import { Nav, Navbar } from "react-bootstrap";
function Header(props) {
  return (
    <div className="header">
      <Navbar
        style={{ zIndex: 20 }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Brand style={{ fontSize: "100%" }}>
          Welcome {props.number}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./profile" active>
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                props.signOut();
              }}
            >
              Sign Out !
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
