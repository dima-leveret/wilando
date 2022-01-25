import Link from "next/link";
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
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