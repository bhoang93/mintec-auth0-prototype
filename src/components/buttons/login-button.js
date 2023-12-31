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

  const handleLoginGoogleOnly = async () => {
    await loginWithPopup({
      prompt: "login",
      connection: "google-oauth2",
      appState: {
        returnTo: "/profile",
      },
    });
  };

  // const LoginModal = () => {
  //   return(
  //     <div style={{ position: "absolute", top: 250, left: 750, zIndex: 999 }}>
  //     <iframe src="https://dev-brian-codurance.eu.auth0.com/authorize?response_type=token&client_id=DH8mvZrs37rADw5hH0zUQ9qdbH4ilbHr&redirect_uri=https://mintec-auth0-prototype.vercel.app/callback" title="login" />
  //     </div>
  //   )
  // }

  // const [showLoginModal, toggleLoginModal] = useState(false);

  return (
    <div>
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
    <button className="button__login" onClick={handleLoginGoogleOnly}>
      Log In with Google Only
    </button>
    {/* {
      showLoginModal && <LoginModal />
    } */}
    </div>
  );
};
