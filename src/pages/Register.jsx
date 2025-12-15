import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "src/components/ui/singup-form";
import { useAuth } from "src/context/Auth";
import { validatePassword } from "src/utils/passwordValidator";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { register, user, loading } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  const handlePasswordChange = (password) => {
    setPassword(password);
    setPasswordStrength(validatePassword(password));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const result = await register(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Registration failed.");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <SignupForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        handlePasswordChange={handlePasswordChange}
        passwordStrength={passwordStrength}
        error={error}
      />
    </div>
  );
}

export default Register;
