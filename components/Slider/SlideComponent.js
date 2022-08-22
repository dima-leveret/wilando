import styles from "../../styles/Components/Slider.module.css";

const SlideComponent = ({ sourceImg }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.imgContainer}>
        <img src={sourceImg} alt="logo" />
      </div>
    </div>
  );
};

export default SlideComponent;
