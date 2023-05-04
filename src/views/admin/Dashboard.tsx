import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {/* card */}
      <div className="card mt-6 bg-white rounded-lg p-3">
        <div className="card-body flex items-center">
          <div className="px-3 py-2 rounded bg-indigo-600 text-white mr-3">
            <i className="fad fa-wallet" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">
              <span className="num-2">34</span> Sales
            </h1>
            <p className="text-xs">
              <span className="num-2">3</span> payments
            </p>
          </div>
        </div>
      </div>
      {/* end card */}
      {/* card */}
      <div className="card mt-6 bg-white rounded-lg p-3">
        <div className="card-body flex items-center">
          <div className="px-3 py-2 rounded bg-green-600 text-white mr-3">
            <i className="fad fa-shopping-cart" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">
              <span className="num-2">64</span> Orders
            </h1>
            <p className="text-xs">
              <span className="num-2">42</span> items
            </p>
          </div>
        </div>
      </div>
      {/* end card */}
      {/* card */}
      <div className="card mt-6 bg-white rounded-lg p-3">
        <div className="card-body flex items-center">
          <div className="px-3 py-2 rounded bg-yellow-600 text-white mr-3">
            <i className="fad fa-blog" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">
              <span className="num-2">94</span> posts
            </h1>
            <p className="text-xs">
              <span className="num-2">60</span> active
            </p>
          </div>
        </div>
      </div>
      {/* end card */}
      {/* card */}
      <div className="card mt-6 bg-white rounded-lg p-3">
        <div className="card-body flex items-center">
          <div className="px-3 py-2 rounded bg-red-600 text-white mr-3">
            <i className="fad fa-comments" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">
              <span className="num-2">59</span> comments
            </h1>
            <p className="text-xs">
              <span className="num-2">61</span> approved
            </p>
          </div>
        </div>
      </div>
      {/* end card */}
      {/* card */}
      <div className="card mt-6 bg-white rounded-lg p-3 xl:col-span-2">
        <div className="card-body flex items-center">
          <div className="px-3 py-2 rounded bg-pink-600 text-white mr-3">
            <i className="fad fa-user" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">
              <span className="num-2">86</span> memebrs
            </h1>
            <p className="text-xs">
              <span className="num-2">57</span> online
            </p>
          </div>
        </div>
      </div>
      {/* end card */}
    </div>
  );
};

export default Dashboard;
