import { useEffect, useState } from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import yt from "../../Resources/Images/yt.svg";

const Navbars = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    searchInput.length > 2 ? navigate(`/${searchInput}`) : navigate("/");
  }, [searchInput]);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={yt}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            YouTube Clone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Videos"
                  className="me-2"
                  aria-label="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
