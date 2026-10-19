import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = {
  title: "Agency Banking & Merchant Services | MoneyLot",
  description:
    "Serve your customers and strengthen your business with MoneyLot Agency Banking. Turn your shop into a bank branch for cash deposits, withdrawals, bill payments, and transfers.",
};

export default function ServicesPage() {
  return (
    <div className="page-service min-h-screen">
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
                <Link href="/service" className="active">
                  Agency Banking
                </Link>
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
            <div className="nav-cta-d" style={{ display: "flex" }}>
              <Link
                href="https://moneylot.ng/register"
                target="_blank"
                rel="noreferrer"
                className="btn btn-red"
              >
                Apply as Merchant <i className="fas fa-arrow-right"></i>
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
        <Link href="/service" className="active">
          Agency Banking
        </Link>
        <Link href="/#products">Products</Link>
        <Link href="/#developers">Developers</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="https://moneylot.ng/register"
          target="_blank"
          rel="noreferrer"
          className="btn btn-red"
          style={{ marginTop: "12px" }}
        >
          Apply as Merchant
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
                <span className="cur">Agency Banking &amp; Merchant Services</span>
              </div>
              <div className="ph-tag">
                <span className="dot"></span>MoneyLot Agency Network
              </div>
              <h1 className="ph-title">
                Turn Your Shop Into A<br />
                <span>Bank Branch</span>
              </h1>
              <p className="ph-lead">
                Serve your customers. Strengthen your business. Become a MoneyLot Merchant and help customers
                transfer money, deposit or withdraw cash, pay bills and buy airtime or data—all through one connected experience.
              </p>
              <div className="ph-acts">
                <Link
                  href="https://moneylot.ng/register"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-red"
                >
                  Apply to Become an Agent <i className="fas fa-arrow-right"></i>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.moneylot.agent&hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ow"
                >
                  <i className="fab fa-google-play"></i> Get Agent App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hero KPI Strip */}
        <div className="ph-strip">
          <div className="container">
            <div className="phs-grid">
              <div className="ph-stat">
                <div className="n" data-count="2481" data-sfx="k+">
                  0
                </div>
                <div className="l">₦ Weekly Settlement Volume</div>
              </div>
              <div className="ph-stat">
                <div className="n" data-count="36" data-sfx=" States">
                  0
                </div>
                <div className="l">Nationwide Coverage</div>
              </div>
              <div className="ph-stat">
                <div className="n" data-count="99" data-sfx=".9%">
                  0
                </div>
                <div className="l">Transaction Success Rate</div>
              </div>
              <div className="ph-stat">
                <div className="n" data-count="24" data-sfx="/7">
                  0
                </div>
                <div className="l">Operational &amp; Tech Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Service Navigator */}
      <div className="svc-nav" id="svc-nav">
        <div className="container">
          <div className="sn-wrap">
            <button className="snb act" data-svc="send-money">
              <span className="n">01</span>
              <span className="l">Send Money</span>
            </button>
            <button className="snb" data-svc="cash-deposits">
              <span className="n">02</span>
              <span className="l">Cash Deposits</span>
            </button>
            <button className="snb" data-svc="cash-withdrawals">
              <span className="n">03</span>
              <span className="l">Cash Withdrawals</span>
            </button>
            <button className="snb" data-svc="bill-payments">
              <span className="n">04</span>
              <span className="l">Bill Payments</span>
            </button>
            <button className="snb" data-svc="airtime-data">
              <span className="n">05</span>
              <span className="l">Airtime &amp; Data</span>
            </button>
            <button className="snb" data-svc="pos-cards">
              <span className="n">06</span>
              <span className="l">POS &amp; Debit Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Service Content Panels */}
      <main className="sp" style={{ paddingBottom: "70px" }}>
        <div className="container">
          {/* Panel 1: Send Money */}
          <div className="svc-panel act" id="send-money">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 01 — Interbank Fund Transfers</div>
                <h2>Send Money Safely to Any Nigerian Bank</h2>
                <p className="lead">
                  Transfer customer funds into supported bank accounts securely and swiftly across all commercial banks,
                  microfinance banks, and mobile wallets in Nigeria.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>Instant Transaction Confirmation</h4>
                  <p>
                    Every transfer generates an instant electronic and print receipt with end-to-end CBN/NIBSS confirmation.
                    No hanging transactions or prolonged reversals.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-bolt"></i></div>
                    <div><h5>Sub-Second Processing</h5><p>Direct switch integration for ultra-fast fund delivery.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-hand-holding-dollar"></i></div>
                    <div><h5>Competitive Commissions</h5><p>Earn high commission payouts credited straight to your wallet.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-red">
                    Start Sending Money <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link href="/contact" className="btn btn-ob">Inquire Terms</Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070" alt="Send Money" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Cash Deposits */}
          <div className="svc-panel" id="cash-deposits">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 02 — Counter Cash Deposits</div>
                <h2>Cash Deposits Without Long Bank Queues</h2>
                <p className="lead">
                  Help customers deposit funds conveniently into supported bank accounts with immediate crediting and verifiable balance verification.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>Convenience for Your Community</h4>
                  <p>
                    Save your customers the stress of distant commercial bank branches. Turn your store into their primary deposit point.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-shield-alt"></i></div>
                    <div><h5>Instant Verification</h5><p>Account name validation before cash acceptance guarantees accuracy.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-receipt"></i></div>
                    <div><h5>Physical &amp; SMS Receipts</h5><p>Immediate proof of deposit sent to the customer&apos;s mobile number.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-red">
                    Become a Deposit Point <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600" alt="Cash Deposits" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3: Cash Withdrawals */}
          <div className="svc-panel" id="cash-withdrawals">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 03 — Cash Withdrawals &amp; Cash-Out</div>
                <h2>Reliable Cash Withdrawals Right at Your Counter</h2>
                <p className="lead">
                  Enable customers to access funds through your MoneyLot merchant location using debit cards or cardless withdrawal codes.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>Continuous Cash Flow for Merchants</h4>
                  <p>
                    Cycle your retail store cash surplus into digital liquidity without dangerous trips to distant bank branches.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-credit-card"></i></div>
                    <div><h5>All Cards Accepted</h5><p>Mastercard, Visa, and Verve debit cards supported smoothly.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-money-bill-wave"></i></div>
                    <div><h5>Transparent Fees</h5><p>Clear fee structure (e.g. ₦100 per ₦20,000 cash out) that customers trust.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-red">
                    Deploy Cash-Out Terminal <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070" alt="Cash Withdrawals" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 4: Bill Payments */}
          <div className="svc-panel" id="bill-payments">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 04 — Utility &amp; Subscription Payments</div>
                <h2>Pay Electricity, Cable TV &amp; Utilities</h2>
                <p className="lead">
                  Support payments for electricity tokens, water, television subscriptions (DStv, GOtv, Startimes), and government billings.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>Instant Token Generation</h4>
                  <p>
                    Prepaid electricity meter tokens (IKEDC, EKEDC, AEDC, IBEDC, KEDCO, etc.) are generated and printed immediately.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-tv"></i></div>
                    <div><h5>Cable Reconnection</h5><p>Instant reactivation for DStv, GOtv, and Startimes packages.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-lightbulb"></i></div>
                    <div><h5>All DisCos Integrated</h5><p>Direct integration with electricity distribution companies nationwide.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-red">
                    Offer Bill Payments <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600" alt="Bill Payments" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 5: Airtime & Data */}
          <div className="svc-panel" id="airtime-data">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 05 — Telecommunications</div>
                <h2>Instant Airtime &amp; Data Top-Up</h2>
                <p className="lead">
                  Top up supported mobile numbers with airtime or broadband data bundles quickly and easily across MTN, Airtel, Glo, and 9mobile.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>High-Volume Daily Earning</h4>
                  <p>
                    Airtime and data vending drives daily foot traffic to your merchant location, introducing customers to other banking services.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-signal"></i></div>
                    <div><h5>All Major Networks</h5><p>Direct API connections to MTN, Airtel, Glo, and 9mobile.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-percent"></i></div>
                    <div><h5>Immediate Discount</h5><p>Keep your commission instantly with every airtime and data purchase.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-red">
                    Start Vending Airtime <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070" alt="Airtime and Data" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 6: POS & Cards */}
          <div className="svc-panel" id="pos-cards">
            <div className="sp-hero">
              <div className="sp-text rl">
                <div className="tag">Service 06 — Terminal &amp; Card Infrastructure</div>
                <h2>MoneyLot POS Terminals &amp; Secured Debit Cards</h2>
                <p className="lead">
                  State-of-the-art POS terminals and secured debit cards designed for reliable merchant operations and high-speed settlement.
                </p>
                <div className="mbox" style={{ marginTop: "20px" }}>
                  <h4>Long Battery Life &amp; 4G Connectivity</h4>
                  <p>
                    Never lose a transaction due to network instability or power failures. Our rugged terminals come with dual-SIM 4G and thermal printers.
                  </p>
                </div>
                <div className="pillars" style={{ marginTop: "24px" }}>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-calculator"></i></div>
                    <div><h5>High-Speed Terminal</h5><p>Instant slip printing and reliable transaction logging.</p></div>
                  </div>
                  <div className="pl">
                    <div className="pi"><i className="fas fa-credit-card"></i></div>
                    <div><h5>MoneyLot Debit Card</h5><p>Manage limits, disable or activate cards directly from your mobile app.</p></div>
                  </div>
                </div>
                <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-red">
                    Order POS Terminal <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="sp-vis rr">
                <div className="sp-img">
                  <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070" alt="POS Terminals" width={1200} height={800} unoptimized={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Banner */}
      <section className="cta-s">
        <div className="container cta-in">
          <div className="cta-t">
            <h2>READY TO BECOME A MONEYLOT MERCHANT?</h2>
            <p>Provide your details and our team will guide you through the onboarding process.</p>
          </div>
          <div className="cta-bs">
            <Link
              href="https://moneylot.ng/register"
              target="_blank"
              rel="noreferrer"
              className="btn btn-wh"
            >
              Apply Now <i className="fas fa-arrow-right"></i>
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

      <LegacyScript src="/scripts/service.js" />
    </div>
  );
}
