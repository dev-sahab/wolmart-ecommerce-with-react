import { Link } from "react-router-dom";

const Breadcumb = ({ title, children }) => {
  return (
    <>
      <nav className="breadcrumb-nav container">
        <ul className="breadcrumb bb-no">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{title}</li>
        </ul>
        {children}
      </nav>
    </>
  );
};

export default Breadcumb;
