import { useAuth } from "../context/AuthContext";
import Button from "./Button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 border-b border-ink/5 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="font-serif text-xl font-semibold tracking-tight text-ink">
          Your <span className="text-accent">Gallery</span>
        </h1>
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-ink/60">Hi, {user.name}</span>
            <Button variant="ghost" onClick={logout}>
              Sign out
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
