import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, User } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useApp } from "@/context/AppContext";

export function LoginForm() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errorKey, setErrorKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const fail = (message: string) => {
    setError(message);
    setErrorKey((key) => key + 1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setError("");

    if (!username.trim() || !password) {
      fail("Please enter both your username and password.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      if (login(username, password)) {
        navigate({ to: "/menu" });
      } else {
        setLoading(false);
        fail("Invalid username or password. Please try again.");
      }
    }, 550);
  };

  return (
    <div className="animate-fade-up mx-auto w-full max-w-sm">
      <Logo />

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sign in to browse the menu and build your order.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        <div>
          <label htmlFor="username" className="text-sm font-medium text-foreground">
            Username
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-card px-3.5 transition-colors duration-200 focus-within:border-primary">
            <User className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id="username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
              aria-invalid={Boolean(error)}
              className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-input bg-card px-3.5 transition-colors duration-200 focus-within:border-primary">
            <Lock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              aria-invalid={Boolean(error)}
              className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Eye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div aria-live="polite" className="min-h-5">
          {error && (
            <p
              key={errorKey}
              className="animate-shake flex items-start gap-1.5 text-sm font-medium text-destructive"
            >
              <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {loading ? "Signing in…" : "Login"}
        </button>
      </form>

      <p className="mt-6 rounded-xl bg-secondary/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        Demo credentials — username <span className="font-semibold text-foreground">admin</span>,
        password <span className="font-semibold text-foreground">admin123</span>
      </p>
    </div>
  );
}
