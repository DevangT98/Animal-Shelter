import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


const App = () => {
  return (
    <div>
     <Header />
      <Home />
    </div>
  );
};

/*function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}
*/

export default App;
