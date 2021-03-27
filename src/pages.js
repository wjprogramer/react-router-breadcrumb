import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from "./components";

/**
 * These are root pages
 */
 const Home = ({ location }) => {
  return <>
    <h1 className="py-3">Home</h1>
    <Breadcrumb locationPath={location.pathname} />
  </>;
};

const Books = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return <>
    <h1 className="py-3">Books</h1>
    <Breadcrumb 
      locationPath={location.pathname}
      onMatchedRoutes={onMatchedRoutes} 
    />
  </>;
};

const Electronics = ({ route, location }) => {
  // Provide a function as props into <Breadcrumb /> to modify breadcrumb
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return <>
    <h1 className="py-3">Electronics</h1>

    <Breadcrumb 
      locationPath={location.pathname}
      onMatchedRoutes={onMatchedRoutes}
    />

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