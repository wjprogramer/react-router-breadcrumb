import React from 'react';
import { Link } from "react-router-dom"; 
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from "./routes";

/**
 * These are root pages
 */
 const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = ({ route, location }) => {
  const matchedRoutes = matchRoutes(routes, location.pathname);
  return <>
    <h1 className="py-3">Electronics</h1>

    {/* Breadcrumb */}
    <nav>
      <ol className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route;

          return (
            <li key={i} className="breadcrumb-item">
              <Link to={path}>{breadcrumbName} </Link>
            </li>
          );
        })}
      </ol>
    </nav>

    {renderRoutes(route.routes)}
  </>;
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };