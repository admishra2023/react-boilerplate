import React, { useId } from "react";
import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Web from "./layouts/Web/Web";
import Admin from "./layouts/Admin/Admin";

function App() {
  const passwordHintId = useId();
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path="/*" element={<Web />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
