import HeadComponent from "../components/HeadComponent"

import { search, mapImageResources } from "../src/lib/coudinary";

import CloudinaryGalery from "../components/CloudinaryGalery";

// import ImgGallery from "../components/ImgGallery";

function Galery({ images, nextCursor }) {

  return (
    <>
      <HeadComponent title="Wilando | Galery" />

      {/* <ImgGallery images={images} /> */}

      <CloudinaryGalery images={images} nextCursor={nextCursor} />

    </>
  );
}

export default Galery;

export const getStaticProps = async () => {
  const results = await search();

  console.log("reults", results);

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,
    },
  };
};
