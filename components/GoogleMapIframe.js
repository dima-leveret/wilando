const GoogleMapIframe = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.538838637273!2d16.860800316323367!3d52.37878155443692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704453e8d1edc25%3A0xd6520b826ba4c84f!2sKopanina%2054%2F56%2C%2060-105%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1656145753045!5m2!1sen!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
