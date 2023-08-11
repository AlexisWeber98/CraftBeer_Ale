/// IMPORTS
import React, { useState } from "react"
import contactValidation from "./ContactValidation"
// STYLES
import styles from "./Contact.module.css";
import Form from 'react-bootstrap/Form';

export interface message {
  name: string,
  email: string,
  phone: string,
  message: string
}
// CONTACT
const Contact: React.FC = () => {
  // LOCAL STATES
  const [userMessage, setUserMessage] = useState<message>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<message>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // HANDLERS
  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserMessage((prevUserMessage) => ({
        ...prevUserMessage,
        [name]: value
    }));
    contactValidation(userMessage, setErrors);
  };
  const handlerTextareaOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserMessage((prevUserMessage) => ({
        ...prevUserMessage,
        [name]: value
    }));
    contactValidation(userMessage, setErrors);
  };
  const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // despacho de userMessage
  };
  return (
    <div className={styles.all}>
      <Form 
      className={styles.form}
      onSubmit={handlerOnSubmit}
      >
        <div className={styles.upper}>
          <div className={styles.upperLeft}>
            <Form.Group className={`${errors.name ? styles.upperLeftError : ""}`}>
              <Form.Label>Name</Form.Label>
              <div className={styles.inputDiv}>
                <Form.Control
                required 
                type="text" 
                name="name"
                onChange={handlerOnChange}
                />
                {errors.name && <p className={styles.validationMessage}>{errors.name}</p>}
              </div>
            </Form.Group>
            <Form.Group className={`${errors.email ? styles.upperLeftError : ""}`}>
              <Form.Label>Email</Form.Label>
              <div className={styles.inputDiv}>
                <Form.Control 
                required
                type="email" 
                name="email"
                onChange={handlerOnChange}
                />
                {errors.email && <p className={styles.validationMessage}>{errors.email}</p>}
              </div>
            </Form.Group>
            <Form.Group className={`${errors.phone ? styles.upperLeftError : ""}`}>
              <Form.Label>Phone</Form.Label>
              <div className={styles.inputDiv}>
                <Form.Control 
                required
                type="text" 
                name="phone"
                onChange={handlerOnChange}
                />
                {errors.phone && <p className={styles.validationMessage}>{errors.phone}</p>}
              </div>
            </Form.Group>
          </div>
          <div className={styles.upperRight}>
            <h4>Contact information</h4>
            <div>
              <h5>PHONE : 123456789</h5>
              <h5>EMAIL: Craftbeer@email.com</h5>
              <h5>ADDRESS: </h5>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <Form.Group>
            <textarea
            required
            name="message"
            placeholder="Message..."
            onChange={handlerTextareaOnChange}
            />
          </Form.Group>
          <button
          type="submit"
          className={styles.submit}
          disabled={
            !userMessage.name ||
            !userMessage.email ||
            !userMessage.phone ||
            !userMessage.message ||
            !!errors.name ||
            !!errors.email ||
            !!errors.phone ||
            !!errors.message
            }
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;