import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "src/components/ui/field";
import { Input } from "src/components/ui/input";

export function SignupForm({
  handleSubmit,
  email,
  setEmail,
  password,
  handlePasswordChange,
  passwordStrength,
  error,
  ...props
}) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
              />
            </Field>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {passwordStrength.messages && (
              <div className="password-strength">
                <ul>
                  {passwordStrength.messages.map((msg, i) => (
                    <li key={i} className="text-sm text-red-600">
                      {msg}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
