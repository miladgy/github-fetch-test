import { useState, useEffect } from "react";
import validate from "../../client/src/validation";

const CaptureInfo = getUser => {
  const [users, setUsers] = useState({});
  const [userData, setUserData] = useState({});
  const [reposNames, setReposNames] = useState([]);
  const [reposStars, setReposStars] = useState([]);
  const [reposLanguage, setReposLanguage] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    repoInfo(userRepos);
  }, [userRepos]);

  const submitName = e => {
    if (e) {
      e.preventDefault();
    }
    if (users.name && /^[a-z\d\s](?:[a-z\d\s]|-(?=[a-z\d\s])){0,38}$/i.test(users.name)) {
      const trimmedUser = users.name.replace(/\s/g, "").toLowerCase();
      getUser(trimmedUser);
      setIsSubmitting(false);
    } else {
      setErrors(validate(users.name));
    }
   
  };

  const handleChange = e => {
    e.persist();
    setUsers(users => ({ ...users, [e.target.name]: e.target.value }));
  };

  getUser = username => {
    fetch(`/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        return fetch(`${data.repos_url}`)
          .then(res => res.json())
          .then(repos => {
            return setUserRepos(repos);
          });
      })
      .catch(err => console.log(err));
  };

  const repoInfo = userRepos => {
    let names = userRepos.map(repo => repo.name);
    setReposNames(names);
    let stars = userRepos.map(repo => repo.stargazers_count);
    setReposStars(stars);
    let language = userRepos.map(repo => repo.language);
    setReposLanguage(language);
  };

  return {
    handleChange,
    submitName,
    users,
    userData,
    reposNames,
    reposStars,
    reposLanguage,
    isSubmitting,
    errors
  };
};

export default CaptureInfo;
