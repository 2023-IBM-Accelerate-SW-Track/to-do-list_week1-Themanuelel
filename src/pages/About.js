import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Emanuel Demisse</div>
            <div className="brief_description">
              I love chocolate pudding
            </div>
          </div>
        </div>
      </div> 
      </div>
    )
  }
}