import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PageTitle from "../components/PageTitle";

import styles from "../styles/Components/NotFound.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title="404" />
      <h1>Oooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a className={styles.homeLink}>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
