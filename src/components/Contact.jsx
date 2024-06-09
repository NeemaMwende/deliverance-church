import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h1 className="heading"><span>contact</span> us</h1>
    <div className="row">
        <iframe class = "map" src="https://maps.app.goo.gl/d6tnkrLq4cKGvC1a9"
         width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" />
         <form action="">
             <h3>get in touch</h3>
             <div className="inputBox">
                 <span className="fas fa-user"></span>
                 <input type="text" placeholder="name" />
             </div>
             <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="Contact now" className="button" />
         </form>
    </div>
</section>
  )
}

export default Contact;