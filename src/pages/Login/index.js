import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log("ok", res))
      .catch((erro) => {
        console.log("erro", erro)
      })
      .finally(() => {
        setLoading(false)
      })
  } 

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black", 
        borderRadius: 16,
        padding: "20px 30px",
      }}>
        <p style={{
          fontWeight: "bold",
          fontSize: 30,
          paddingBottom: 10
        }}>
          Login
        </p>

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='E-mail'
          style={{
            padding: "6px 10px",
            fontSize: 20,
            borderRadius: 8,
            marginBottom: 10
          }}
          type="email"
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Senha'
          style={{
            padding: "6px 10px",
            fontSize: 20,
            borderRadius: 8,
            marginBottom: 10
          }}
          type="password"
        />

        <button 
          onClick={handleOnClick} 
          type='button'
          disabled={!email || !password || loading}
          style={{
            height: "100%",
            backgroundColor: "blue",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            borderRadius: 8, 
            padding: 10,
            opacity: (!email || !password || loading) ? 0.5 : 1,
          }}
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </div>
    </div>
  )
}

export default Login
