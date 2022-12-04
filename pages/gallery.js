import HeadComponent from "../components/HeadComponent";
import { search, mapImageResources } from "../src/lib/coudinary";
import CloudinaryGalery from "../components/CloudinaryGallery";
import { Typography } from "../components/Typography";

function Galery({ images, nextCursor }) {
  return (
    <>
      <HeadComponent title="Wilando | Galery" />

      <Typography styleVariant="pageTitle" children="Galeria" />

      <Typography
        styleVariant="textPrimary"
        children="Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u
        Ciebie!"
      />

      <CloudinaryGalery images={images} nextCursor={nextCursor} />
    </>
  );
}

export default Galery;

export const getStaticProps = async () => {
  const results = await search({
    max_results: 9,
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor: nextCursor || null,
    },
  };
};
