import { useState } from "react";
import { mapImageResources } from "../src/lib/coudinary";
import styles from "../styles/Galery.module.css";


const CloudinaryGalery = ({ images: defaultImages, nextCursor: defaultNextCursor }) => {

  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

  console.log(images);
  console.log(nextCursor);

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
      <h2>Galery</h2>
      <p>Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u Ciebie!</p>

      <div className={styles.images}>
        {images.map((image) => {
          return (
            <div key={image.id} className={styles.imgContainer}>
              <img
                alt={image.title}
                src={image.image}
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
      {
        nextCursor
        ?
        <button onClick={hadleLoadMore}>Load more</button>
        :
        <p>There are all images we have 😃</p>
      }
      
    </>
  );
};

export default CloudinaryGalery;
