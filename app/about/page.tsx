import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = {
  title: "About MoneyLot | Subsidiary of Mainstreet Microfinance Bank",
  description:
    "Learn about MoneyLot, a subsidiary of Mainstreet Microfinance Bank delivering intelligent financial infrastructure, agency banking, and payment solutions across Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="page-about min-h-screen">
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
            <ul className="nl-nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about" className="active">
                  About MoneyLot
                </Link>
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
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="nav-cta-d">
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
        <Link href="/about" className="ml active">
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

      {/* Page Hero */}
      <section className="page-hero">
        <div className="ph-bg"></div>
        <div className="ph-bar"></div>
        <div className="ph-slice"></div>
        <div className="ph-grid"></div>
        <div className="container ph-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">
              <i className="fas fa-chevron-right"></i>
            </span>
            <span className="curr">About MoneyLot</span>
          </div>
          <h1 className="ph-title">
            About <span>Money</span>
            <br />
            Lot
          </h1>
          <p className="ph-sub">
            A subsidiary of Mainstreet Microfinance Bank — providing intelligent financial infrastructure, everyday merchant banking, and payments across Nigeria.
          </p>
        </div>
        <div className="ph-border" style={{ width: "100%", position: "absolute", bottom: "0", left: "0" }}></div>
      </section>

      {/* Introduction */}
      <section className="sp" id="about">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-visual rl">
              <div className="ca"></div>
              <div className="intro-img">
                <Image
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070"
                  alt="MoneyLot Financial Infrastructure"
                  width={1200}
                  height={800}
                  unoptimized={true}
                />
                <div className="ca2"></div>
              </div>
              <div className="intro-badge">
                <div className="big">100%</div>
                <div className="sm">
                  Bank<br />
                  Backed
                </div>
              </div>
            </div>

            <div className="intro-copy rr">
              <div className="tag">Who We Are</div>
              <h2 className="h2">
                Money<em>Lot</em>
              </h2>
              <p>
                MoneyLot is a proud subsidiary of <strong>Mainstreet Microfinance Bank</strong>. We give businesses, fintech companies, and individuals the robust financial infrastructure to bank, take payments, lend, save, and invest.
              </p>
              <p>
                Whether you run a neighbourhood retail store in Yaba, a nationwide distribution network, or you&apos;re saving for your first apartment, MoneyLot designs connected, accessible tools to power your financial journey.
              </p>
              <p>
                Through nationwide Agency Banking, developer-friendly payment APIs, secured debit cards, and real-time merchant settlement, we make everyday banking simpler, closer, and more rewarding.
              </p>

              <div className="feat-badges">
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Mainstreet MFB Backing</span>
                </div>
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-globe-africa"></i>
                  </div>
                  <span>36 States Coverage</span>
                </div>
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <span>Instant Settlements</span>
                </div>
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>Instant Identity Checks</span>
                </div>
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <span>Modern Payment API</span>
                </div>
                <div className="fb-item">
                  <div className="fb-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>24/7 Merchant Support</span>
                </div>
              </div>

              <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="https://moneylot.ng/register"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-red"
                >
                  Create Account <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/service" className="btn btn-ob">
                  Agency Banking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Strip */}
      <section className="mvv-strip">
        <div className="container" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div className="mvv-grid">
            <div className="mvv-card rv" data-d="1">
              <div className="mvv-num">01</div>
              <div className="mvv-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide dependable financial infrastructure that brings everyday banking closer to customers, empowers merchants with revenue-earning activity, and helps businesses thrive with frictionless payment solutions.
              </p>
            </div>
            <div className="mvv-card rv" data-d="2">
              <div className="mvv-num">02</div>
              <div className="mvv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Nigeria&apos;s leading commercial and agency banking partner — building an inclusive economy where every shop owner can turn their counter into a bank branch and every entrepreneur can move money safely.
              </p>
            </div>
            <div className="mvv-card rv" data-d="3">
              <div className="mvv-num">03</div>
              <div className="mvv-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Our Approach</h3>
              <p>
                We merge regulated banking stability with modern technology. Instant verification, automated settlement, multi-channel payment processing, and transparent accounting give you complete control of your capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="sb-grid">
            <div className="sb-item rv" data-d="1">
              <div className="sb-num" data-count="2481" data-sfx="k+">
                0
              </div>
              <div className="sb-lbl">₦ Weekly Settlement Volume</div>
            </div>
            <div className="sb-item rv" data-d="2">
              <div className="sb-num" data-count="36" data-sfx=" States">
                0
              </div>
              <div className="sb-lbl">Nationwide Coverage in Nigeria</div>
            </div>
            <div className="sb-item rv" data-d="3">
              <div className="sb-num" data-count="99" data-sfx=".9%">
                0
              </div>
              <div className="sb-lbl">Transaction Reliability</div>
            </div>
            <div className="sb-item rv" data-d="4">
              <div className="sb-num" data-count="24" data-sfx="/7">
                0
              </div>
              <div className="sb-lbl">Dedicated Merchant Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="cv-section sp">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
            <div className="tag" style={{ justifyContent: "center" }}>
              What Drives Us
            </div>
            <h2 className="h2" style={{ textAlign: "center" }}>
              Our <em>Core Principles</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto", textAlign: "center" }}>
              Every product, service, and transaction at MoneyLot is guided by these foundational commitments.
            </p>
          </div>
          <div className="cv-grid">
            <div className="cv-card rv" data-d="1">
              <div className="cv-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Trust &amp; Transparency</h3>
              <p>
                Backed by Mainstreet Microfinance Bank, we enforce strict compliance, honest fees, and transparent real-time settlement reporting.
              </p>
            </div>
            <div className="cv-card rv" data-d="2">
              <div className="cv-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Speed &amp; Reliability</h3>
              <p>
                In merchant commerce, seconds matter. Our switches are optimized for high-speed approvals and uninterrupted counter service.
              </p>
            </div>
            <div className="cv-card rv" data-d="3">
              <div className="cv-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Institutional Security</h3>
              <p>
                Automated KYC, real-time fraud monitoring, and spending controls ensure your funds and customer transactions remain safe.
              </p>
            </div>
            <div className="cv-card rv" data-d="4">
              <div className="cv-icon">
                <i className="fas fa-users-gear"></i>
              </div>
              <h3>Merchant Empowerment</h3>
              <p>
                We build for the retail shop in Yaba, the logistics driver, and the fast-scaling tech enterprise — growing together every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Strip */}
      <section className="sp-sm" style={{ background: "var(--off)" }}>
        <div className="container">
          <div className="call-card rv">
            <div className="cc-left">
              <div className="cc-badge">
                <span className="dot"></span>Dedicated Support 24/7
              </div>
              <h3>
                Speak Directly With Our
                <br />
                Merchant Operations Team
              </h3>
              <p>
                Have questions about becoming an agent, ordering POS terminals, or integrating our payment gateway?
                <br />
                Our specialists are available around the clock to support your business.
              </p>
            </div>
            <Link href="tel:07066639568" className="call-phone">
              <i className="fas fa-headset"></i>
              070-MONEYLOT
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-s">
        <div className="container cta-in">
          <div className="cta-t">
            <h2>READY TO PARTNER WITH MONEYLOT?</h2>
            <p>Create your account online or visit our Victoria Island headquarters to get started.</p>
          </div>
          <div className="cta-bs">
            <Link
              href="https://moneylot.ng/register"
              target="_blank"
              rel="noreferrer"
              className="btn btn-wh"
            >
              Open an Account <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="tel:07066639568" className="btn btn-ow">
              <i className="fas fa-phone"></i> Call 070-MONEYLOT
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="fm">
            <div className="f-brand">
              <div className="lm2 brand-mark">ML</div>
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
            <div className="lg-l">
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

      <LegacyScript src="/scripts/about.js" />
    </div>
  );
}
