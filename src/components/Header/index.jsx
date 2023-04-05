import styles from "./header.module.css";
import '../../App.css';
import CarSummary from "../CarSummary"; '../CarSummary';
import MemberSummary from "../MemberSummary";

export default function Header({ logo }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerlogo}>{logo}
            </h1>
            <div className={styles.search}>
                <input className="search-bar" type="text" name="search" id="search" placeholder="輸入名稱" />
            </div>
            <MemberSummary />
            <CarSummary />
        </header>
    );
}