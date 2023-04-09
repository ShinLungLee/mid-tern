import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>

            <NavLink to="/products/category/手機通訊"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                手機通訊
            </NavLink>
            <NavLink to="/products/category/電玩遊戲"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                電玩遊戲
            </NavLink>
            <NavLink to="/products/category/衣物配件"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                衣物配件
            </NavLink>
            <NavLink to="/products/category/生活居家"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                生活居家
            </NavLink>
            <NavLink to="/products/category/公仔玩具"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                公仔玩具
            </NavLink>
            <NavLink to="/products/category/電腦電子"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                電腦電子
            </NavLink>
            <NavLink to="/products/category/書籍雜誌"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                書籍雜誌
            </NavLink>
            <NavLink to="/products/category/休閒旅遊"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                休閒旅遊
            </NavLink>
        </div>
    );
}