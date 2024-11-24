export function validatePassword(password) {
    const errors = [];
  
    if (password.length < 8 || password.length >= 15) {
      errors.push("Password must be at least 8 characters and less than 15 characters.");
    }
    if (!/^[A-Z]/.test(password)) {
      errors.push("Password must start with an uppercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if ((password.match(/[a-z]/g) || []).length < 2) {
      errors.push("Password must include at least two lowercase letters.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must include at least one numeric value.");
    }
    if (!/_/.test(password)) {
      errors.push("Password must include the character '_'.");
    }
  
    return errors;
  }
  