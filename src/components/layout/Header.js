import React, { useState, useRef, useEffect } from "react";  
import { Link } from "react-router-dom"; 
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Header.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestCount, setGuestCount] = useState(1);
    const [showGuestPopup, setShowGuestPopup] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const popupRef = useRef(null);

    const handleGuestChange = (operation) => {
        setGuestCount((prevCount) => {
            const newCount =
                operation === "increment" ? prevCount + 1 : prevCount - 1;
            return Math.max(1, Math.min(20, newCount));
        });
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowGuestPopup(false);
        }
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    useEffect(() => {
        if (showGuestPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showGuestPopup]);

    const locations = [
        { _id: "all", name: "All" },
    ];

    return (
        <div className="header">
            <div className="top-header">
                <Link to ='/'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RtiAMKTwBe7WLLasZ1w7M7W9LD3PQF_p4g&s" alt="logo" /> </Link>
                <div className="header-text">
                    <p className="active">Place to stay</p>
                    <p>Experiences</p>
                    <p>Online Experiences</p>
                </div>
                <div className="header-links">
                    <div className="host-link">Become a host</div>
                    <LanguageIcon className="language-icon" />
                    <div className="profile-menu-icons">
                        <MenuIcon className="menu-icon" />
                        <Link to="/login">
                            <AccountCircleIcon className="account-icon" />
                        </Link>
                    </div>
                </div>
            </div>

            <button onClick={() => setIsHeaderVisible(!isHeaderVisible)} className="toggle-header-button">
              {isHeaderVisible ? 'Close' : 'Search'}
            </button>

            {isHeaderVisible && (
                <div className="header-bottom">
                    <div className="header-search">
                        <div className="search-where">
                            <p>Where</p>
                            <div className="search-input">
                                <Link to="/search" className="all-locations-link">
                                    <select onChange={handleLocationChange} value={selectedLocation}>
                                        {locations.map((location) => (
                                            <option value={location._id} key={location._id}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </Link>
                            </div>
                        </div> 
                        <div className="search-checkin">
                            <p>Check In</p>
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                placeholderText="Add dates"
                                className="date-picker"
                            />
                        </div>
                        <div className="search-checkout">
                            <p>Check Out</p>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                placeholderText="Add dates"
                                className="date-picker"
                            />
                        </div>
                        <div className="search-who">
                            <p>Guests</p>
                            <button
                                className="search-button"
                                onClick={() => setShowGuestPopup(true)}
                            >
                                Add guests 
                            </button>
                            {showGuestPopup && (
                                <div className="guest-popup" ref={popupRef}>
                                    <div className="guest-selector">
                                        <button
                                            className="guest-button"
                                            onClick={() => handleGuestChange("decrement")}
                                        >
                                            <RemoveIcon />
                                        </button>
                                        <input
                                            type="number"
                                            value={guestCount}
                                            readOnly
                                            className="guest-input"
                                        />
                                        <button
                                            className="guest-button"
                                            onClick={() => handleGuestChange("increment")}
                                        >
                                            <AddIcon />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <SearchIcon className="search-icon" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;

