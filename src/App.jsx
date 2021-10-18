import React from 'react';
import Filters from './components/Filters';
import { AppContext } from './context/AppContextProvider';
import HomeView from './components/views/home';

import './styles/App.css';

function App() {
  const { toggleShowFilters, designs } = React.useContext(AppContext);

  const onApplyFilters = (newFilters) => {
    console.log({ newFilters });
  };

  return (
      <div className="App relative min-h-screen">
        <Filters onApply={onApplyFilters} />
        {designs && !designs.length && <HomeView onStart={toggleShowFilters} />}
      </div>
  );
}

export default App;
