import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./auth/ProtectedRoute";
import MovieDetail from "./pages/MovieDetail";
import Register from "./pages/Register";
import AdminAddMovie from "./pages/AdminAddMovie";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/movie/:id" element={<MovieDetail />} />
<Route path="/register" element={<Register />} />
<Route
  path="/pages/AdminAddMovie"
  element={
    <AdminRoute>
      <AdminAddMovie />
    </AdminRoute>
  }
/>

        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
