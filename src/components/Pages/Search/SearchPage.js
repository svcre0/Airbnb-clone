import React from 'react';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import { Button } from '@mui/material';

function SearchPage() {
  const locations = [
    {
      _id: 1,
      name: "Johannesburg",
      title: "1 Bedroom Apartment",
      description: "A beautiful place to relax and enjoy nature.",
      ratings: 4.5,
      price: "$100 / night",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1018813871976866312/original/45f8eaac-bab6-4856-8198-28f5ea88a877.jpeg?im_w=720"
      ]
    },
    {
      _id: 2,
      name: "Durban",
      title: "Cozy Retreat",
      description: "A cozy retreat in the mountains with stunning views.",
      ratings: 4.7,
      price: "$120 / night ",
      images: [
        "https://a0.muscache.com/im/pictures/aa6f274a-761f-42e7-8c1f-1a6d1a778f5b.jpg?im_w=720"
      ]
    },
    {
      _id: 3,
      name: "Cape town",
      title: "Sunny Beach House",
      description: "A sunny beach house perfect for a relaxing vacation.",
      ratings: 4.9,
      price: "$150 / night ",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1099211161787834553/original/9ad5148c-f156-4093-9571-cc8a18048cfb.jpeg?im_w=720&im_format=avif"
      ]
    },
    {
      _id: 4,
      name: "Mpumalanga",
      title: "Mountain Escape",
      description: "Escape to the mountains and enjoy peace and quiet.",
      ratings: 4.8,
      price: "$110 /night",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-1249696743221860832/original/e090aa15-b313-4180-a437-5b993a21d81c.jpeg?im_w=720&im_format=avif"
      ]
    }
  ];

  return (
    <>
      <Link to='/'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RtiAMKTwBe7WLLasZ1w7M7W9LD3PQF_p4g&s" className="header-logo" alt="logo" /></Link>
      <div className='search-page-info'>
        <p>4 stays - 16 january to 3 july - 2 Guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>

      <Link to='/Location-Details' className="searchResults">
        {locations.map((location) => (
          <div key={location._id} className="searchResult">
            <img className="searchResult__img" src={location.images[0]} alt={`image-${location._id}`} />
            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <p className="searchResult__name">{location.name}</p>
                <h3 className="searchResult__title">{location.title}</h3>
                <p className="searchResult__description">{location.description}</p>
              </div>
              <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                  <p className="searchResult__rating">
                    <strong>{location.ratings}</strong> ⭐
                  </p>
                </div>
                <div className="searchResult__price">
                  <h2>{location.price}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Link>
      <Footer />
    </>
  );
}

export default SearchPage;



