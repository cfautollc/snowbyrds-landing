"use client";

import { useState } from "react";

interface EmailCaptureProps {
  showRoleButtons?: boolean;
  placeholder?: string;
  buttonText?: string;
  size?: "default" | "large";
}

export default function EmailCapture({
  showRoleButtons = false,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  size = "default",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<"guest" | "host" | null>(
    null
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call - replace with your actual waitlist API
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks for joining! We'll be in touch soon.");
      setEmail("");
      setSelectedRole(null);

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }, 1000);
  };

  const inputSizeClasses =
    size === "large" ? "px-6 py-4 text-lg" : "px-4 py-3 text-base";

  const buttonSizeClasses =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {showRoleButtons && (
          <div className="flex gap-3 justify-center mb-2">
            <button
              type="button"
              onClick={() => setSelectedRole("guest")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedRole === "guest"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              I'm a Guest
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("host")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedRole === "host"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              I'm a Host
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === "loading" || status === "success"}
            className={`flex-1 ${inputSizeClasses} rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`${buttonSizeClasses} bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap shadow-lg shadow-primary/25`}
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
              ? "✓ Joined!"
              : buttonText}
          </button>
        </div>

        {message && (
          <p
            className={`text-sm text-center font-medium ${
              status === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
