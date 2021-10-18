import React, { useState } from 'react';

export const AppContext = React.createContext({
  showFilters: false,
  toggleShowFilters: () => {},
});


const AppContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(true);
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const defaultValue = {
    showFilters,
    toggleShowFilters,
  };

  return (
      <AppContext.Provider value={defaultValue}>
        {children}
      </AppContext.Provider>
  );
};

export default AppContextProvider;
