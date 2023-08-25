import Header from "./header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.jsx";

const Layouts = () => {
  return (
    <div className="page-wrapper">
      <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
