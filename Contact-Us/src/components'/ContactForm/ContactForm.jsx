import React from "react";
import styles from "./Contact-Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button icon={<IoCall fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button
          secondary_btn={true}
          icon={<IoIosMail fontSize="24px" />}
          text="VIA EMAIL FORM"
        />
        <form action="" className={styles.set}>
          <div className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className={styles.form}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows="8" />
          </div>
          <div className={styles.button}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="\images\Contact.svg" alt="Contact SVG" />
      </div>
    </section>
  );
};

export default ContactForm;
