import React from 'react';
import { Switch, Route } from 'react-router-dom';
const rootPath = process.env.PUBLIC_URL;

/**
 * These are root pages
 */
 const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = () => {
  return <>
    <h1 className="py-3">Electronics</h1>
    <Switch>
      {/* The component will show here if the current URL matches the path */}
      <Route path={`${rootPath}/electronics/mobile`} component={Mobile} />
      <Route path={`${rootPath}/electronics/desktop`} component={Desktop} />
      <Route path={`${rootPath}/electronics/laptop`} component={Laptop} />
    </Switch>
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