export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>
      <p>Welcome Anil Chauhan 👋</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div style={cardStyle}>
          <h3>Search Trends</h3>
          <p>Analyze trending keywords</p>
        </div>

        <div style={cardStyle}>
          <h3>Content Ideas</h3>
          <p>Discover viral topics</p>
        </div>

        <div style={cardStyle}>
          <h3>Reports</h3>
          <p>Download insights</p>
        </div>

        <div style={cardStyle}>
          <h3>AI Analysis</h3>
          <p>Smart demand prediction</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "8px",
  background: "#fafafa"
};
