export const metadata = {
  title: "Silent Demand Finder - Anil Chauhan",
  description: "Find hidden content demand before others"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
