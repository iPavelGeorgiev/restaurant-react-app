import React from "react";
import styles from "./index.module.css";
import { Link } from 'react-router-dom'

const LinkComponent = ({ title, href, type }) => {

   return (
       <li className={styles[`${type}-item`]} key={title}>
           <Link to={href} className={styles[`${type}-link`]}>
               {title}
           </Link>
       </li>
   )
}

export default LinkComponent;