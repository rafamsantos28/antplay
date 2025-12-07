// url=https://github.com/rafamsantos28/antplay-plus/blob/main/src/pages/Login.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, pass);
        window.location.href = "/";
      } else {
        await createUserWithEmailAndPassword(auth, email, pass);
        window.location.href = "/";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem max-width: 320px; margin:auto;" }}>
      <h2>{mode === "login" ? "Iniciar sessão" : "Criar Conta"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ display:"block", margin:"8px 0", padding:"8px", width:"100%" }} />
        <input type="password" placeholder="Palavra-passe" value={pass} onChange={e => setPass(e.target.value)} required style={{ display:"block", margin:"8px 0", padding:"8px", width:"100%" }} />
        <button className="btn-primary" type="submit">{mode === "login" ? "Iniciar sessão" : "Criar Conta"}</button>
      </form>
      <button style={{ marginTop: 12 }} onClick={() => setMode(mode === "login" ? "register" : "login")}>
        {mode === "login" ? "Não tens conta? Cria uma agora!" : "Já tens conta? Inicia sessão!"}
      </button>
      {error && <div style={{ color: "#ba852a", marginTop: 10 }}>{error}</div>}
    </div>
  );
};

export default Login;
