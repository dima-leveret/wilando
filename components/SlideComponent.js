import styles from "../styles/Components/Slider.module.css"

const SlideComponent = () => {
    return (
        <div className={styles.slide} >
            <div className={styles.imgContainer} >
                <img src="/logo-wilando2.jpg" alt="logo" /> 
            </div>
        </div>
    );
}

export default SlideComponent;
