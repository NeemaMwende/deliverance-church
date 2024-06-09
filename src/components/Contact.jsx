import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h1 className="heading"><span>contact</span> us</h1>
    <div className="row">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0751908144744!2d37.96947417486687!3d-1.105859798883531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1825cd299932b90f%3A0x3670f4e3a61a0831!2sKanyaa%20Market!5e0!3m2!1sen!2ske!4v1717963895395!5m2!1sen!2ske"
      width="600"
      height="450"
      style={{border:0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

         <form action="">
             <h3>get in touch</h3>
             <div className="inputBox"> 
              {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0751908144744!2d37.96947417486687!3d-1.105859798883531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1825cd299932b90f%3A0x3670f4e3a61a0831!2sKanyaa%20Market!5e0!3m2!1sen!2ske!4v1717963895395!5m2!1sen!2ske"
      width="600"
      height="450"
      style={{border:0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe> */}
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