import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { useEffect, useState, useRef } from "react";

import styles from "../styles/ImgGallery.module.css";

const ImgGallery = ({ images }) => {
  const [gallery, setGallery] = useState([]);

  const imagesGalleryProps = useRef();
  console.log("imagesGalleryProps ref =>", imagesGalleryProps.current);

  useEffect(() => {
    setGallery((prev) => {
      return [...prev, ...images];
    });
  }, []);

  const showFullScreen = () => {
    // if (fullScreen.current.state.isFullscreen) {
    //   fullScreen.current.exitFullScreen();
    // } else {
    //   fullScreen.current.fullScreen();
    // }
  };

  const onBtnClick = () => {
    imagesGalleryProps.current.fullScreen();
    imagesGalleryProps.current.state.currentIndex = 5
  };

  return (
    <div className={styles.gallery}>
      <ImageGallery
        ref={imagesGalleryProps}
        items={gallery}
        onClick={showFullScreen}
      />
      <button onClick={onBtnClick}>Img index 5</button>
    </div>
  );
};

export default ImgGallery;
