import React from "react";
import Main from "./pages/Main";

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
         </Switch>
       </BrowserRouter>
   );
 }
 
 export default Router;