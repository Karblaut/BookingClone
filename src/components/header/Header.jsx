import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../data/icons";
import { DateRange } from 'react-date-range';
import "./header.scss";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="header">
      <div className="headerContainer">
             <div className="headerList">
        {icons.map((icon, index) => (
          <div
            className={`headerListItem ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <FontAwesomeIcon icon={icon.icon} />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
         <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Blauting account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={icons[0].icon} className="headerIcon" />
          <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={icons[1].icon} className="headerIcon" />
          <span className="headerSearchText">{icons[1].spanText}
          <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          /></span>
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={icons[3].icon} className="headerIcon" />
          <span className="headerSearchText">{icons[3].spanText}</span>
        </div>
      </div>
      </div>
    </div>
 
  );
};

export default Header;
