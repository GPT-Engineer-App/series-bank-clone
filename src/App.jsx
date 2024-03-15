import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SeriesTracker from "./pages/SeriesTracker.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/series-tracker" element={<SeriesTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
