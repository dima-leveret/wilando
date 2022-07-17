import Footer from "./Footer";
import Header from "./Header/Header";
import styles from "../styles/Components/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* <div className={styles.layoutContainer}> */}
        <Header />
        <main className={styles.main} >{children}</main> 
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default Layout;
