import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/EmailJsForm.module.css";

function EmailJsForm() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7hy6glp",
        "template_fr9zm0r",
        form.current,
        "user_QB1g2D1ptO4BlQ3jxP4Es"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <>
      <h3>Wyslij nam wiadomość</h3>

      <form className={styles.form} onSubmit={handleSubmit} ref={form}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" required name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" required name="email" />

        <label htmlFor="phone">Phone number</label>
        <input id="phone" type="tel" name="phone" />

        <label htmlFor="message">Message</label>
        <textarea id="message" type="text" rows="4" name="message" />

        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default EmailJsForm;
