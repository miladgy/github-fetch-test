const validation = (username, userData) => {
    let errors = {};
    if (username === undefined || username === null) {
      errors.message = "You need to enter a username!";
    }
    return errors;
  };
  
  export default validation;