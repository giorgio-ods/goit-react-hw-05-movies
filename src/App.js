import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./Components/HomePage/HomePage";
import MoviesDetailsPage from "./Components/MoviesDetailsPage/MoviesDetailsPage";
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} exact="true"></Route>

        <Route path="/movies" element={<MoviesPage />} exact></Route>

        <Route
          path="/movies/:movieId/*"
          element={<MoviesDetailsPage />}
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
