import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/20 border-t-accent" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
