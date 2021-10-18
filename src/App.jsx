import './styles/App.css';
import Filters from './components/Filters';
import React from 'react';
import { AppContext } from './context/AppContextProvider';
import Button from './components/Button';

function App() {
  const { toggleShowFilters } = React.useContext(AppContext);

  return (
      <div className="App relative">
        <Filters />
        <Button type="button" onClick={toggleShowFilters}>Show Filters</Button>
      </div>
  );
}

export default App;
