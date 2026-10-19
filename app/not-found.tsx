import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | MoneyLot",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="page-home min-h-screen flex items-center justify-center" style={{ background: "var(--brand-navy-dark)", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "30px" }}>
      <div className="lm brand-mark" style={{ width: "60px", height: "60px", fontSize: "24px", marginBottom: "24px" }}>
        ML
      </div>
      <h1 style={{ fontFamily: "var(--ff-d)", fontSize: "4rem", color: "var(--brand-gold)", marginBottom: "12px", lineHeight: 1 }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px", color: "#fff" }}>
        Page Not Found
      </h2>
      <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "460px", marginBottom: "32px", lineHeight: "1.6" }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn btn-red" style={{ background: "var(--brand-gold)", color: "var(--brand-navy-dark)", fontWeight: 700 }}>
        Return to MoneyLot Home <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
}
