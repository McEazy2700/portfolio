import styles from "./styles.module.css";

export default function LoadingLogo() {
    return (
      <div className={`${styles.shapeshifter} ${styles.play}`} style={{backgroundImage: "url(/animated_logo.svg)"}} />
    );
}
