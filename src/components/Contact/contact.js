import React, { useState } from "react";
import Particle from "../Particle";
import pic from "../../Assets/Spider with pencil.jpg"
const FORM_ENDPOINT = "https://public.herotofu.com/v1/64cc7880-be47-11ec-a9fe-f9d78fa6da59"; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="sucsess">
        <h2>Thank you!</h2>
        <h2>We'll be in touch soon.</h2>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      
      <div className="contact-form__container">
      <div className="spider"style={{maxWidth:99,}} style={{borderRadius:999,}}>
        <img
                src={pic}
                alt="home pic"
                className="img-fluid"
                 style={{borderRadius:999,}}
         
              /></div>
        <div className="contact-form__header">
         
          <h1> Write Us</h1> </div>
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="submit">
        <button type="submit" style={{borderRadius:99,}}> Contact Us </button>
      </div>
     </div>
    </form>
  );
};

export default Contact;