import React from 'react';
import Filters from './components/Filters';
import { AppContext } from './context/AppContextProvider';
import HomeView from './components/views/Home';
import DesignView from './components/views/Design';

import './styles/App.css';

function App() {
  const {
    toggleShowFilters,
    designs,
    currentDesign,
    currentDesignIndex,
    addDesign,
  } = React.useContext(AppContext);

  const onApplyFilters = (newFilters) => {
    addDesign(newFilters);
  };

  return (
      <div className="App relative min-h-screen">
        <Filters onApply={onApplyFilters} />
        {designs && !designs.length && <HomeView onStart={toggleShowFilters} />}
        {currentDesign && <DesignView design={currentDesign} id={currentDesignIndex + 1} />}

      </div>
  );
}

export default App;
