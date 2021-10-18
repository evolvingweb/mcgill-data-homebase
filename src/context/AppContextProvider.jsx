import React, { useState } from 'react';

export const AppContext = React.createContext({
  showFilters: false,
  currentDesignIndex: 0,
  designs: [],
  currentDesign: {},
  toggleShowFilters: () => {},
  nextDesign: () => {},
  addDesign: () => {},
  prevDesign: () => {},
  setDesignByIndex: () => {},
});


const AppContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [currentDesign, setCurrentDesign] = useState(null);
  const [designs, setDesigns] = useState([]);
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const addDesign = (newDesign) => {
    const newDesigns = [...designs];
    newDesigns.push(newDesign);
    setDesigns(newDesigns);
    setCurrentDesign(newDesign);
  };

  const nextDesign = () => {
    setCurrentDesignIndex(currentDesignIndex + 1);
  };

  const prevDesign = () => {
    setCurrentDesignIndex(currentDesignIndex - 1);
  };

  const setDesignByIndex = (index) => {
    const newDesign = designs[index] || null;
    if (newDesign) {
      setCurrentDesign(newDesign);
    }
  };

  const defaultValue = {
    showFilters,
    currentDesignIndex,
    currentDesign,
    designs,
    toggleShowFilters,
    addDesign,
    nextDesign,
    prevDesign,
    setDesignByIndex
  };

  return (
      <AppContext.Provider value={defaultValue}>
        {children}
      </AppContext.Provider>
  );
};

export default AppContextProvider;
