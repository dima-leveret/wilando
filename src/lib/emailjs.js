import emailjs from "emailjs-com";

export const sendMail = (formData) => {
    emailjs

      //Dima dev form data

      // .sendForm(
      //   `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_SERVICE_ID}`,
      //   `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_TEMPLATE_ID}`,
      //   formData,
      //   `${process.env.NEXT_PUBLIC_DIMA_EMAILJS_PUBLIC_KEY}`
      // )

      //Wilando form data

      .sendForm(
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_TEMPLATE_ID}`,
        formData,
        `${process.env.NEXT_PUBLIC_WILANDO_EMAILJS_PUBLIC_KEY}`
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
}