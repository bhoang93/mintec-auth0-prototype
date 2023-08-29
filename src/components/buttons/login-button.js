import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  const handleLogin = async () => {
    await loginWithPopup({
      prompt: "login",
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};
