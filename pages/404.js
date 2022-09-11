import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from '../styles/Components/NotFound.module.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('use effect runs');
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

    return (
      <div className={styles.container}>
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
}

export default NotFound;