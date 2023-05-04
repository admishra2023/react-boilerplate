import React from "react";
import MyInput from "../../../components/V18/MyInput";

const InputField = () => {
  return (
    <>
      <h1 className="h5">Input Field Component</h1>
      <p>Use cleopatra custom alerts styles for actions , notifcations etc.</p>
      <p>
        so far there's just 3 type of alerts feel free to submit a pull request
      </p>
      <hr className="my-5" />
      <div className="card">
        <MyInput />
      </div>
    </>
  );
};

export default InputField;
