import React, { Fragment } from "react";
import adminRoutes from "../../../routes/admin";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <div className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-72 animated faster">
        {/* sidebar content */}
        <div className="flex flex-col">
          {/* sidebar toggle */}
          <div className="text-right  mb-4">
            <button id="sideBarHideBtn">
              <i className="fad fa-times-circle" />
            </button>
          </div>
          {/* end sidebar toggle */}
          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
            homes
          </p>
          {/* link */}
          <a
            href="./index.html"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fad fa-chart-pie text-xs mr-2" />
            Dashboard
          </a>
          {/* end link */}
          {/* link */}

          {/* end link */}
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            React 18 Features
          </p>
          {/* link */}
          {adminRoutes.map((route, idx) => {
            return (
              <Fragment key={idx}>
                <Link
                  className="p-2  w-full rounded-none lg:rounded-r-2xl text-left hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between text-secondary dark:text-secondary-dark"
                  to={route.path}
                >
                  {route.name}
                </Link>
              </Fragment>
            );
          })}

          {/* end link */}
        </div>
        {/* end sidebar content */}
      </div>
    </>
  );
};

export default SidebarNav;
