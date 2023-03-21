import React, { createContext, useState, useContext } from "react";
import { TABS } from "../constants";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [currentActivity, setCurrentActivity] = useState(null);
  const [currentTab, setCurrentTab] = useState(TABS.inbox);

  const toggleArchived = () => {
    const archived = currentActivity.is_archived;
    const updatedActivity = Object.assign({}, currentActivity, {
      is_archived: !archived,
    });
    setCurrentActivity(updatedActivity);
  };

  return (
    <AppContext.Provider
      value={{
        currentActivity,
        setCurrentActivity,
        currentTab,
        setCurrentTab,
        toggleArchived,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
