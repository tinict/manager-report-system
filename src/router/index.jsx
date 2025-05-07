import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const Index = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.page;
        let Layout = route.layout || Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default Index;
