import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";
import styles from "./header.module.css";
import logoImage from "../../../public/images/icon.png";
import "../../App.css";
import CarSummary from "../CarSummary";
import MemberSummary from "../MemberSummary";
import HamburgerMenu from "../HamburgerMenu";

export default function Header() {
  const [isOnTouch, setIsOnTouch] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.headerlogo}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
          >
            <img
              src={logoImage}
              alt="Logo"
              className={styles.logoImage}
              style={{ width: "10rem", height: "auto" }}
            />
          </NavLink>
        </h1>
        <div className={styles.search}>
          <input
            className={styles.searchbar}
            type="text"
            name="search"
            id="search"
            placeholder="輸入欲搜尋的商品"
          />
          <button className={styles.searchbtn}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <MemberSummary />
        <CarSummary />
      </div>
      <HamburgerMenu
        onClick={() => setIsOnTouch(!isOnTouch)}
        isOnTouch={isOnTouch}
      />
      <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
    </div>
  );
}
