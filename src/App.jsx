import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchUserProfile } from "./features/auth/authSlice";
import MainPage from "./pages/mainPage/MainPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./pages/privateRoute/PrivateRoute";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userProfile = useSelector((state) => state.auth.userProfile);

  useEffect(() => {
    if (token && !userProfile) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token, userProfile]);
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
