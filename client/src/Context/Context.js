import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Context.css";

const Context = ({ props }) => {
  const {
    avatar_url,
    name,
    login,
    followers,
    following,
    public_repos,
    reposNames,
    reposStars,
    reposLanguage
  } = props;
  let items = [];
  for (let i = 0; i < reposNames.length; i++) {
    items.push(
      `name: ${reposNames[i]}, stars: ${reposStars[i]} and language: ${reposLanguage[i]}`
    );
  }
  return (
    <ScrollToBottom>
      <img className={!avatar_url ? "hidden" : "avatar"} src={avatar_url} />
      <p className={!name ? "hidden" : "context"}>name: {name}</p>
      <p className={!login ? "hidden" : "context"}>username: {login}</p>
      <p className={!followers ? "hidden" : "context"}>How many followers? {followers}</p>
      <p className={!following ? "hidden" : "context"}>How many followings? {following}</p>
      <p className={!public_repos ? "hidden" : "context"}>How many public repos? {public_repos}</p>
      <p className={reposNames.length === 0 ? "hidden" : "context"}>
        <strong>All Repos Info:</strong>{" "}
        {items.map(i => (
          <p key={i}>{i}</p>
        ))}
      </p>
    </ScrollToBottom>
  );
};

export default Context;
