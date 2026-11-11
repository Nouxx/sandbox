import "./header.css";

export default function HeaderPage() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <div className="actions">
          <a href="#">Home</a> · <a href="#">About</a> · <a href="#">Blog</a> ·{" "}
          <a href="#">Pricing</a> · <a href="#">Contact</a> · <a href="#">Sign in</a>
        </div>
        <button className="mobile-actions">Burger menu</button>
      </nav>
    </div>
  );
}
