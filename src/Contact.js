import { useState } from "react";
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // You can add code here to send the form data to a server

    // Reset the form fields
    setFormData({
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <>
    <div className="App">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
};

export default Contact;
