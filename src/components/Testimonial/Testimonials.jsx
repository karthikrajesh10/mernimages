import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Traveling with this company was an absolute delight. From start to
          finish, everything was perfectly organized, making our vacation
          stress-free and unforgettable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="person1" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Travel Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        The guides were knowledgeable and friendly, and the destinations were breathtaking. I highly recommend their services to anyone looking to explore new places.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="person1" />
          <div>
            <h6 className="mb-0 mt-3">Sansa Cliyara</h6>
            <p>Tourist</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        Our family trip was amazing thanks to their meticulous planning and attention to detail. Every aspect of the journey was well taken care of.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="person1" />
          <div>
            <h6 className="mb-0 mt-3">Alan Walker</h6>
            <p>World Explorer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        I've never experienced such seamless travel arrangements before. Their expertise and dedication truly made a difference in our travel experience.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="person1" />
          <div>
            <h6 className="mb-0 mt-3">Michael Smith</h6>
            <p>Backpacker</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
