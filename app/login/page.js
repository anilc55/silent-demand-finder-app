"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    // Demo login (later real auth add करेंगे)
    if (email === "admin@gmail.com" && password === "123456") {
      alert("Login Successful ✅");
      router.push("/dashboard");
    } else {
      alert("Wrong Email or Password ❌");
    }
  }

  return (
    <div style={container}>
      <h1>Login</h1>

      <form onSubmit={handleLogin} style={form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const container = {
  textAlign: "center",
  marginTop: "80px"
};

const form = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "15px",
  width: "250px"
};
