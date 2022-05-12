import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
          <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
          </ul>
      </div>
    );
}

export default Navigation;