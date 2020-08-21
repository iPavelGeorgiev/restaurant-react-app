import React from "react";
import styles from "./index.module.css";

const Dish = (props) => {
   return (
      <div className={styles["single-menu"]}>
         <img src="http://placehold.jp/285808/cccc00/250x250.jpg" alt="" />
         <div className={styles["menu-content"]}>
            <h4>Menu Item <span>_ _ _ Lv.</span></h4>
            <p>Aperium tempora sit, perferendig numanic repudiante porro voluptate dicta zaer faciles.</p>
         </div>
      </div>
   )
}

export default Dish;