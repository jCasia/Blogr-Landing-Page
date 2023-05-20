import { useContext, useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSingle = (id) => {
    //if id==activeId will be null so will able to close.
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        isSidebarOpen,
        toggleSingle,
        activeId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
