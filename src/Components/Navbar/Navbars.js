import { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import yt from "../../Resources/Images/yt.svg";

const Navbars = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  useEffect(() => {
    search.length > 2 && navigate(`/${search}`);
  }, [search]);
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
