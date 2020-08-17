import React from "react"
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";

const PageLayout = (props) => {
   return (
      <div className={styles.container}>
         <Header />
            {props.children}
         <Footer />
      </div>
   )
}

export default PageLayout