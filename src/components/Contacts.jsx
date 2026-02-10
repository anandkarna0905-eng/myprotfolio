import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
const formRef = useRef(null);

useEffect(() => {
emailjs.init('7YRfFUq4aT6apOysy');// <-- replace with your Public Key from EmailJS dashboard
}, []);

const handleSubmit = async (e) => {
e.preventDefault();
try {
await emailjs.sendForm(
'service_p0751az', // <-- replace with the Service ID you copied
'template_euq3hc9',// <-- replace with the Template ID you copied
formRef.current
);
alert('Thanks for reaching out. I appreciate your interest and will respond shortly.');
formRef.current.reset();
} catch (error) {
console.error('EmailJS error:', error);
alert('Failed to send message. Please try again.');
}
};
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <form ref={formRef} className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          {/* Hidden input for recipient email — matches template {{gmail}} */}
          <input type="hidden" name="gmail" value="anandkarna0905@gmail.com" />

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;