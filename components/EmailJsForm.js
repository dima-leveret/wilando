import React, { useRef } from "react";
import styles from "../styles/EmailJsForm.module.css";

import { sendMail } from "../src/lib/emailjs"

function EmailJsForm() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    //my dev sending form

    sendMail(form.current);

    // emailjs
    //   .sendForm(
    //     `${process.env.DIMA_EMAILJS_SERVICE_ID}`,
    //     `${process.env.DIMA_EMAILJS_TEMPLATE_ID}`,
    //     form.current,
    //     `${DIMA_EMAILJS_PUBLIC_KEY}`
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    //wilando send form data

    // emailjs
    //   .sendForm(
    //     "wilando",
    //     "wilando_template",
    //     form.current,
    //     "tED3CE09EFY-bbhDb"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

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
