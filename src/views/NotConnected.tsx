import React, { Suspense, lazy } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

const Particles = lazy(() => import("../components/Particles"));

const NotConnected = () => {
  return (
    <Layout>
      <Suspense>
        <Particles />
      </Suspense>
      <Header />
      <Loading />
      <Footer />
    </Layout>
  );
};

export default NotConnected;
