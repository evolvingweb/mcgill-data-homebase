import React from 'react';
import Filters from './components/Filters';
import { AppContext } from './context/AppContextProvider';
import HomeView from './components/views/Home';
import DesignView from './components/views/Design';

import './styles/App.css';
import CompareView from './components/views/Compare';

function App() {
  const {
    toggleShowFilters,
    designs,
    currentDesign,
    currentDesignIndex,
    addDesign,
    isCompareView,
    showCompareView,
    hideCompareView,
  } = React.useContext(AppContext);

  const onApplyFilters = (newFilters) => {
    addDesign(newFilters);
  };

  const onEditDesign = () => {
    toggleShowFilters();
  };

  const onShowCompare = () => {
    showCompareView();
  };

  const onCloseCompareView = () => {
    /* @TODO: Assign the next design index*/
    hideCompareView();
  };

  return (
      <div className="App relative min-h-screen">
        <Filters onApply={onApplyFilters} />
        {designs && !designs.length && <HomeView onStart={toggleShowFilters} />}

        {currentDesign && !isCompareView && (
            <DesignView
                design={currentDesign}
                id={currentDesignIndex + 1}
                onEdit={onEditDesign}
                onShowCompare={onShowCompare}
            />
        )}

        {isCompareView && <CompareView onClose={onCloseCompareView} />}

      </div>
  );
}

export default App;
