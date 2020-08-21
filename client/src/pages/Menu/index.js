import React from "react";
import PageLayout from "../../components/PageLayout";
import Accordion from "../../components/Accordion";
import Dish from "../../components/Dish";
import styles from "./index.module.css";

const Menu = () => {
   const categories = ["Main Dishes", "Sides", "Drinks", "Desserts"];

   return (
      <PageLayout>
            <div className={styles.container}>
               <div className={styles.title}>
                  <h2><span>Food made with passion & love</span>Our Menu</h2>
               </div>

               {
                  categories.map(category => {
                     return (
                        <Accordion title={category} key={category}>
                           <div className={styles.menu}>
                              <Dish />
                              <Dish />
                              <Dish />
                              <Dish />
                           </div>
                        </Accordion>
                     )
                  })
               }
            </div>
      </PageLayout>
   )
}

export default Menu;