import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { SITE_PASSWORD } from "@/lib/site-password";

// No session storage: the gate is intentionally re-locked on every visit.
export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value === SITE_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setValue("");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <main className="birthday-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="birthday-glass">
        <div className="tiny-hearts" aria-hidden="true">
          <span>♡</span><span>♡</span><span>♡</span>
        </div>

        <div className="question-wrap">
          <p className="eyebrow">a little something private</p>
          <h1 className="birthday-title">psst... password?</h1>
          <p className="birthday-subtitle">only the birthday girl gets in ✨</p>
        </div>

        <form className="gate-form" onSubmit={submit}>
          <div className="gate-password-wrap">
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setError(false);
              }}
              autoFocus
              aria-label="Password"
              placeholder="enter password"
              className="w-full max-w-xs rounded-full border border-white/50 bg-white/40 px-5 py-3 text-center text-base text-foreground shadow-inner outline-none backdrop-blur placeholder:text-muted-foreground focus:border-primary/60"
            />
            <button
              type="button"
              className="gate-toggle"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <Button type="submit" className="glass-button yes-button">
            unlock <span aria-hidden="true">🩷</span>
          </Button>
{error && (
            <p className="gate-error" role="status">
              nope, not it 😼 try again
            </p>
          )}
        </form>
      </section>

      <p className="footer-note">made with a suspicious amount of love</p>
    </main>
  );
}
