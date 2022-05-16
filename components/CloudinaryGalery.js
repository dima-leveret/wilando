import { useState, useEffect, useRef } from "react";
import { mapImageResources } from "../src/lib/coudinary";
import styles from "../styles/Galery.module.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import imgGalleryStyles from "../styles/ImgGallery.module.css";


const CloudinaryGalery = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) => {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenBtn, setFullScreenBtn] = useState();

  const imagesGalleryProps = useRef();
  console.log("imagesGalleryProps ref =>", imagesGalleryProps.current);

  useEffect(() => {
    // setGallery(images);

    const btn = document.querySelector(".image-gallery-fullscreen-button");
    setFullScreenBtn(btn);

    document.addEventListener("keyup", escPressHendler);
  }, [images]);

  const showFullScreen = (imgObj) => {
    imagesGalleryProps.current.fullScreen();
    imagesGalleryProps.current.state.currentIndex = images.indexOf(imgObj);
    setIsFullScreen(true);
    console.log(images.length);
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

  

  const hadleLoadMore = async (e) => {
    e.preventDefault();

    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json());
    console.log("results => ", results);

    const { resources, next_cursor: upadatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(upadatedNextCursor);
  };

  return (
    <>
      
      <div
        className={isFullScreen ? imgGalleryStyles.galleryActive : imgGalleryStyles.galleryHidden}
      >
        <ImageGallery
          useBrowserFullscreen={false}
          ref={imagesGalleryProps}
          items={images}
        />
      </div>

      <h2>Galery</h2>
      <p>
        Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u
        Ciebie!
      </p>

      <div className={styles.images}>
        {images.map((image) => {
          return (
            <div key={image.id} className={styles.imgContainer} onClick={() => showFullScreen(image)}>
              <img
                alt={image.title}
                src={image.original}
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
      {nextCursor ? (
        <button onClick={hadleLoadMore}>Load more</button>
      ) : (
        <p>There are all images we have 😃</p>
      )}
    </>
  );
};

export default CloudinaryGalery;
