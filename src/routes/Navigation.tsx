import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active': ""} end>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active': ""} end>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active': ""} end>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<ShoppingPage/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
