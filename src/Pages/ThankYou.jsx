import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import '../styles/thank-you.css'

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div className="thank_you">
                <span><i class="ri-checkbox-circle-line"></i></span>
                <h1 className="mb-3 fw-semibold">Thank You</h1>
                <h3 className="mb-4">Your tour is booked.</h3>
                <Button className='btn primary_btn'><Link to='/home'>Back to Home</Link></Button>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
