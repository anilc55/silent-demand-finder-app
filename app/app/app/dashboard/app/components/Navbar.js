import Link from "next/link";

export default function Navbar() {
  return (
    <div style={navStyle}>
      <h2>Silent Finder</h2>

      <div>
        <Link href="/" style={linkStyle}>
          Home
        </Link>

        <Link href="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link href="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#000",
  color: "#fff"
};

const linkStyle = {
  marginLeft: "20px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};
