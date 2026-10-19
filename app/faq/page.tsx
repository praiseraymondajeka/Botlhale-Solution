import Link from "next/link";
import LegacyScript from "@/components/legacy-script";

export const metadata = {
  title: "Frequently Asked Questions | MoneyLot",
  description:
    "Find answers to frequently asked questions about MoneyLot agency banking, merchant registration, payment gateway API, debit cards, and verification.",
};

export default function FAQPage() {
  return (
    <div className="page-home min-h-screen">
      {/* Header */}
      <header id="hdr">
        <div className="container">
          <nav className="ni">
            <Link href="/" className="logo">
              <div className="lm brand-mark" aria-label="MoneyLot mark">
                ML
              </div>
              <div className="lt">
                <div className="br">MONEYLOT</div>
                <div className="sb">Subsidiary of Mainstreet MFB</div>
              </div>
            </Link>
            <ul className="nl">
              <li>
                <Link href="/about">About MoneyLot</Link>
              </li>
              <li>
                <Link href="/service">Agency Banking</Link>
              </li>
              <li>
                <Link href="/#products">Products</Link>
              </li>
              <li>
                <Link href="/#developers">Developers</Link>
              </li>
              <li>
                <Link href="/faq" style={{ color: "var(--brand-gold)" }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="nav-cta-btn" style={{ display: "flex" }}>
              <Link
                href="https://moneylot.ng/register"
                target="_blank"
                rel="noreferrer"
                className="btn btn-red"
              >
                Open an Account <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hbg" id="hbg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mm" id="mm">
        <Link href="/" className="ml">
          Home
        </Link>
        <Link href="/about" className="ml">
          About MoneyLot
        </Link>
        <Link href="/service" className="ml">
          Agency Banking
        </Link>
        <Link href="/#products" className="ml">
          Products
        </Link>
        <Link href="/#developers" className="ml">
          Developers
        </Link>
        <Link href="/faq" className="ml">
          FAQs
        </Link>
        <Link href="/contact" className="ml">
          Contact
        </Link>
        <Link
          href="https://moneylot.ng/register"
          target="_blank"
          rel="noreferrer"
          className="btn btn-red"
          style={{ marginTop: "12px" }}
        >
          Open an Account
        </Link>
      </div>

      {/* Hero Section */}
      <section className="sp" style={{ background: "linear-gradient(180deg, #00234f 0%, #001736 100%)", color: "#fff", paddingTop: "150px", paddingBottom: "70px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "750px" }}>
          <div className="tag" style={{ color: "var(--brand-gold)", justifyContent: "center" }}>
            Help &amp; Answers
          </div>
          <h1 style={{ fontFamily: "var(--ff-d)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#fff", marginBottom: "16px", lineHeight: "1.1" }}>
            Frequently Asked <em>Questions</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: "1.7" }}>
            Helpful answers before you apply. Speak with MoneyLot for current eligibility, coverage, and commercial terms.
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="sp" style={{ background: "var(--off)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="faq-card">
            <h4>
              <span>What is MoneyLot?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              MoneyLot gives businesses, fintech companies and individuals the financial infrastructure to bank, take payments,
              lend, save and invest. MoneyLot is a subsidiary of Mainstreet Microfinance Bank.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>How do I become a MoneyLot merchant?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              Provide your details on our registration portal and our team will guide you through the required information,
              including BVN verification and supporting documents. Once approved, you can start transacting on web or terminal immediately.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>What documents will I need?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              You will need a valid government-issued ID (NIN, Voter&apos;s Card, International Passport, or Driver&apos;s License),
              your Bank Verification Number (BVN), a recent utility bill as proof of business address, and CAC registration documents for registered businesses.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>Which areas does MoneyLot currently serve?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              MoneyLot serves merchants, businesses, and customers across all 36 states of Nigeria and the Federal Capital Territory (FCT).
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>What if I experience a problem with a POS device?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              Our dedicated merchant support and field operations teams provide 24/7 technical assistance, prompt troubleshooting,
              and fast hardware swaps so your business never experiences counter downtime.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>How long does verification take?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              Thanks to automated instant identity checks, most people and businesses are verified on the spot within minutes.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>Do I need to activate my account before using it?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              Once your account is verified, it is ready to use immediately. Simply fund your account to start making transfers,
              accepting deposits, paying bills, and earning commissions.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>How do settlements work for merchants?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              MoneyLot features real-time, instant settlements. Supported merchant funds land directly in your account without unnecessary delay,
              ensuring your daily cash flow stays fluid.
            </p>
          </div>

          <div className="faq-card">
            <h4>
              <span>Can developers integrate the Payment Gateway API easily?</span>
              <i className="fas fa-question-circle" style={{ color: "var(--brand-gold)", fontSize: "1rem" }}></i>
            </h4>
            <p>
              Yes! You can add payments to your app or e-commerce website in an afternoon with clean SDKs for JavaScript/TypeScript,
              Python, PHP, and Go. Real-time webhooks notify your server of successful settlements automatically.
            </p>
          </div>

          {/* Need more help banner */}
          <div style={{ marginTop: "40px", padding: "36px", background: "#fff", borderRadius: "8px", border: "1px solid var(--border)", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--ff-d)", fontSize: "1.8rem", color: "var(--brand-navy)", marginBottom: "8px" }}>
              Still Have Questions?
            </h3>
            <p style={{ color: "var(--mid)", marginBottom: "20px" }}>
              Our dedicated support team is available 24/7 to walk you through any requirements or answer commercial questions.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-red">
                Contact Our Team <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="tel:07066639568" className="btn btn-ob">
                <i className="fas fa-phone"></i> Call 070-MONEYLOT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="fm">
            <div className="fb">
              <div className="lm brand-mark" style={{ marginBottom: "16px" }}>
                ML
              </div>
              <p>
                Banking, payments and lending for Nigerian businesses and the people behind them.
                MoneyLot is a proud subsidiary of{" "}
                <Link
                  href="https://mainstreetmfb.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--brand-gold)", textDecoration: "underline" }}
                >
                  Mainstreet Microfinance Bank
                </Link>
                .
              </p>
            </div>

            <div className="fc2">
              <h5>Products</h5>
              <ul>
                <li>
                  <Link href="/#products">Business Account</Link>
                </li>
                <li>
                  <Link href="/#developers">Payment Gateway</Link>
                </li>
                <li>
                  <Link href="/service">Agency Banking</Link>
                </li>
                <li>
                  <Link href="/#mobile-card">MoneyLot Debit Card</Link>
                </li>
              </ul>
            </div>

            <div className="fc2">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link href="/about">About MoneyLot</Link>
                </li>
                <li>
                  <Link href="/service">Agency Banking</Link>
                </li>
                <li>
                  <Link href="/#developers">Developers</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="fc2 ci2">
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-map-marker-alt"></i>1686B Oladele Olashore, Victoria Island, Lagos
              </p>
              <p>
                <i className="fas fa-phone-alt"></i>
                <Link href="tel:07066639568" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Call 070-MONEYLOT
                </Link>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <Link href="mailto:service@moneylot.com" style={{ color: "rgba(255,255,255,0.7)" }}>
                  service@moneylot.com
                </Link>
              </p>
            </div>
          </div>

          <div className="fb2">
            <p>© 2026 MoneyLot. All rights reserved. MoneyLot is a subsidiary of Mainstreet Microfinance Bank.</p>
            <div className="lg">
              <Link href="https://moneylot.ng/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </Link>
              <Link href="https://moneylot.ng/terms-and-conditions" target="_blank" rel="noreferrer">
                Terms and Conditions
              </Link>
              <Link href="https://mainstreetmfb.com/" target="_blank" rel="noreferrer">
                Mainstreet MFB
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="bt" id="bt">
        <i className="fas fa-chevron-up"></i>
      </div>

      <LegacyScript src="/scripts/index.js" />
    </div>
  );
}
