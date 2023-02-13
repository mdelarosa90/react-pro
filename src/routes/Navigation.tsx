import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponentsPage, FormikAbstractionPage } from "../03-forms/pages";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ""} end>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route path="/formik-abstract" element={<FormikAbstractionPage />} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
