import { useState } from "react";
import './SearchResult.css'; 
import "react-datepicker/dist/react-datepicker.css";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PetsIcon from '@mui/icons-material/Pets';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import AirIcon from '@mui/icons-material/Air';
import StarIcon from '@mui/icons-material/Star';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import PoolIcon from '@mui/icons-material/Pool';
import DatePicker from "react-datepicker";
import FlagIcon from '@mui/icons-material/Flag';
import TimerIcon from '@mui/icons-material/Timer';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const SearchResult = () => {
  const property = {
    title: 'Modern Apartment in the Heart of the Johannesburg City',
    description: 'Entire apartment hosted by Romeo',
    price: '$120 / night',
    ratings: 4.8,
    images: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/c58794de-d965-41f3-ae3b-2a16de8d2a0a.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/7a93bcb4-9214-4274-9bf1-630d67e3eed4.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/59d47bb9-3c7e-4dd6-9384-a8583a140a69.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/d2efcdf7-36b4-43df-9f56-c7e43f630a2c.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1258442005551556247/original/2f86c9ba-71d7-4c35-94d7-91b3917a3b13.jpeg?im_w=720',
    ],
    amenities: [
      '2 guests', '1 Bedroom', '1 bed', 'parking', 'swimming pool', 'Breakfast', 'WiFi'
    ],
    host: {
      name: 'Romeo',
      profileImage: 'https://c.stocksy.com/a/UMV200/z9/597214.jpg',
      description: 'Entire apartment hosted by Romeo'
    },
    location: 'Downtown City Center, City, Country',
  };

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const formatDate = (date) => date ? date.toLocaleDateString() : 'Select date';
  const [guestCount, setGuestCount] = useState(1);
  
  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const timeDifference = new Date(checkOutDate) - new Date(checkInDate);
      return timeDifference / (1000 * 3600 * 24);
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    if (nights === 0) {
      return 0;
    }
    const pricePerNight = 80;
    const weeklyDiscount = 25;
    const cleaningFee = 20;
    const serviceFee = 29;
    const occupationTaxes = 10;
  
    const total = (nights * pricePerNight)  + cleaningFee + serviceFee + occupationTaxes - weeklyDiscount;
    return total;
  };

  return (
    <>
      <Header />
      <div className="location-details"> 
        <h1 className='title'>{property.title}</h1>   
        <p><StarIcon className='star1' /> {property.ratings} • 12 reviews <TimerIcon className='star1' />Super-host <PinDropIcon className='star1' /> Johannesburg , South africa</p>
        <div className="images-container">
          <img className="main-image" src={property.images[0]} alt="Main Property" />
          <div className="small-images">
            {property.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`Property ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="property-info">
          <span>    
            <p className='property-description'>{property.description} </p> 
            <img className="property-profile-pic" src="https://c.stocksy.com/a/UMV200/z9/597214.jpg" alt="Airbnb stats" /> 
          </span>
          <p className='property-amenities1'>{property.amenities.join(' •  ')}</p>
          <span className="entire-home">
            <HomeIcon className="home-icon" />
            <p className="icon-text">Entire home</p>
          </span>
          <p className="detail">You'll have the Apartment by yourself</p>
          <span className="enhanced-cleaning">
            <AutoAwesomeIcon className="enhanced-cleaning-icon" />
            <p className="icon-text">Enhanced Cleaning</p>
          </span>
          <p className="detail">This host committed to Airbnb's 5-step enhanced cleaning process</p>
          <span className="self-checkin">
            <SensorDoorIcon className="self-checkin-icon" />
            <p className="icon-text">Self-Checkin</p>
          </span>
          <p className="detail">Check yourself in with the keypad.</p>
          <span className="free-cancellation">
            <CalendarTodayIcon className="free-cancellation-icon" />
            <p className="icon-text">Free cancellation before Feb 14</p>
          </span>
          <div className='reserve'>
            <div className='reserve-section-calculator'>
              <span className='reserve-calculator-reviews'>
                <h4> $80/Night </h4>
                <p className='reserve-calculator-reviews1'>
                  <StarIcon />{property.ratings} • 7 reviews
                </p>
              </span>
              <div>
                <span className='date-pickers'>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    placeholderText="Check-In"
                    dateFormat=" dd MMMM yyyy"
                    className="datepicker2"
                  />
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    placeholderText="Check-Out"
                    dateFormat=" dd MMMM yyyy"
                    className="datepicker2"
                  />
                </span>
              </div>
              <h5>Guests</h5>
              <input 
                type="number" 
                value={guestCount} 
                onChange={(e) => setGuestCount(e.target.value)} 
                min="1" 
                className="guest-input" 
              />
              <button className='reserve-btn1'>Reserve</button>
              <p>You will not be charged yet</p>
              <div className='reserve-lower-section'>
                <span><h3>$80 x {calculateNights()} night(s)</h3><p>${calculateNights() * 80}</p></span>
                <span><h3>Weekly discount</h3><p className='discount'>- $25</p></span>
                <span><h3>Cleaning fee</h3><p>$20</p></span>
                <span><h3>Service fee</h3><p>$29</p></span>
                <span><h3>Occupation taxes and fee</h3><p>$10</p></span>
                <div className='total-section'>
                  <span><h1>Total</h1><h1>${calculateTotal()}</h1></span>
                </div>
              </div>
            </div>
            <span><FlagIcon /> <h6>Report this listing</h6></span>    
          </div>
        </div>
        <p className="prop-description">
          Nestled in the heart of Johannesburg, this modern apartment offers the perfect blend of comfort and style. 
          With spacious interiors, contemporary furnishings, and stunning city views, it's an ideal retreat for both business and leisure travelers. 
          Enjoy easy access to local attractions, vibrant neighborhoods, and excellent dining options.
        </p>
        <p className="prop-description1">Show More</p>
        <h2>Where you will sleep</h2>
        <img className="small-sleep-image" src={property.images[3]} alt="Where you will sleep" />
        <h4 className="main">Queen bed</h4>
        <h5 className="sub-main">1 bedroom</h5>
        <h2 className="main2">What this place offers</h2>
        <div className="sections-container">
          <div className="left-section-area">
            <span className="garden-view">
              <LocalFloristIcon className="offers-icon" />
              <p className="icon-text">Garden view</p>
            </span>
            <span className="pets-allowed">
              <PetsIcon className="offers-icon" />
              <p className="icon-text">Pets allowed</p>
            </span>
            <span className="wifi">
              <WifiIcon className="offers-icon" />
              <p className="icon-text">Wifi</p>
            </span>
            <span className="air-conditioning">
              <AirIcon className="offers-icon" />
              <p className="icon-text">Central air-conditioning</p>
            </span>
            <span className="kitchen">
              <MicrowaveIcon className="offers-icon" />
              <p className="icon-text">Kitchen</p>
            </span>
          </div>
          <div className="right-section-area">
            <span className="garden-view">
              <LocalFireDepartmentIcon className="offers-icon" />
              <p className="icon-text">dryer</p>
            </span>
            <span className="pets-allowed">
              <VideocamOutlinedIcon className="offers-icon" />
              <p className="icon-text">Security camera</p>
            </span>
            <span className="wifi">
              <KitchenOutlinedIcon className="offers-icon" />
              <p className="icon-text">refrigerator</p>
            </span>
            <span className="air-conditioning">
              <LocalLaundryServiceIcon className="offers-icon" />
              <p className="icon-text">washing machine</p>
            </span>
            <span className="bicycles">
              <PoolIcon className="offers-icon" />
              <p className="icon-text">swimming pool</p>
            </span>
          </div>
        </div>
        <button className="amenities-btn">View all 27 amenities</button>
        <div className="checkin-dates">
          <h2 className="main3">7 Nights in Johannesburg</h2>
          <div className="date-span">
            <span>{formatDate(checkInDate)}</span>
            <span>{formatDate(checkOutDate)}</span>
          </div>
          <div className="date-pickers">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Select Check-In Date"
              dateFormat=" dd MMMM yyyy"
              className="datepicker"
              inline
            />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Select Check-Out Date"
              dateFormat=" dd MMMM yyyy"
              className="datepicker"
              inline
            />
          </div>
          <span
            className="custom-clear-text"
            onClick={() => {
              setCheckInDate(null);
              setCheckOutDate(null);
            }}
          >
            Clear dates
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
