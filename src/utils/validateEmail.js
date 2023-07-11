const validateEmail = (email) => {
    // Validate email address format
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  export default validateEmail;