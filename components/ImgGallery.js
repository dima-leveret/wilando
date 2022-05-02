import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { useEffect, useState, useRef } from "react";

import styles from "../styles/ImgGallery.module.css";

const ImgGallery = ({ images }) => {
  const [gallery, setGallery] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false)

  const imagesGalleryProps = useRef();
  console.log("imagesGalleryProps ref =>", imagesGalleryProps.current);

  useEffect(() => {
    setGallery((prev) => {
      return [...prev, ...images];
    });
  }, []);

  const showFullScreen = () => {
    if (imagesGalleryProps.current.state.isFullscreen) {
      imagesGalleryProps.current.exitFullScreen();
      setIsFullScreen(false)
    } else {
      imagesGalleryProps.current.fullScreen();
      imagesGalleryProps.current.state.currentIndex = 5;
      setIsFullScreen(true);
    }
  };

  return (
    <>
      <div className={isFullScreen ? styles.galleryActive : styles.galleryHidden}>
        <ImageGallery
          ref={imagesGalleryProps}
          items={gallery}
          onClick={showFullScreen}
        />
      </div>
      <button onClick={showFullScreen}>Img index 5</button>
    </>
  );
};

export default ImgGallery;
