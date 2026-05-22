import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, 
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '',
      });
    }

  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your feedback"
          value={formData.feedback}
          onChange={handleChange}
        />    
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>Rate us:   
        <input type="radio" name="rating" value="1" onChange={handleChange}/> 1
        <input type="radio" name="rating" value="2" onChange={handleChange} /> 2
        <input type="radio" name="rating" value="3" onChange={handleChange} /> 3
        <input type="radio" name="rating" value="4" onChange={handleChange} /> 4
        <input type="radio" name="rating" value="5" onChange={handleChange} /> 5
        </div>
        <button type="submit">Submit feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

