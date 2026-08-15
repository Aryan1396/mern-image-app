import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  // Auth context and navigation
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // form handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to see your private gallery">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Alert>{error}</Alert>

        {/* Email field */}
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        {/* Password field */}
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />

        {/* Submit button */}
        <Button type="submit" loading={loading} className="mt-2 w-full">
          Sign in
        </Button>
      </form>

      {/* Link to registration page */}
      <p className="mt-6 text-center text-sm text-ink/50">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-medium text-accent hover:underline">
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
}
