export const validatePassword = (password) => {
  const checks = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const strength = Object.values(checks).filter(Boolean).length;
  const messages = [];

  if (!checks.minLength) messages.push("At least 8 characters");
  if (!checks.hasUpperCase) messages.push("One uppercase letter");
  if (!checks.hasLowerCase) messages.push("One lowercase letter");
  if (!checks.hasNumber) messages.push("One number");
  if (!checks.hasSpecialChar) messages.push("One special character");

  return {
    isValid: strength >= 4,
    strength, // 0-5
    score: Math.floor((strength / 5) * 100),
    messages,
  };
};
