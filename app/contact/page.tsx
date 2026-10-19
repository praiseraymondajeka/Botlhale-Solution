import Link from "next/link";
import LegacyScript from "@/components/legacy-script";

export const metadata = {
  title: "Contact MoneyLot | Subsidiary of Mainstreet Microfinance Bank",
  description:
    "Get in touch with MoneyLot. Located at 1686B Oladele Olashore, Victoria Island, Lagos. Call 070-MONEYLOT or email service@moneylot.com for merchant banking and payment integrations.",
};

export default function ContactPage() {
  return (
    <div className="page-contact min-h-screen">
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
            <ul className="nav-ul">
              <li>
                <Link href="/">Home</Link>
              </li>
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
                <Link href="/contact" className="active">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-cta-d" style={{ display: "flex" }}>
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
        <Link href="/">Home</Link>
        <Link href="/about">About MoneyLot</Link>
        <Link href="/service">Agency Banking</Link>
        <Link href="/#products">Products</Link>
        <Link href="/#developers">Developers</Link>
        <Link href="/contact" className="active">
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

      {/* Page Hero */}
      <section className="page-hero">
        <div className="ph-bg"></div>
        <div className="ph-grid"></div>
        <div className="ph-bar"></div>
        <div className="ph-slice"></div>
        <div className="ph-body">
          <div className="ph-inner">
            <div className="container">
              <div className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">
                  <i className="fas fa-chevron-right"></i>
                </span>
                <span className="cur">Contact &amp; Inquiries</span>
              </div>
              <div className="hero-kicker">
                <span className="dot"></span>Dedicated Merchant &amp; Technical Support 24/7
              </div>
              <h1 className="ph-title">
                Let&apos;s <span className="ac">Connect</span>
                <br />
                Your Business
              </h1>
              <p className="ph-sub">
                Ready to deploy agency banking, integrate our payment gateway API, or open a business account?
                Our team is on standby to assist you promptly.
              </p>
              <div className="ph-actions">
                <Link href="#consult-form" className="btn btn-red">
                  Send an Inquiry <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="tel:07066639568" className="btn btn-ow">
                  <i className="fas fa-phone"></i> Call 070-MONEYLOT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main" id="consult-form">
        <div className="contact-grid">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div className="cip-top">
              <div className="tag">Get In Touch</div>
              <h2>
                Every <em>Merchant Deserves</em>
                <br />
                Dependable Banking
              </h2>
              <p>
                Reach out through any channel. Whether you are an individual merchant, an enterprise retailer, or a fintech developer,
                we are here to support your growth.
              </p>

              <div className="response-badge">
                <div className="rb-dot"></div>
                <div className="rb-text">
                  Average response time: <strong>Under 15 minutes</strong>
                </div>
              </div>

              <div className="c-items">
                <div className="c-item">
                  <div className="c-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="c-label">Email Us</div>
                    <div className="c-val">
                      <Link href="mailto:service@moneylot.com">service@moneylot.com</Link>
                    </div>
                    <div className="c-sub">For merchant onboarding, API keys &amp; account support</div>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div className="c-label">Call Our Hotline</div>
                    <div className="c-val">
                      <Link href="tel:07066639568">070-MONEYLOT</Link>
                    </div>
                    <div className="c-sub">Mon–Sun · 24/7 round-the-clock merchant assistance</div>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">
                    <i className="fas fa-comment-sms"></i>
                  </div>
                  <div>
                    <div className="c-label">Direct SMS Line</div>
                    <div className="c-val">
                      <Link href="sms:09098765432">09098765432</Link>
                    </div>
                    <div className="c-sub">Quick text inquiries and terminal status alerts</div>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="c-label">Headquarters</div>
                    <div className="c-val">1686B Oladele Olashore, Victoria Island, Lagos</div>
                    <div className="c-sub">Nigeria Operations &amp; Technology Hub</div>
                  </div>
                </div>

                <div className="c-item">
                  <div className="c-icon">
                    <i className="fas fa-building-columns"></i>
                  </div>
                  <div>
                    <div className="c-label">Parent Institution</div>
                    <div className="c-val">
                      <Link
                        href="https://mainstreetmfb.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--brand-gold)", textDecoration: "underline" }}
                      >
                        Mainstreet Microfinance Bank
                      </Link>
                    </div>
                    <div className="c-sub">Licensed &amp; regulated banking entity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cip-bottom">
              <div className="cb-label">Coverage &amp; Compliance</div>
              <div className="cb-cities">
                <span>Lagos</span>
                <span>Abuja</span>
                <span>Port Harcourt</span>
                <span>Kano</span>
                <span>Ibadan</span>
                <span>Enugu</span>
                <span>Benin City</span>
                <span>All 36 States</span>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-form-panel">
            <div className="cfp-header">
              <div className="tag">Inquiry Form</div>
              <h3>Send Your Request</h3>
              <p>Fill out the form below and our merchant integration team will connect with you immediately.</p>
            </div>

            <div id="formWrapper">
              {/* Service Type Selection */}
              <div className="f-section">
                <label className="f-sec-label">Select What You Need</label>
                <div className="service-selector">
                  <button type="button" className="ss-btn sel" data-svc="Agency Banking">
                    <i className="fas fa-store"></i>
                    <span>Agency Banking</span>
                  </button>
                  <button type="button" className="ss-btn" data-svc="Payment Gateway">
                    <i className="fas fa-code"></i>
                    <span>Payment Gateway</span>
                  </button>
                  <button type="button" className="ss-btn" data-svc="Business Account">
                    <i className="fas fa-briefcase"></i>
                    <span>Business Account</span>
                  </button>
                  <button type="button" className="ss-btn" data-svc="Debit Card">
                    <i className="fas fa-credit-card"></i>
                    <span>MoneyLot Card</span>
                  </button>
                </div>
                <input type="hidden" id="selectedService" defaultValue="Agency Banking" />
              </div>

              {/* Form Fields */}
              <div className="f-row">
                <div className="f-group">
                  <label htmlFor="firstName">
                    First Name <span className="req">*</span>
                  </label>
                  <input type="text" id="firstName" placeholder="e.g. Tunde" />
                </div>
                <div className="f-group">
                  <label htmlFor="lastName">
                    Last Name <span className="req">*</span>
                  </label>
                  <input type="text" id="lastName" placeholder="e.g. Adeleke" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-group">
                  <label htmlFor="emailField">
                    Email Address <span className="req">*</span>
                  </label>
                  <input type="email" id="emailField" placeholder="tunde@business.ng" />
                </div>
                <div className="f-group">
                  <label htmlFor="phoneField">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input type="tel" id="phoneField" placeholder="e.g. 08012345678" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-group">
                  <label htmlFor="companyField">
                    Business / Store Name <span className="req">*</span>
                  </label>
                  <input type="text" id="companyField" placeholder="e.g. Yaba Superstores Ltd" />
                </div>
                <div className="f-group">
                  <label htmlFor="jobField">Your Role</label>
                  <input type="text" id="jobField" placeholder="e.g. Store Owner / Developer" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-group">
                  <label htmlFor="sectorField">
                    Industry Sector <span className="req">*</span>
                  </label>
                  <select id="sectorField" defaultValue="">
                    <option value="" disabled>
                      Select Industry
                    </option>
                    <option value="Retail & Supermarket">Retail &amp; Supermarket</option>
                    <option value="Fintech & Software">Fintech &amp; Software</option>
                    <option value="Logistics & Transport">Logistics &amp; Transport</option>
                    <option value="Hospitality & Food">Hospitality &amp; Food</option>
                    <option value="Pharmacy & Health">Pharmacy &amp; Health</option>
                    <option value="General Commerce">General Commerce</option>
                  </select>
                </div>
                <div className="f-group">
                  <label htmlFor="sourceField">How Did You Hear About Us?</label>
                  <select id="sourceField" defaultValue="">
                    <option value="" disabled>
                      Select Channel
                    </option>
                    <option value="Google / Search">Google / Search</option>
                    <option value="Existing MoneyLot Agent">Existing MoneyLot Agent</option>
                    <option value="Mainstreet Microfinance Bank">Mainstreet Microfinance Bank</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral / Word of Mouth</option>
                  </select>
                </div>
              </div>

              <div className="f-group">
                <label htmlFor="messageField">
                  Details / Questions <span className="req">*</span>
                </label>
                <textarea
                  id="messageField"
                  rows={4}
                  placeholder="Tell us about your business location, current daily transaction volume, or payment gateway needs..."
                ></textarea>
              </div>

              <div className="consent-check" style={{ marginTop: "14px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <input type="checkbox" id="consentBox" style={{ marginTop: "4px" }} />
                <label htmlFor="consentBox" style={{ fontSize: "0.82rem", color: "var(--mid)", lineHeight: "1.5" }}>
                  I confirm that the information provided is accurate and consent to MoneyLot contacting me regarding financial services and merchant onboarding.
                </label>
              </div>

              <button
                type="button"
                id="submitBtn"
                className="btn btn-red"
                style={{ width: "100%", marginTop: "24px", justifyContent: "center" }}
              >
                Send Inquiry <i className="fas fa-arrow-right s-icon"></i>
              </button>
            </div>

            {/* Success State */}
            <div id="formSuccess" className="form-success" style={{ display: "none" }}>
              <div className="succ-icon">
                <i className="fas fa-check-circle" style={{ fontSize: "3rem", color: "#27c93f" }}></i>
              </div>
              <h3 style={{ fontSize: "1.5rem", marginTop: "16px" }}>Inquiry Submitted!</h3>
              <p style={{ color: "var(--mid)", marginTop: "8px" }}>
                Thank you for reaching out. We have received your request and our merchant onboarding team will contact{" "}
                <span id="successEmail" style={{ fontWeight: 700, color: "var(--brand-navy)" }}></span> shortly.
              </p>
              <div id="refNum" style={{ fontSize: "0.85rem", color: "var(--brand-gold)", fontWeight: 700, marginTop: "12px" }}></div>
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
              <div className="sr">
                <Link href="#" className="so" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#" className="so" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="so" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="so" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
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
                <li>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.moneylot.agent&hl=en&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get the Agent App
                  </Link>
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
                  <Link href="/#faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="https://mainstreetmfb.com/" target="_blank" rel="noreferrer">
                    Mainstreet MFB
                  </Link>
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
                <i className="fas fa-comment-sms"></i>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>SMS 09098765432</span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <Link href="mailto:service@moneylot.com" style={{ color: "rgba(255,255,255,0.7)" }}>
                  service@moneylot.com
                </Link>
              </p>

              <div style={{ marginTop: "16px" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--brand-gold)", fontWeight: 700, marginBottom: "4px" }}>
                  Money tips &amp; member deals
                </div>
                <div className="nlf">
                  <input type="email" id="nle" placeholder="Your email address" />
                  <button id="nlb">Subscribe</button>
                </div>
              </div>
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

      <LegacyScript src="/scripts/contact.js" />
    </div>
  );
}
