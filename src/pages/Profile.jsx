
import  { useState } from "react";
import "../css/Profile.css";

const SECTIONS = [
  { key: "profile", label: "Profile", icon: "👤" },
  { key: "notifications", label: "Notifications", icon: "🔔" },
  { key: "password", label: "Change Password", icon: "🔒" },
  { key: "help", label: "Help & Support", icon: "🕐" },
];

export default function Profile({
  user = {
    fullName: "Sahiba Parveen",
    email: "sahiba@gmail.com",
    dob: "10 Jul 2003",
    gender: "Female",
  },
  onNavigate = () => {},
}) {
  const [active, setActive] = useState("profile");
  const initial = user.fullName.charAt(0);

  return (
    <div className="dyp">
      <nav className="dyp-nav">
        <div className="dyp-nav__brand">
          <span>🌿</span> Decode Your Plate
        </div>

        <ul className="dyp-nav__links">
          {["Home", "Add Food", "History", "Reports"].map((l) => (
            <li key={l}>
              <button onClick={() => onNavigate(l.toLowerCase().replace(" ", ""))}>{l}</button>
            </li>
          ))}
        </ul>

        <button className="dyp-nav__user" onClick={() => onNavigate("profile")}>
          {user.fullName.split(" ")[0]}
          <span className="dyp-nav__avatar">{initial}</span>
        </button>
      </nav>

      <main className="dyp-page">
        <div className="dyp-profile-shell">
          <aside className="dyp-side">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.key}>
                  <button
                    className={active === s.key ? "is-active" : ""}
                    onClick={() => setActive(s.key)}
                  >
                    <span>{s.icon}</span> {s.label}
                  </button>
                </li>
              ))}
              <li>
                <button className="is-danger" onClick={() => onNavigate("home")}>
                  <span>⏻</span> Logout
                </button>
              </li>
            </ul>
          </aside>

          <section className="dyp-content">
            {active === "profile" ? (
              <>
                <div className="dyp-profile-header">
                  <h2>Profile Information</h2>
                  <button className="dyp-btn dyp-btn--outline">Edit</button>
                </div>

                <div className="dyp-profile-card">
                  <div className="dyp-profile-photo">{initial}</div>
                  <div>
                    <h3>{user.fullName}</h3>
                    <p>{user.email}</p>
                  </div>
                </div>

                <div className="dyp-field-grid">
                  <div className="dyp-field">
                    <label>Full Name</label>
                    <div className="dyp-field__value">{user.fullName}</div>
                  </div>
                  <div className="dyp-field">
                    <label>Email</label>
                    <div className="dyp-field__value">{user.email}</div>
                  </div>
                  <div className="dyp-field">
                    <label>Date of Birth</label>
                    <div className="dyp-field__value">{user.dob}</div>
                  </div>
                  <div className="dyp-field">
                    <label>Gender</label>
                    <div className="dyp-field__value">{user.gender}</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="dyp-profile-header">
                  <h2>{SECTIONS.find((s) => s.key === active)?.label}</h2>
                </div>
                <p className="dyp-placeholder">This section is a placeholder — connect it to your app's data.</p>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
