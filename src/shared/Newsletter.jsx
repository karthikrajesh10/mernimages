import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Stay Informed with our Travel Updates</h2>

              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>

              <p>
                Stay updated with the latest travel tips, destination guides,
                and exclusive offers. Join our community of avid travelers and
                make your journeys unforgettable. Subscribe now to embark on
                your next adventure with confidence.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="maleTourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
