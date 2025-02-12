import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import SearchPage from './components/Pages/Search/SearchPage';
import Login from './components/Pages/Login/Login';
import SearchResult from './components/Pages/Search/SearchResult';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
                

          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/location-details" element={<SearchResult/>} />
  
        </Routes>
      </div>
    </Router>
  );
};

export default App;
