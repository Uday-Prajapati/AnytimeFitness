import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Home.css';
import gymBg from '../assets/gym-bg.jpg';
import aboutBg from '../assets/about-bg.jpg';
import testimonialsBg from '../assets/testimonials-bg.png';
import cbumImg from '../assets/cbum.jpg';
import arnoldImg from '../assets/arnold.jpg';
import theRockImg from '../assets/theRock.jpg';
import jayCutlerImg from '../assets/jayCutler.jpg';
import louFerrignoImg from '../assets/louFerrigno.jpg';
import gregPlittImg from '../assets/gregPlitt.jpg';
import mikeOHearnImg from '../assets/mikeOHearn.jpg';
import ronnieColemanImg from '../assets/ronnieColeman.jpg';

const Home = () => {
  const homeStyle = {
    backgroundImage: `url(${gymBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
  };

  const aboutStyle = {
    backgroundImage: `url(${aboutBg})`,
  };

  const testimonialsStyle = {
    backgroundImage: `url(${testimonialsBg})`,
  };

  return (
    <div>
      {/* Splash Section */}
      <section className="home-container" style={homeStyle}>
        <div className="content">
          <h1 className="fade-in">Anytime Fitness</h1>
          <p className="fade-up">A Comprehensive Gym & Fitness Website</p>
        </div>
      </section>

      {/* About Anytime Fitness Section */}
      <section className="about-section" style={aboutStyle}>
        <div className="container text-center py-5 zoom-in">
          <h2>About Anytime Fitness</h2>
          <p>
          <n>"At Anytime Fitness, we provide everything you need to transform your body and mind without the need for a personal trainer.
          Our website is specially built for people who are ready to make a change but can only afford the gym, not the trainer.
          Explore a range of features designed to help you take charge of your fitness journey:"</n>
          <li>Workout Plans: Access a variety of exercises and follow routines to match your fitness goals.</li>
          <li>Personalized Diet: Get customized meal plans—veg, non-veg, and supplements included.</li>
          <li>Book Nearby Gyms: Find and book gyms near you effortlessly.</li>
          <li>Community Challenges: Join exciting challenges and compete with others to stay motivated.</li>
          </p>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section className="testimonials-section" style={testimonialsStyle}>
        <div className="container text-center py-5">
          <h2 className="flip-in-x">Inspire & Empower</h2>
          <Carousel>
          <Carousel.Item className="testimonial-slide-3d">
          <div className="testimonial-slide">
            <blockquote>
              <p>"Consistency is key. You have to show up every day." - Chris Bumstead</p>
            </blockquote>
            <img src={cbumImg} alt="Chris Bumstead" className="testimonial-img" />
          </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"The worst thing I can be is the same as everybody else. I hate that." - Arnold Schwarzenegger</p>
              </blockquote>
              <img src={arnoldImg} alt="Arnold Schwarzenegger" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"Success at anything will always come down to this: focus and effort. And we control both." - Dwayne 'The Rock' Johnson</p>
              </blockquote>
              <img src={theRockImg} alt="Dwayne Johnson" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"The mind is everything. What you think you become." - Jay Cutler</p>
              </blockquote>
              <img src={jayCutlerImg} alt="Jay Cutler" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"There is no shortcut. There are no easy ways. There is only hard work." - Lou Ferrigno</p>
              </blockquote>
              <img src={louFerrignoImg} alt="Lou Ferrigno" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible." - Greg Plitt</p>
              </blockquote>
              <img src={gregPlittImg} alt="Greg Plitt" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"You are the creator of your own universe." - Mike O'Hearn</p>
              </blockquote>
              <img src={mikeOHearnImg} alt="Mike O'Hearn" className="testimonial-img" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="testimonial-slide-3d">
            <div className="testimonial-slide">
              <blockquote>
                <p>"Yeah buddy! Lightweight baby!" - Ronnie Coleman</p>
              </blockquote>
              <img src={ronnieColemanImg} alt="Ronnie Coleman" className="testimonial-img" />
            </div>
          </Carousel.Item>
        </Carousel>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section bg-dark text-light">
        <div className="container text-center py-5 rotate-in-down-right">
          <h2>Follow Us</h2>
          <div className="d-flex justify-content-center">
            <a href="https://instagram.com" className="mx-3 text-light">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://facebook.com" className="mx-3 text-light">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" className="mx-3 text-light">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://web.whatsapp.com/" className="mx-3 text-light">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
