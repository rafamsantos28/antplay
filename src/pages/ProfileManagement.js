// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/ProfileManagement.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const defaultProfiles = [
  { id: "main", name: "Adulto", icon: "😀" },
  { id: "kids", name: "Junior", icon: "🦄" }
];
  
const ProfileManagement = () => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState(defaultProfiles);

  React.useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Perfis</h2>
      {!user ? (
        <p>Inicia sessão para veres e editares os teus perfis.</p>
      ) : (
        <div style={{display:"flex",gap:"40px"}}>
          {profiles.map(profile => (
            <div className="card" key={profile.id}>
              <span style={{ fontSize:"3rem" }}>{profile.icon}</span>
              <div>{profile.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileManagement;
