import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

function App() {
   return (
      <HelmetProvider>
         <div>
            <BrowserRouter>
               <BaseLayout/>
            </BrowserRouter>
         </div>
      </HelmetProvider>
   );
}


export default App;
