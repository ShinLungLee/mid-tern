import styles from "./header.module.css";
import '../../App.css';
export default function Header({logo}){
    return(
        <header className={styles.header}>
            <h1 className={styles.headerlogo}>{logo}
            </h1>
        </header>
    );
}