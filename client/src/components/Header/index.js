import React, { Fragment } from "react";
import NavigationBar from "../NavigationBar";
import logo from "../../media/logo.png";
import styles from "./index.module.css";

const Header = () => {
   return (
      <Fragment>
         <NavigationBar />
         <img src={logo} alt="logo icon" className={styles.logo} />
      </Fragment>
   )
}

export default Header;