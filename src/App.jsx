import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import { BottomNavigation, CallList, CallDetail } from "./components/organisms";
import { ArchiveButton, Loader, ErrorState } from "./components/molecules";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { fetchData } from "./services/api.js";
import { AppProvider, useAppContext } from "./provider/index.jsx";
import { TABS, QUERIES } from "./constants/index.js";
import { archiveActivities } from "./services/api.js";
import MainContainer from "./components/templates/MainContainer.jsx";

const callsQueryClient = new QueryClient();

const AppWithProvider = () => (
  <QueryClientProvider client={callsQueryClient}>
    <AppProvider>
      <App />
    </AppProvider>
  </QueryClientProvider>
);

const App = () => {
  const { isLoading, isFetching, error, data } = useQuery(
    QUERIES.calls,
    fetchData
  );

  const [isProcessing, setIsProcessing] = useState(false);

  const { currentActivity, currentTab } = useAppContext();

  const handleArchiveActivities = async () => {
    try {
      setIsProcessing(true);
      const filteredData = data.filter(
        (activity) => activity.is_archived === (currentTab === TABS.archived)
      );

      if (filteredData.length) {
        await archiveActivities(filteredData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        callsQueryClient.invalidateQueries(QUERIES.calls);
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <div className="container" id="main">
      {!!currentActivity && <CallDetail />}
      <Header />
      <MainContainer>
        {(!!isLoading || !!isFetching || isProcessing) && (
          <Loader
            label={isProcessing ? "Processing calls" : "Loading calls..."}
          />
        )}
        {!isLoading && !isFetching && !!error && <ErrorState />}
        {!isLoading && !!data && (
          <React.Fragment>
            <ArchiveButton
              label={
                currentTab === TABS.inbox
                  ? "Archive all calls"
                  : "Unarchive all calls"
              }
              onClick={handleArchiveActivities}
            />
            <CallList data={data} />
          </React.Fragment>
        )}
      </MainContainer>
      <BottomNavigation data={data} />
    </div>
  );
};

ReactDOM.render(<AppWithProvider />, document.getElementById("app"));

export default AppWithProvider;
