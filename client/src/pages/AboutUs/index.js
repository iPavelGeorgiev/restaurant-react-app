import React from "react";
import PageLayout from "../../components/PageLayout";
import ourRestaurant from "../../media/our-restaurant.jpg";
import styles from "./index.module.css";

const AboutUs = () => {
   return (
      <PageLayout>
         <div className={styles.about}>
            <h2>About us</h2>
            
            <p>Palevro restaurant was founded on the basic principle of providing each and every guest a memorable dining experience from the moment they call or open our doors. All of our food is prepared from scratch by people that love to cook and are proud of their creations. Our products that we use are the freshest, and all of the food that we serve is made in-house daily. We have several dining areas that will appeal to a variety of guests. Whether you’re looking for an intimate, romantic restaurant setting or need space for larger groups of friends and family, you’ll find it here. The moment the dessert plates are cleared from their table, guests are delighted to receive our fresh, homemade chocolate-covered strawberries as a thank you for joining us.</p>

            <img className={styles["restaurant-img"]} src={ourRestaurant} alt="Our Restaurant" />
         </div>
      </PageLayout>
   )
}

export default AboutUs;