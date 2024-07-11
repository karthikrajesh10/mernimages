import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg1 from "../assets/images/srilanka/Img5.jpg";
import heroImg2 from "../assets/images/srilanka/Img6.jpg";
import heroVideo from "../assets/images/srilanka/video2.mp4";
import worldImg from "../assets/images/srilanka/logo4.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import experience from "../assets/images/experience.png";
import MasonryImageGallery from "../components/image-gallery/MasonryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Travel Sri Lanka"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Explore the Beauty and Mysteries of{" "}
                  <span className="highlight">Sri Lanka</span>
                </h1>
                <p>
                  Journey through Sri Lanka’s stunning landscapes, rich culture,
                  and breathtaking <br />
                  scenery. Explore ancient temples, pristine beaches, and lush
                  tea plantations. Discover vibrant cities, savor delicious
                  cuisine, and enjoy the warm hospitality. Each adventure <br />
                  in Sri Lanka promises unforgettable experiences and cherished
                  memories. <br />
                  Let the beauty of Sri Lanka inspire you.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box hero_video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">Best Services for Your Journey</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section className="section-center">
        <Container>
          <Row className="section-content">
            <Col lg="12" className="mb-5">
              <div className="subtitle-container">
                <Subtitle subtitle={"Explore"} />
              </div>
              <h2 className="featured_tour_title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experiencee <br /> we will serve you
                </h2>
                <p>
                  Discover unforgettable journeys with us. Our expertise 
                  ensuresevery moment is perfect. From hidden gems to
                  iconic landmarks, we offer the best the world has.
                  <br />
                  Trust us to make your travel dreams real.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experience} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
