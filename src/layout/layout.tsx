import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

interface layoutPros {
  title: string;
  children: any;
}
const Layout = (props: layoutPros) => {
  return (
    <Fragment>
      <Helmet>
        <title>{props?.title}</title>
      </Helmet>
      <main className="bg-app-primary min-h-screen flex flex-col font-roboto">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
