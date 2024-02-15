import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../Assets/imageP.png";
import { FiArrowRight } from "react-icons/fi";
import Modal from "./About";
import { Link } from 'react-router-dom';
const Home = () => {
    
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Little Sparks, Big Dreams: Fostering Children's Mental Wellbeing
          </h1>
          <p className="primary-text">
          We're here for children mental health. Our caring team helps you understand their feelings and grow stronger. Together, we build happy minds.
          </p>
          <Link to="/signin" className="link-button"><button className="secondary-button">Get Started Now<FiArrowRight />{" "}</button></Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" class="image-home"/>
        </div>
      </div>
      <br></br>   <br></br>   <br></br>
      <Modal/>
    </div>
  );
};

export default Home;