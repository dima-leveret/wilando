import styles from "../styles/Components/BasicInfo.module.css";
import { GiSmartphone } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelope, BsClock } from "react-icons/bs";

const BasicInfo = () => {
  return (
    <div className={styles.basicInfoContainer}>
      <div className={styles.basicInfo}>
        <div className={styles.infoItem}>
          <GiSmartphone className={styles.infoItemIcon} />
          <div className={styles.infoText}>
            <span>Telefon</span>
            <p>skontaktuj się z nami przez telefon</p>
            <a className={styles.phoneNr} href="tel:123456789">
              123 456 789
            </a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <IoLocationOutline className={styles.infoItemIcon} />
          <div className={styles.infoText}>
            <span>Adres</span>
            <p>Kopanina 54/56</p>
            <p>60-105 Poznań</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <BsEnvelope className={styles.infoItemIcon} />
          <div className={styles.infoText}>
            <span>Email</span>
            <a href="mailto: wilando@gmail.com" className={styles.mail}>
              wilando@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <BsClock className={styles.infoItemIcon} />
          <div className={styles.infoText}>
            <span>Godziny pracy biura</span>
            <p>Pon-Sub: 8:00-20:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
