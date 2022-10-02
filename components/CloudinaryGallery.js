import { useState, useEffect, useRef } from "react";
import { mapImageResources } from "../src/lib/coudinary";
import styles from "../styles/Components/Gallery.module.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PageTitle from "./PageTitle";

const CloudinaryGalery = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) => {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const imagesGalleryProps = useRef();

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        cloSeFullScreen();
      }
    });

    const fullScreenButton = document.querySelector(
      ".image-gallery-fullscreen-button"
    );
    fullScreenButton.addEventListener("click", () => {
      cloSeFullScreen();
    });
  }, []);

  const showFullScreen = (imgObj) => {
    imagesGalleryProps.current.fullScreen();
    imagesGalleryProps.current.state.currentIndex = images.indexOf(imgObj);
    setIsFullScreen(true);
  };

  const cloSeFullScreen = () => {
    imagesGalleryProps?.current?.exitFullScreen();
    setIsFullScreen(false);
  };

  const hadleLoadMore = async (e) => {
    e.preventDefault();

    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        max_results: 9,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: upadatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages((prev) => {
      return [...prev, ...images];
    });

    setNextCursor(upadatedNextCursor);
  };

  return (
    <>
      <PageTitle title="Galeria" />

      <div
        className={isFullScreen ? styles.galleryActive : styles.galleryHidden}
      >
        <ImageGallery
          useBrowserFullscreen={false}
          ref={imagesGalleryProps}
          items={images}
          lazyLoad={true}
        />
      </div>

      <p className={styles.galleryText}>
        Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u
        Ciebie!
      </p>

      <div className={styles.images}>
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className={styles.imgContainer}
              onClick={() => showFullScreen(image)}
            >
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
        <button className={styles.loadMoreBtn} onClick={hadleLoadMore}>
          Pokaż więcej
        </button>
      ) : (
        <p>To są wszystkie zdjęcia które obecnie mamy 😃</p>
      )}
    </>
  );
};

export default CloudinaryGalery;
