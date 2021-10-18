import React, { useState } from 'react';

export const AppContext = React.createContext({
  showFilters: false,
  toggleShowFilters: () => {},
  currentDesign: 0,
  designs: [],
});


const AppContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(0);
  const [designs] = useState([]);
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const setDesign = (design, index) => {
    design[index] = design;
  };

  const defaultValue = {
    showFilters,
    toggleShowFilters,
    currentDesign,
    setCurrentDesign,
    designs,
    setDesign,
  };

  return (
      <AppContext.Provider value={defaultValue}>
        {children}
      </AppContext.Provider>
  );
};

export default AppContextProvider;
