import React from "react";
import Layout from "../../layout/layout";

const ErrorPage = (props) => {
  const { error } = props;
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <p className="text-7xl text-white">{error}</p>
      </div>
    </Layout>
  );
};

export default ErrorPage