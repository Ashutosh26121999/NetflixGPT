export const checkValidation = (email, password, name = "") => {
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const validatePassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const validateFullName = /^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name);
  if (!validateEmail) return "Email ID is not valid";
  else if (!validatePassword)
    return "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character";
  else if (!validateFullName) return "Name should be valid";
  return null;
};
