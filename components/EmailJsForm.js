import React, { useRef, useState } from "react";
import styles from "../styles/Components/EmailJsForm.module.css";
import emailjs from "emailjs-com";
import * as FaIcons from "react-icons/fa";
import { useTranslation } from "react-i18next";

function EmailJsForm() {
  const { t } = useTranslation("translation");
  const form = useRef();
  const [status, setStatus] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

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
              placeholder={t("contact-name")}
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
              placeholder={t("contact-email")}
              className={styles.input}
            />
            <FaIcons.FaEnvelope />
          </div>

          <div className={styles.inputContainer}>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder={t("contact-phone")}
              className={styles.input}
            />
            <FaIcons.FaPhoneAlt />
          </div>

          <div className={styles.textareaContainer}>
            <textarea
              id="message"
              type="text"
              required
              name="message"
              placeholder={t("contact-message")}
              className={styles.textarea}
            />
            <FaIcons.FaPencilAlt className={styles.pencilIcon} />
          </div>

          <div className={styles.btnContainer}>
            <input type="submit" value={t("contact-btn")} className={styles.btn} />
            {!status ? null : <FaIcons.FaCheck className={styles.checkIcon} />}
          </div>
        </form>
      </div>
    </>
  );
}

export default EmailJsForm;
