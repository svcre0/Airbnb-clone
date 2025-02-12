import React from "react";
import Banner from "./Banner";
import './Home.css';
import Card from './Card';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

const Home = () => {
  return (
   <>
    <div className="home">
      <Header /> 
      <Banner />
      <div className="home-section">
        <Card
          src='https://a0.muscache.com/im/pictures/miso/Hosting-1018813871976866312/original/45f8eaac-bab6-4856-8198-28f5ea88a877.jpeg?im_w=720'
          title='South Africa'
          description='Durban '
          price='$90/night'
        />
        <Card
          src='https://a0.muscache.com/im/pictures/aa6f274a-761f-42e7-8c1f-1a6d1a778f5b.jpg?im_w=720'
          title='Apartment in USA'
          description=' New york '
          price='$100/night'
        />
        <Card
          src='https://a0.muscache.com/im/pictures/miso/Hosting-1099211161787834553/original/9ad5148c-f156-4093-9571-cc8a18048cfb.jpeg?im_w=720&im_format=avif'
          title='Apartment in Japan'
          description='Tokyo '
          price='$120/night'
        />
        <Card
          src='https://a0.muscache.com/im/pictures/miso/Hosting-1249696743221860832/original/e090aa15-b313-4180-a437-5b993a21d81c.jpeg?im_w=720&im_format=avif'
          title='Apartment in France'
          description=' Paris '
          price='$300/night'
        />
      </div>
    </div>
    <Footer />
  </>   
  );
};

export default Home;
