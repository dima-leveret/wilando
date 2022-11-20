import styles from "../styles/Components/Typography.module.css";

export const Heading = ({ markedFragment, heading, large = false }) => {
  return (
    <h4 className={large ? styles.headingLarge : styles.heading}>
      <mark className={styles.mark}>| {markedFragment} </mark>
      {heading}
    </h4>
  );
};

export const Text = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};
