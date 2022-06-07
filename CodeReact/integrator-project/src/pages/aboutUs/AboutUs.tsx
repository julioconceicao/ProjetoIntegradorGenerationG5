import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
      <>
      <div className="body">
        <div className='container'>
          <input type="radio" name="slider" id="item-1"/>
          <input type="radio" name="slider" id="item-2"/>
          <input type="radio" name="slider" id="item-3"/>
          <div className='cards'>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
              <label className="card" htmlFor="item-1" id="song-1">
                <img src="https://imgur.com/cps58Bf.jpg"></img>
              </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;