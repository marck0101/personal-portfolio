import React from 'react';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

function App() {
   return (
      <HelmetProvider>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </HelmetProvider>
   );
}


export default App;
