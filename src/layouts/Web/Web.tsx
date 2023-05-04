import React, { Suspense } from "react";
import SidebarNav from "../Admin/includes/SidebarNav";
import Header from "../Web/includes/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import webRoutes from "../../routes/web";
import Footer from "./includes/Footer";

const Web = () => {
  return (
    <>
      {/* <!-- start navbar --> */}
      <Header />
      {/* <!-- End start navbar --> */}

      {/* <!-- strat wrapper --> */}
      <div className="h-screen flex flex-row flex-wrap">
        <div className="bg-gray-100 flex-1">
          <Suspense fallback={"Loading content..."}>
            <Routes>
              {webRoutes.map((route, idx) => {
                return (
                  route.element && (
                    <Route
                      key={idx}
                      path={route.path}
                      element={<route.element />}
                    />
                  )
                );
              })}
              <Route path="/" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>

      {/* Footer Section */}
    </>
  );
};

export default Web;
