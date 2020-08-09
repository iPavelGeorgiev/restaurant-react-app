import React from "react";
import NavigationBar from "./components/NavigationBar";

import {
   BrowserRouter,
   Switch,
   Route,
   Redirect
 } from 'react-router-dom'

 const Router = () => {
   return (
       <BrowserRouter>
         <Switch>
           <Route path="/" exact component={NavigationBar} />
         </Switch>
       </BrowserRouter>
   );
 }
 
 export default Router;