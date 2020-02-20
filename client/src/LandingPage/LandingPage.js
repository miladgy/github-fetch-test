import React from "react";
import "./LandingPage.css";
import Input from "../Input/Input";
import Context from "../Context/Context";
import CaptureInfo from "../captureInfo";
import Errors from "../Errors/Errors"


const LandingPage = () => {
  const {
    handleChange,
    submitName,
    users,
    userData,
    reposNames,
    reposStars,
    reposLanguage,
    isSubmitting, errors
  } = CaptureInfo();


  const {
    avatar_url,
    name,
    login,
    followers,
    following,
    public_repos
  } = userData;
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h2 className="heading">Github Info</h2>
        <form className="form" onSubmit={submitName} noValidate>
          {isSubmitting && <Input users={users} handleChange={handleChange} />}
        </form>
        <div>
          {!isSubmitting && (
            <Context
              props={{
                avatar_url,
                name,
                login,
                followers,
                following,
                public_repos,
                reposNames,
                reposStars,
                reposLanguage
              }}
            />
          )}
          {isSubmitting && <Errors errors={errors} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
