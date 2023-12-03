import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RecipesPage from './Recipes';
import MorePage from './More';
import App from './App'

function Ndrrimi() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/recipe' element={<RecipesPage></RecipesPage>}></Route>
        <Route path='/more' element={<MorePage></MorePage>}></Route>


        
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default Ndrrimi;
