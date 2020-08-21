import React, { useState, useRef, useEffect } from 'react';
import styles from "./index.module.css";

const Accordion = (props) => {
   const [active, setActive] = useState(false);
   const contentRef = useRef(null);

   const isActiveTitle = active
   ? `${styles["accordion-title"]} ${styles.active}`
   : styles["accordion-title"];

   const isActiveIcon = active
      ? `${styles["accordion-icon"]} ${styles.rotate}`
      : styles["accordion-icon"];

   useEffect(() => {
      contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
   }, [contentRef, active]);

   const toggleActive = () => {
      setActive(!active);
   }

   return (
      <div className={styles.container}>
         <div className={styles["accordion-section"]}>
            <button className={isActiveTitle} onClick={toggleActive}>
               <p>{props.title}</p>
               <span className={isActiveIcon}>></span>
            </button>

            <div ref={contentRef} className={styles["accordion-content"]}>
               {props.children}
            </div>
         </div>
      </div>
   )
}

export default Accordion