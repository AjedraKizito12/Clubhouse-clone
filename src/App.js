import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AllowNotifications from "./pages/AllowNotifications";
import Activity from "./pages/Activity";
import UpComing from "./pages/UpComing";
import FriendsInvite from "./pages/FriendsInvite";

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notifications" element={<AllowNotifications />} />
        </Routes>
      </PlanLayout>

      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/upComing" element={<UpComing />} />
          <Route path="/friends_invite" element={<FriendsInvite />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
