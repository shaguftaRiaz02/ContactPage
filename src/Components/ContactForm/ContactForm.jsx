import  { useState } from 'react';
import { MdMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import ContactImage from "/Images/Service 24_7-pana 1.png";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("Name going to be display here");
  const [email, setEmail] = useState("Email going to be display here");
  const [message, setMessage] = useState("Message going to be display here");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setMessage(event.target.message.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.ContactForm}>
        <div className={styles.buttons}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage size={24} color="white" />}
          />
          <Button
            text="VIA CALL"
            icon={<FiPhone size={24} color="white" />}
          />
        </div>
        <div className={styles.email_btn}>
          <Button
            Email_Button={true}
            text="VIA EMAIL"
            icon={<AiTwotoneMail size={24} color="white" />}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_inputs}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className={styles.form_inputs}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className={styles.form_inputs}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={7}
              cols={40}
            ></textarea>
          </div>
          <div className={styles.send_btn}>
            <Button text="SEND" type="submit" />
          </div>
        </form>
        <div
          className={styles.send_btn}
          style={{ backgroundColor: "black", color: "white", fontWeight: "bolder" }}
        >
          {name}
          <br />
          {email}
          <br />
          {message}
        </div>
      </div>
      <div className={styles.Contact_Image}>
        <img src={ContactImage} alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;
