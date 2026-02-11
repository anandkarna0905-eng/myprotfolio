import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init('7YRfFUq4aT6apOysy');
  }, []);

  const validateForm = (formData) => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Stop submit if errors exist
    if (Object.keys(validationErrors).length > 0) return;

    try {
      await emailjs.sendForm(
        'service_p0751az',
        'template_euq3hc9',
        formRef.current
      );

      alert('Thanks for reaching out. I will respond shortly.');
      formRef.current.reset();
      setErrors({});
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
            <label>Name</label>
            <input type="text" name="name" />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message"></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {/* Matches {{gmail}} in EmailJS template */}
          <input type="hidden" name="gmail" />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
