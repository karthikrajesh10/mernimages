import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/srilanka/logo2.png';
import "./footer.css";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="text">
            Stay connected with us to receive the latest updates on destinations, offers, and tips.
            </p>
            <div className="social_links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-facebook-circle-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>

            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Kochi ,Kerala</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">projecty@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                  <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+91 9457545486</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-2'>
            <p className="copyright">Copyright {year}, design and develop by project members. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
