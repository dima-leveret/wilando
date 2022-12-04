import styles from "../styles/Components/Typography.module.css";

const typographyVariant = {
  pageTitle: styles.pageTitle,
  headingPrimary: styles.headingPrimary,
  headingLarge: styles.headingLarge,
  textPrimary: styles.textPrimary,
};

export const Typography = ({
  styleVariant,
  children,
  heading,
  markedFragment,
}) => {
  return heading ? (
    <h4 className={typographyVariant[styleVariant]}>
      <mark className={styles.mark}>| {markedFragment} </mark>
      {children}
    </h4>
  ) : (
    <p className={typographyVariant[styleVariant]}>{children}</p>
  );
};
