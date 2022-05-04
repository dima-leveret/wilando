import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { useEffect, useState, useRef } from "react";

import styles from "../styles/ImgGallery.module.css";

const ImgGallery = ({ images }) => {
  const [gallery, setGallery] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [fullScreenBtn, setFullScreenBtn] = useState();
  console.log(fullScreenBtn);

  const imagesGalleryProps = useRef();
  console.log("imagesGalleryProps ref =>", imagesGalleryProps.current);

  useEffect(() => {
    setGallery((prev) => {
      return [...prev, ...images];
    });

    const btn = document.querySelector(".image-gallery-fullscreen-button");
    setFullScreenBtn(btn);
  }, []);

  useEffect(() => {
    
  }, [])

  const showFullScreen = () => {
    imagesGalleryProps.current.fullScreen();
    imagesGalleryProps.current.state.currentIndex = 5;
    setIsFullScreen(true);
  };

  const cloSeFullScreen = () => {
    imagesGalleryProps.current.exitFullScreen();
    setIsFullScreen(false)
  }

  fullScreenBtn?.addEventListener("click", () => {
    cloSeFullScreen()
    console.log('click');
  })

  return (
    <>
      <div className={isFullScreen ? styles.galleryActive : styles.galleryHidden}>
        <ImageGallery
          ref={imagesGalleryProps}
          items={gallery}
        />
      </div>
      <button onClick={showFullScreen}>Img index 5</button>
    </>
  );
};

export default ImgGallery;
