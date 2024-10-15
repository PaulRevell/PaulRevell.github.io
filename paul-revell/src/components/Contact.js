import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="projects-header">Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <strong>Paul Revell</strong>
        </div>
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:paul@paul-revell.com">paul@paul-revell.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +44 7399 600 394
        </div>
        {/* <div className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
