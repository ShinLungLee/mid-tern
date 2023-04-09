import { Link } from "react-router-dom"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import '../../App.css';
import CarSummary from "../CarSummary";
import MemberSummary from "../MemberSummary";

export default function Header({ logo }) {
    return (
        <div>
        <div className={styles.header}>
                <h1 className={styles.headerlogo}>
                    {logo}
                </h1>
            <div className={styles.search}>
                <input className={styles.searchbar} type="text" name="search" id="search" placeholder="輸入欲搜尋的商品" />
                <button className={styles.searchbtn}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <MemberSummary />
            <CarSummary />
        </div>
        <NavBar/>
        </div>
    );
}