import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Typography } from "../components/Typography";
import styles from "../styles/Components/NotFound.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <Typography styleVariant="pageTitle" children="404" />
        <h1>Oooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a className={styles.homeLink}>Homepage</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
