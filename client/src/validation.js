const validation = (username) => {
    let errors = {};
    if (username === undefined || username === null) {
      errors.message = "You need to enter a username!";
    }
    if (/^[a-z\d\s](?:[a-z\d\s]|-(?=[a-z\d\s])){0,38}$/i.test(username) === false) {
      errors.message = 'Username is Invalid!';
    }
    return errors;
  };
  
  export default validation;