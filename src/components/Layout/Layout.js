import { Fragment } from 'react';

import classes from './Layout.module.css';
import TopNav from './TopNav';

const Layout = (props) => {
  return (
    <Fragment>
      <TopNav />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;