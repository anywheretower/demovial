"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const CORRECT_PASSWORD = "nora2026";
const STORAGE_KEY = "vial-auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (checking) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-heading text-2xl font-bold">Documento confidencial</h1>
          <p className="text-sm text-muted">Ingrese la clave para acceder a la propuesta.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Clave de acceso"
              autoFocus
              className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-center text-base text-text outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-center text-sm text-red-500"
              >
                Clave incorrecta
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Ingresar
          </button>
        </form>
      </motion.div>
    </div>
  );
}
