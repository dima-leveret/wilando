import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { useEffect, useState, useRef } from "react";

import styles from "../styles/ImgGallery.module.css";

const ImgGallery = ({ images, handleImgId }) => {
  const [gallery, setGallery] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  console.log("gallery =>", gallery);

  const [fullScreenBtn, setFullScreenBtn] = useState();

  const imagesGalleryProps = useRef();
  console.log("imagesGalleryProps ref =>", imagesGalleryProps.current);

  useEffect(() => {
    setGallery(images);

    const btn = document.querySelector(".image-gallery-fullscreen-button");
    setFullScreenBtn(btn);

    document.addEventListener("keyup", escPressHendler);
  }, [images]);

  const showFullScreen = () => {
    imagesGalleryProps.current.fullScreen();
    setIsFullScreen(true);
  };

  const cloSeFullScreen = () => {
    imagesGalleryProps.current.exitFullScreen();
    setIsFullScreen(false);
  };

  fullScreenBtn?.addEventListener("click", () => {
    cloSeFullScreen();
  });

  const escPressHendler = (e) => {
    if (e.key === "Escape") {
      cloSeFullScreen();
    }
  };

  return (
    <>
      <div
        className={isFullScreen ? styles.galleryActive : styles.galleryHidden}
      >
        <ImageGallery
          useBrowserFullscreen={false}
          ref={imagesGalleryProps}
          items={gallery}
        />
      </div>
      <button onClick={showFullScreen}>Open galley</button>
    </>
  );
};

export default ImgGallery;
