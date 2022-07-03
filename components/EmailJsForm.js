import React, { useRef, useState } from "react";
import styles from "../styles/Components/EmailJsForm.module.css";
import emailjs from "emailjs-com";

function EmailJsForm() {
  const form = useRef();
  const [status, setStatus] = useState();

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
          setStatus(result);
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
    //       setStatus(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    form.current.reset();
  };

  return (
    <>
      {!status ? null : <p>Success! Thanks for your message!</p>}

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
          {/* <label htmlFor="name">Name</label> */}
          <input
            id="name"
            type="text"
            required
            name="name"
            placeholder="Name"
            className={styles.input}
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            id="email"
            type="email"
            required
            name="email"
            placeholder="Email"
            className={styles.input}
          />

          {/* <label htmlFor="phone">Phone number</label> */}
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            className={styles.input}
          />

          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Message"
            className={styles.textarea}
          />

          <input type="submit" value="Send" className={styles.btn} />
        </form>
      </div>
    </>
  );
}

export default EmailJsForm;
