import React from 'react';
import "./Bio.css";
import mark from "../Images/mark2.jpeg"
// import Link from 'react-router-dom';

const Bio = () => {
  return (
        <section class="home" id="home">
          {/* <Link to="/">Home</Link> */}
          <div className='bio'>
              <div className="content animate___animated animate_fadeIn animate_infinite">
                    <h3>Welcome to <span>Deliverance Church</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Nulla iure ad quos vero nam culpa, minima ipsum nemo, 
                        natus fugit, quas a? Architecto ut omnis accusamus libero neque asperiores impedit.</p>
                        <div class="button">Join Us Today</div>
                </div>
                <div className='profile-img'>
                  <img src={mark} alt="" />
                </div>
          </div>
            
          
        </section>
  )
}

export default Bio;