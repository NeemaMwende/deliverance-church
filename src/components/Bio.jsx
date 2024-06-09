import React from 'react';
import "./Bio.css";
import peter from "../Images/pastors.jpg";

const Bio = () => {
  return (
    <section className="home" id="home">
      <div className="bio">
        <div className="content animate___animated animate_fadeIn animate_infinite">
          <h3>Welcome to <span>Deliverance Church</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure ad quos vero nam culpa, minima ipsum nemo, natus fugit, quas a? Architecto ut omnis accusamus libero neque asperiores impedit.</p>
          <div className="button">Join Us Today</div>
        </div>
        <div className="profile-img">
          <img src={peter} alt="Pastor" />
        </div>
      </div>
    </section>
  );
};

export default Bio;
