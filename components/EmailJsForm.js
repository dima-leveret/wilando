import React, { useRef, useState } from "react";
import styles from "../styles/Components/EmailJsForm.module.css";
import emailjs from "emailjs-com";
import * as FaIcons from "react-icons/fa";

function EmailJsForm() {
  const form = useRef();
  const [status, setStatus] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    //wilando send form data

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_PUBLIC_KEY}`
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

    form.current.reset();
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
          <div className={styles.inputContainer}>
            <input
              id="name"
              type="text"
              required
              name="name"
              placeholder="Name"
              className={styles.input}
            />
            <FaIcons.FaUser />
          </div>

          <div className={styles.inputContainer}>
            <input
              id="email"
              type="email"
              required
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <FaIcons.FaEnvelope />
          </div>

          <div className={styles.inputContainer}>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              className={styles.input}
            />
            <FaIcons.FaPhoneAlt />
          </div>

          <div className={styles.textareaContainer}>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Message"
              className={styles.textarea}
            />
            <FaIcons.FaPencilAlt className={styles.pencilIcon} />
          </div>

          <div className={styles.btnContainer}>
            <input type="submit" value="Wyślij" className={styles.btn} />
            {!status ? null : <FaIcons.FaCheck className={styles.checkIcon} />}
          </div>
        </form>
      </div>
    </>
  );
}

export default EmailJsForm;
