import React, { useState } from 'react';

export const AppContext = React.createContext({
  showFilters: false,
  currentDesignIndex: 0,
  designs: [],
  currentDesign: {},
  isCompareView: false,
  toggleShowFilters: () => {
  },
  nextDesign: () => {
  },
  addDesign: () => {
  },
  prevDesign: () => {
  },
  setDesignByIndex: () => {
  },
  showCompareView: () => {
  },
  hideCompareView: () => {
  },
  canAddNewDesign: () => {
  },
});

const MAX_DESIGNS = 3;

const AppContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [currentDesign, setCurrentDesign] = useState(null);
  const [designs, setDesigns] = useState([]);
  const [isCompareView, setIsCompareView] = useState(false);
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const addDesign = (newDesign, setNext = false) => {
    const newDesigns = [...designs];
    const newIndex = setNext ? currentDesignIndex + 1 : currentDesignIndex;
    newDesigns[newIndex] = newDesign;
    setDesigns(newDesigns);
    setCurrentDesign(newDesign);
    if (setNext) {
      nextDesign();
    }
  };

  const nextDesign = () => {
    if (currentDesignIndex < MAX_DESIGNS) {
      setCurrentDesignIndex(currentDesignIndex + 1);
    }
  };

  const prevDesign = () => {
    if (currentDesignIndex > 1) {
      setCurrentDesignIndex(currentDesignIndex - 1);
    }
  };

  const setDesignByIndex = (index) => {
    const newDesign = designs[index] || null;
    if (newDesign) {
      setCurrentDesign(newDesign);
      setCurrentDesignIndex(index);
    }
  };

  const canAddNewDesign = () => {
    return designs.length < MAX_DESIGNS;
  };

  const showCompareView = () => setIsCompareView(true);
  const hideCompareView = () => setIsCompareView(false);

  const defaultValue = {
    showFilters,
    currentDesignIndex,
    currentDesign,
    designs,
    isCompareView,
    toggleShowFilters,
    addDesign,
    nextDesign,
    prevDesign,
    setDesignByIndex,
    showCompareView,
    hideCompareView,
    canAddNewDesign,
  };

  return (
      <AppContext.Provider value={defaultValue}>
        {children}
      </AppContext.Provider>
  );
};

export default AppContextProvider;
