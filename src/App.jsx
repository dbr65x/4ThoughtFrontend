import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomeScreen from './HomeScreen';
import AboutPageScreen from './AboutPageScreen'
import LeftView from './LeftView';
import RightView from './RightView';
import UnbiasedView from './UnbiasedView';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <HomeScreen />}> </Route>
       <Route exact path="/unbiasedView" element={ <UnbiasedView />}> </Route>
       <Route exact path="/leftView" element={ <LeftView />}> </Route>
      <Route exact path="/rightView" element={ <RightView />}> </Route>
       <Route exact path="/aboutPage" element={ <AboutPageScreen />}> </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;