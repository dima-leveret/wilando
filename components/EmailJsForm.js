import React, { useRef } from "react";
import styles from "../styles/EmailJsForm.module.css";
import emailjs from "emailjs-com";

function EmailJsForm() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    //my dev sending form

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //wilando send form data

    // emailjs
    //   .sendForm(
    //     `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_SERVICE_ID}`,
    //     `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_TEMPLATE_ID}`,
    //     form.current,
    //     `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_PUBLIC_KEY}`
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
