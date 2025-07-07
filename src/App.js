
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackHub from "./components/FeedbackHub";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackHub />} />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
