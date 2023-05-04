import React, { useId } from "react";

const UserID = () => {
  const passwordHintId = useId();

  return (
    <div>
      <h2 className="h2">UserID</h2>
      <div className="card">
        <div className="bg-pink-400 p-3 mt-3">
          <>
            <label>
              Password:
              <input type="password" aria-describedby={passwordHintId} />
            </label>
            <p id={passwordHintId}>
              The password should contain at least 18 characters{" "}
              {passwordHintId}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default UserID;
