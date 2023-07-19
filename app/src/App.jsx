import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContext, AppContextProvider } from './AppContext';
import { Category } from './Category';
import { Header } from './Header';
import { Footer } from './Footer';
import { Overview } from './Overview';


// A hack so react-router will work with a local `file://` url
// Determine what the "basename" needs to be.
// If we're on a site like `https://nsi.guide`, it will just end up as '/'
let pathArr = window.location.pathname.split('/');
pathArr.pop();  // pop index.html
const basename = pathArr.join('/') + '/';


export function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="*" element={ <AppContextProvider/> } />
      </Routes>
    </BrowserRouter>
  );
};
