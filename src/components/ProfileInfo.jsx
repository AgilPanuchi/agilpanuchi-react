import React, { useState } from "react";
import { profileInfo } from "../data/index";

const ProfileInfo = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [error, setError] = useState("");

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(value)) {
      setUserName(value);
      setError("");
    } else {
      setError("Please enter only letters.");
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    if (userName.trim()) {
      setIsNameEntered(true);
    }
  };

  return (
    <>
      {!isNameEntered ? (
        <form onSubmit={handleNameSubmit} className="text-start pt-5 mt-4">
          <h2>May I know your name?</h2>
          <input type="text" value={userName} onChange={handleNameChange} className="form-control" placeholder="Enter your name (letters only)" maxLength={40} />
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary mt-3" disabled={!userName.trim() || !!error}>
            Submit
          </button>
        </form>
      ) : (
        profileInfo.map((info) => (
          <div key={info.id}>
            <h1 className="text-start pt-5 mt-4">
              Hi,{" "}
              <span id="user-name" title={userName} className="textUngu text-capitalize">
                {userName.length > 21 ? `${userName.substring(0, 21)}...` : userName}
              </span>
            </h1>
            <h2 className="text-start ps-4 userName">
              I'm, <span className="textUngu">{info.name} </span> .It's great to meet you!
            </h2>
            <figcaption className="text-start pt-5 pb-3 lh-lg">
              <>
                {showFullText ? info.bio : `${info.bio.substring(0, 214)}`}
                <div className="text-start mt-1">
                  <button onClick={toggleText} className="btn btnUngu p-0">
                    {showFullText ? "Baca lebih sedikit" : "Baca lebih lengkap"}
                  </button>
                </div>
              </>
            </figcaption>
          </div>
        ))
      )}
    </>
  );
};

export default ProfileInfo;
