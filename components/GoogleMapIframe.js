import styles from "../styles/Components/GoogleMapIframe.module.css"

const GoogleMapIframe = () => {
  return (
    <div className={styles.mapContainer} >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4871.078069369594!2d16.862989!3d52.378778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704453e8d1edc25%3A0xd6520b826ba4c84f!2sKopanina%2054%2F56%2C%2060-105%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1656863008164!5m2!1sen!2spl"
        width="800"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
