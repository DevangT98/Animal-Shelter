import React, { useState } from 'react';
import './ExplorePage.css';
import CustomDropdown from './CustomDropdown';
import DogCard from './DogCard';
import magnifyGlass from '../../assets/img/maginifyingGlass.png';
import kobe from '../../assets/img/kobePup.jpg';

const ExplorePage = () => {

  const [sortOption, setSortOption] = useState('Sort by: ');
  const [breed, setBreed] = useState('Any');
  const [age, setAge] = useState('Any'); 
  const [size, setSize] = useState('Any'); 
  const [gender, setGender] = useState('Any'); 
  const [color, setColor] = useState('Any'); 

  return (
    <div className="explore-container">
      <div className="white1-rectangle">
        <div className="gradient-rectangle">
        <div className="gradient-text">
            Discover Your Perfect Pup - <br />Explore Our Exclusive Dog Catalog!
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
        </div>
        <img src={magnifyGlass} alt="Magnify Glass" className="magnify-glass" />
        <div className="sort-dropdown">
          <div className="sort-text">
            {sortOption}
          </div>
          <select className="sort-select" onChange={(e) => setSortOption(e.target.value)}>
            <option value="Sort by:">A - Z</option>
            <option value="Sort by:">Newest</option>
            <option value="Sort by:">Relevance</option>
            <option value="Sort by:">Breed</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M14.3136 2L8.15679 8.1568L2 2" stroke="black" stroke-width="2.77056" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
            <div className="filter-rectangle">
            <div><CustomDropdown label="Breed" options={['Any','Husky', 'Golden Retriever']} onChange={(e) => setBreed(e.target.value)} /></div>
            <div><CustomDropdown label="Age" options={['Any', 'Puppy', 'Adult']} onChange={(e) => setAge(e.target.value)} /></div>
            <div><CustomDropdown label="Size" options={['Any', 'Small', 'Big']} onChange={(e) => setSize(e.target.value)} /></div>
            <div><CustomDropdown label="Gender" options={['Any', 'Male', 'Female']} onChange={(e) => setGender(e.target.value)} /></div>
            <div><CustomDropdown label="Color" options={['Any', 'Black', 'White']} onChange={(e) => setColor(e.target.value)} /></div>
        </div>
        <div className="dog-cards-container">

          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          <DogCard image={kobe} name="Kobe" age="1" breed="Husky" />
          
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;