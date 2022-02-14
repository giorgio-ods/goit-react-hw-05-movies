import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
