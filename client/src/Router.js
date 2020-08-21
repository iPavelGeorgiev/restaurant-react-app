import React from "react";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";

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
           <Route path="/" exact component={Main} />
           <Route path="/about" component={AboutUs} />
           <Route path="/menu" component={Menu} />
         </Switch>
       </BrowserRouter>
   );
 }
 
 export default Router;