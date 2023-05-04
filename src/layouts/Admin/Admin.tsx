import React, { Suspense } from "react";
import SidebarNav from "./includes/SidebarNav";
import Header from "./includes/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import adminRoutes from "../../routes/admin";

const Admin = () => {
  return (
    <>
      {/* <!-- start navbar --> */}
      <Header />
      {/* <!-- End start navbar --> */}

      {/* <!-- strat wrapper --> */}
      <div className="h-screen flex flex-row flex-wrap">
        <SidebarNav />
        <div className="bg-gray-100 flex-1 p-6 mt-16">
          <Suspense fallback={"Loading content..."}>
            <Routes>
              {adminRoutes.map((route, idx) => {
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
              {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Admin;
