import HeadComponent from "../components/HeadComponent";
import { search, mapImageResources } from "../src/lib/coudinary";
import CloudinaryGalery from "../components/CloudinaryGallery";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";

function Galery({ images, nextCursor }) {
  return (
    <Layout>
      <HeadComponent title="Wilando | Galery" />

      <Typography styleVariant="pageTitle" children="Galeria" />

      <Typography
        styleVariant="textPrimary"
        children="Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u
        Ciebie!"
      />

      <CloudinaryGalery images={images} nextCursor={nextCursor} />
    </Layout>
  );
}

export default Galery;

export const getServerSideProps = async () => {
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
