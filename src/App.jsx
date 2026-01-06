
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CloudDevOpsPage } from "./components/cloud-devops/CloudDevOpsPage";
import { DataAnalyticsPage } from "./components/data-analytics/DataAnalyticsPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cloud-devops" element={<CloudDevOpsPage />} />
        <Route
          path="/data-engineering-analytics"
          element={<DataAnalyticsPage />}
        />
      </Routes>
    </Router>
  );
};








