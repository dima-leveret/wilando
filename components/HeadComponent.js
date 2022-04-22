import Head from "next/head";

const HeadComponent = ({ title }) => {
    return (
        <Head>
          <title>{title}</title>
        </Head>
    )
}

export default HeadComponent;