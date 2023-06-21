import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import format from "date-fns/format";
import 'react-date-range/dist/styles.css'; // główny plik CSS
import 'react-date-range/dist/theme/default.css'; // plik CSS motywu
import { icons } from "../../data/icons";
import "./header.scss";

const Header = (type) => {
  const [openDate,setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions,setOpenOptions] =useState(false);
  const [option,setOption] = useState(
{
adult:1,
children:0,
room:1
}
  );
  const optionsOfOccupancy = [
    { key: 'adult', label: 'Adults', count: `${option.adult}` },
    { key: 'children', label: 'Children', count: `${option.children}` },
    { key: 'room', label: 'Room', count: `${option.room}` },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
const handleOption = (name,operation) =>{
  setOption(prev=>{return {
    ...prev, [name]: operation === "increase" ? option[name] + 1 : option[name] -1,
  }})
}
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
      { type !== "list" && 
       <div className="wideSearchBarWrapper">
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
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate &&<DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          />}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={icons[3].icon} className="headerIcon" />
          <span  onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${option.adult} adult ${option.children} children ${option.room} room`}</span>
          {openOptions && (
  <div className="occupancyOptionsWrapper"> 
      {optionsOfOccupancy.map((opt, index) => (
        <div className={`occupancyOptions occupancyOptions--${opt.key}`} key={index}>
          <span className="occupancyOptionText">{opt.label}</span>
          <button
          disabled={(opt.count <= 1 && (opt.key !== 'children')) || (opt.count <= 0)}
          className="occupancyCounterButton" 
          onClick={()=>handleOption(`${opt.key}`,"decrease")}>-</button>
          <span className="occupancyCounterNumber">{opt.count}</span>
          <button className="occupancyCounterButton"onClick={()=>handleOption(`${opt.key}`,"increase")}>+</button>
        </div>
      ))}
      \
      </div>
)}
      /
    </div>
      </div> 
      </div> }
      </div> 
    </div>
 
  );
};

export default Header;

