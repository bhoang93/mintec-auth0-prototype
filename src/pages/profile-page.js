import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { PageLayout } from "../components/page-layout";

export const ProfilePage = () => {
  const { user } = useAuth0();
  const [canViewChickenPrices, setCanViewChickenPrices] = useState(false);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 🔒");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://dev-brian-codurance.eu.auth0.com/api/v2/users/google-oauth2%7C103558453299619115362/permissions", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result[0].permission_name === "read:chickenprices") setCanViewChickenPrices(true);
      })
      .catch(error => console.log('error', error));
  }, [])

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            {
              canViewChickenPrices ? <div>🐔 $12.59</div> : <div>You are not allowed to view the prices of chickens</div>
            }
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
