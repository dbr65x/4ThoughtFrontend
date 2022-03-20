import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomeScreen from './HomeScreen';
import PersonalizedView from './PersonalizedView';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <HomeScreen />}> </Route>
       <Route exact path="/personalizedView" element={ <PersonalizedView />}> </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;