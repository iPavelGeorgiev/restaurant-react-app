import React, { Component } from "react";
import Link from "../Link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";

class NavigationBar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isActive: false
      }
   }

   toggle = () => {
      this.setState({
         isActive: this.state.isActive ? false : true
      })
   }

   render() {
      const navbar = this.state.isActive ?
         `${styles.change} ${styles.navbar}` :
         `${styles.navbar}`;

      const links = getNavigation(false, {});

      return (
         <nav className={navbar}>
            <div className={styles["hamburger-menu"]} onClick={this.toggle}>
               <div className={`${styles.line} ${styles["line-1"]}`}></div>
               <div className={`${styles.line} ${styles["line-2"]}`}></div>
               <div className={`${styles.line} ${styles["line-3"]}`}></div>
            </div>

            <ul className={styles["nav-list"]}>
               {
                  links.map(navElement => {
                     return (
                        <li className={styles["nav-item"]} key={navElement.title}>
                           <Link
                              href={navElement.link}
                              title={navElement.title}
                              type="nav"
                           />
                        </li>
                     )
                  })
               }
            </ul>
         </nav >
      )
   }
}

export default NavigationBar;