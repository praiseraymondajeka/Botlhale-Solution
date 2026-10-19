import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = {
  title: "MoneyLot — Intelligent Financial Infrastructure | Banking, Payments & Lending",
  description:
    "MoneyLot is a subsidiary of Mainstreet Microfinance Bank. Everything your money needs in one account: everyday banking, payment gateways, agency banking, and lending for Nigerian businesses.",
};

export default function HomePage() {
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
                <Link href="#products">Products</Link>
              </li>
              <li>
                <Link href="#developers">Developers</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="nav-cta-btn" style={{ display: "flex", gap: "10px" }}>
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
        <Link href="#products" className="ml">
          Products
        </Link>
        <Link href="#developers" className="ml">
          Developers
        </Link>
        <Link href="#faq" className="ml">
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
      <section className="hero" id="home">
        <div className="hbg-img" id="bgImg"></div>
        <div className="h-slice"></div>
        <div className="h-grid"></div>
        <div className="h-bar"></div>

        <div className="hs">
          <div className="hw">
            <div className="container">
              {/* Slide 0: General Overview */}
              <div className="sl ac" id="sl0">
                <div className="hc">
                  <div className="hk">
                    <span className="dot"></span>Subsidiary of Mainstreet Microfinance Bank
                  </div>
                  <h1 className="ht">
                    Everything<br />
                    Your Money <span className="ac">Needs.</span>
                  </h1>
                  <p className="hd">
                    Whether you run a shop in Yaba or you&apos;re saving for your first apartment, MoneyLot
                    has the tools for it. Intelligent banking, payments, and lending built for Nigerian businesses and people.
                  </p>
                  <div className="ha">
                    <Link
                      href="https://moneylot.ng/register"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-red"
                    >
                      Open an Account <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="#products" className="btn btn-ow">
                      Explore Products
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 1: Agency Banking */}
              <div className="sl" id="sl1">
                <div className="hc">
                  <div className="hk">
                    <span className="dot"></span>MoneyLot Agency Banking
                  </div>
                  <h1 className="ht">
                    Turn Your Shop<br />
                    Into A <span className="ac">Bank Branch.</span>
                  </h1>
                  <p className="hd">
                    Serve your customers. Strengthen your business. Deposit, withdraw cash, transfer funds,
                    and pay bills right at your counter. Earn reliable commissions on every single transaction.
                  </p>
                  <div className="ha">
                    <Link
                      href="https://moneylot.ng/register"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-red"
                    >
                      Become an Agent <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="/service" className="btn btn-ow">
                      Agency Banking
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2: Developer & Payment Gateway */}
              <div className="sl" id="sl2">
                <div className="hc">
                  <div className="hk">
                    <span className="dot"></span>Payment Gateway &amp; Infrastructure
                  </div>
                  <h1 className="ht">
                    Add Payments<br />
                    In An <span className="ac">Afternoon.</span>
                  </h1>
                  <p className="hd">
                    Our payment gateway API lets fintechs and online businesses accept card and bank transfer
                    payments without building banking infrastructure from scratch. Real-time settlements and automated reconciliations.
                  </p>
                  <div className="ha">
                    <Link href="#developers" className="btn btn-red">
                      Explore Payment API <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link href="/contact" className="btn btn-ow">
                      Talk to Integration Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hn">
          <div className="hd2 ac" data-sl="0"></div>
          <div className="hd2" data-sl="1"></div>
          <div className="hd2" data-sl="2"></div>
        </div>
        <div className="sc2">Scroll</div>

        {/* Counter Strip */}
        <div className="hctr">
          <div className="container">
            <div className="ci">
              <div className="cx">
                <div className="num" data-count="2481" data-sfx="k+">
                  0
                </div>
                <div className="lb">₦ Weekly Settlement Volume</div>
              </div>
              <div className="cx">
                <div className="num" data-count="36" data-sfx=" States">
                  0
                </div>
                <div className="lb">Nationwide Reach Across Nigeria</div>
              </div>
              <div className="cx">
                <div className="num" data-count="99" data-sfx=".9%">
                  0
                </div>
                <div className="lb">Transaction Reliability</div>
              </div>
              <div className="cx">
                <div className="num" data-count="24" data-sfx="/7">
                  0
                </div>
                <div className="lb">Dedicated Merchant Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Products Showcase (01 Business, 02 Payments, 03 Agency, 04 Save & Lend) */}
      <section className="sp" id="products" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="ab-grid">
            <div className="rr">
              <div className="tag">01 Business · 02 Payments · 03 Agency · 04 Save &amp; Lend</div>
              <h2 className="h2">
                Everything your money needs, in <em>one account.</em>
              </h2>
              <p className="lead">
                Whether you run a shop in Yaba or you&apos;re saving for your first apartment, MoneyLot has the
                tools for it. Seamless financial infrastructure designed for businesses and everyday people.
              </p>

              <div className="pillars" style={{ marginTop: "28px" }}>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div>
                    <h5>Business Account</h5>
                    <p>Run payroll, pay suppliers and track every naira coming in and going out from one account built for small businesses.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-credit-card"></i>
                  </div>
                  <div>
                    <h5>Payment Gateway</h5>
                    <p>Accept card and transfer payments on your website or app with a few lines of code, and see settlements in your dashboard.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h5>Secured Debit Card</h5>
                    <p>Give staff cards with spending limits you set, monitor every swipe, and reconcile transactions without chasing receipts.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-truck-fast"></i>
                  </div>
                  <div>
                    <h5>Delivery Bids</h5>
                    <p>Post a delivery, compare bids from riders across your state and pick the rate that works best for your schedule.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="https://moneylot.ng/register"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-red"
                >
                  Create a Business Account <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/about" className="btn btn-ob">
                  About MoneyLot
                </Link>
              </div>
            </div>

            {/* Right Visual: Weekly Settlement Widget */}
            <div className="ab-vis rl">
              <div className="settlement-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-gold)" }}>
                      Live Dashboard
                    </span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginTop: "4px" }}>
                      Settled to your account this week
                    </h3>
                  </div>
                  <div style={{ background: "rgba(221, 177, 73, 0.15)", border: "1px solid var(--brand-gold)", padding: "4px 10px", borderRadius: "4px", fontSize: "0.72rem", color: "var(--brand-gold)", fontWeight: 700 }}>
                    Instant
                  </div>
                </div>

                <div style={{ fontSize: "2.5rem", fontFamily: "var(--ff-t)", color: "#fff", letterSpacing: "0.02em", marginBottom: "16px" }}>
                  ₦2,481,300
                </div>

                {/* Mini Bar Chart */}
                <div className="chart-bar-wrap">
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "45%" }}></div>
                    <span className="chart-day">Mon</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "65%" }}></div>
                    <span className="chart-day">Tue</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "55%" }}></div>
                    <span className="chart-day">Wed</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "80%" }}></div>
                    <span className="chart-day">Thu</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "95%" }}></div>
                    <span className="chart-day">Fri</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "70%" }}></div>
                    <span className="chart-day">Sat</span>
                  </div>
                  <div className="chart-col">
                    <div className="chart-bar" style={{ height: "40%" }}></div>
                    <span className="chart-day">Sun</span>
                  </div>
                </div>

                {/* Settlement Breakdown */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "20px" }}>
                  <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Card Payments</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-gold)", marginTop: "4px" }}>₦1,604,900</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Bank Transfers</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginTop: "4px" }}>₦876,400</div>
                  </div>
                </div>

                <div style={{ marginTop: "16px", fontSize: "0.76rem", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f", display: "inline-block" }}></span>
                  Backed by Mainstreet Microfinance Bank
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: MoneyLot Agency Banking / Built For Merchants */}
      <section className="sp" id="agency" style={{ background: "var(--off)" }}>
        <div className="container">
          <div className="ab-grid" style={{ alignItems: "center" }}>
            {/* Left side: Interactive POS Terminal Simulator */}
            <div className="ab-vis rl">
              <div className="pos-terminal-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1a2a42", paddingBottom: "12px", marginBottom: "14px" }}>
                  <span style={{ fontWeight: 800, letterSpacing: "1px", color: "var(--brand-gold)", fontSize: "0.85rem" }}>
                    MONEYLOT AGENT
                  </span>
                  <span style={{ fontSize: "0.7rem", background: "#166534", color: "#4ade80", padding: "2px 8px", borderRadius: "10px", fontWeight: 600 }}>
                    Online
                  </span>
                </div>

                <div className="pos-screen">
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#94a3b8", marginBottom: "6px" }}>
                    <span>CASH OUT</span>
                    <span>10:42 AM</span>
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f8fafc", margin: "4px 0" }}>
                    ₦20,000
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#cbd5e1" }}>
                    <span>Fee: ₦100</span>
                    <span style={{ color: "#4ade80", fontWeight: 700 }}>Approved ✓</span>
                  </div>
                </div>

                {/* Tactile Keypad */}
                <div className="pos-keypad">
                  <div className="pos-key">1</div>
                  <div className="pos-key">2</div>
                  <div className="pos-key">3</div>
                  <div className="pos-key">4</div>
                  <div className="pos-key">5</div>
                  <div className="pos-key">6</div>
                  <div className="pos-key">7</div>
                  <div className="pos-key">8</div>
                  <div className="pos-key">9</div>
                  <div className="pos-key" style={{ color: "var(--brand-gold)" }}>*</div>
                  <div className="pos-key">0</div>
                  <div className="pos-key" style={{ color: "#4ade80" }}>#</div>
                </div>

                <div style={{ marginTop: "16px", textAlign: "center", fontSize: "0.7rem", color: "#64748b" }}>
                  High-Speed 4G / Wi-Fi Terminal · Instant Paper Receipt
                </div>
              </div>
            </div>

            {/* Right side: Agency Banking Copy */}
            <div className="rr">
              <div className="tag">Built For Merchants</div>
              <h2 className="h2">
                Turn your shop into a <em>bank branch.</em>
              </h2>
              <p className="lead">
                With MoneyLot agency banking, your customers can deposit, withdraw and pay bills right at your counter,
                any time you&apos;re open. You earn dependable commission on every single transaction.
              </p>

              <div className="mbox" style={{ marginTop: "24px" }}>
                <h4>Everyday banking, closer to customers</h4>
                <p>
                  Become a MoneyLot Merchant and help customers transfer money, deposit or withdraw cash, pay bills,
                  and buy airtime or data—all through one connected, high-speed experience.
                </p>
              </div>

              <div className="pillars" style={{ marginTop: "20px" }}>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div>
                    <h5>Useful Financial Services</h5>
                    <p>Cash deposits and withdrawals, bank transfers, utility bills, airtime, and data vending.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <div>
                    <h5>Commission-Earning Activity</h5>
                    <p>Earn high commissions on every cash-out, bill payment, and transfer settled instantly to your wallet.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h5>Support for Operations</h5>
                    <p>Dedicated field representatives, fast POS swaps, and round-the-clock dispute resolution.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
                  className="btn btn-ob"
                >
                  <i className="fab fa-google-play"></i> Get Agent App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Merchant Services Grid */}
      <section className="sv-sec sp" id="services">
        <div className="container">
          <div className="sv-top">
            <div>
              <div className="tag">Merchant Services</div>
              <h2 className="h2">
                A simpler way to support <em>everyday transactions</em>
              </h2>
            </div>
            <p className="lead">
              Give customers convenient access to essential financial services while creating new activity and revenue for your business.
            </p>
          </div>
          <div className="sg">
            <div className="sc3 rv" data-d="1">
              <div className="cn">01</div>
              <div className="si">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3>Send Money</h3>
              <p>Transfer customer funds into supported bank accounts securely and swiftly across all commercial banks in Nigeria.</p>
              <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="sl2">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="sc3 rv" data-d="2">
              <div className="cn">02</div>
              <div className="si">
                <i className="fas fa-money-bill-transfer"></i>
              </div>
              <h3>Cash Deposits</h3>
              <p>Help customers deposit funds conveniently into supported bank accounts with instant verification and transaction receipts.</p>
              <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="sl2">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="sc3 rv" data-d="3">
              <div className="cn">03</div>
              <div className="si">
                <i className="fas fa-hand-holding-dollar"></i>
              </div>
              <h3>Cash Withdrawals</h3>
              <p>Enable customers to access funds through your MoneyLot merchant location using cards or cardless withdrawal channels.</p>
              <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="sl2">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="sc3 rv" data-d="4">
              <div className="cn">04</div>
              <div className="si">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3>Bill Payments</h3>
              <p>Support seamless bill payments for electricity (IKEDC, EKEDC, AEDC), water, television (DStv, GOtv, Startimes) and utilities.</p>
              <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="sl2">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="sc3 rv" data-d="5">
              <div className="cn">05</div>
              <div className="si">
                <i className="fas fa-mobile-screen-button"></i>
              </div>
              <h3>Airtime and Data</h3>
              <p>Top up supported mobile numbers with airtime or data bundles quickly and easily across MTN, Airtel, Glo, and 9mobile.</p>
              <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="sl2">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="sc3 rv" data-d="6">
              <div className="cn">06</div>
              <div className="si">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>POS &amp; Terminal Tools</h3>
              <p>High-speed, long-battery-life POS terminals with instant printing and integrated merchant management software.</p>
              <Link href="/contact" className="sl2">
                Order Terminal <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 4-Step Onboarding Process */}
      <section className="sp" id="process" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <div className="tag" style={{ justifyContent: "center" }}>
              Instant Identity Checks
            </div>
            <h2 className="h2">
              Open your account in <em>four steps.</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Thanks to instant identity checks, most people and businesses are verified on the spot.
            </p>
          </div>
          <div className="pr-row">
            <div className="st rv" data-d="1">
              <div className="sn">01</div>
              <h4>Sign Up</h4>
              <p>Create your account in minutes with your phone number and email address on our web portal or mobile app.</p>
            </div>
            <div className="st rv" data-d="2">
              <div className="sn">02</div>
              <h4>Add KYC Details</h4>
              <p>Enter your personal details, BVN, and upload required verification documents through our encrypted portal.</p>
            </div>
            <div className="st rv" data-d="3">
              <div className="sn">03</div>
              <h4>Get Verified</h4>
              <p>Our automated identity checks confirm your verification on the spot in most cases without paperwork delays.</p>
            </div>
            <div className="st rv" data-d="4">
              <div className="sn">04</div>
              <h4>Start Banking</h4>
              <p>Fund your account, request debit cards, deploy agency services, and use every MoneyLot feature immediately.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link
              href="https://moneylot.ng/register"
              target="_blank"
              rel="noreferrer"
              className="btn btn-red"
            >
              Open Your Account Now <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Merchant Network & Operational Benefits */}
      <section className="wy-sec sp" id="why">
        <div className="container">
          <div className="wy-grid">
            <div className="wy-vis rl">
              <div className="wif">
                <Image
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2070"
                  alt="MoneyLot Merchant Banking"
                  width={1200}
                  height={800}
                  unoptimized={true}
                />
              </div>
              <div className="wfc">
                <div className="fn">100%</div>
                <div className="ft">
                  Bank-Backed &amp;<br />
                  Regulated
                </div>
              </div>
            </div>
            <div className="rr">
              <div className="tag">Merchant Network</div>
              <h2 className="h2">
                Operational benefits designed around <em>your business</em>
              </h2>
              <p className="lead">
                MoneyLot helps merchants keep serving customers with rapid settlement, transaction reliability, and accessible human support.
              </p>
              <div className="wps">
                <div className="wp">
                  <div className="wpi">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div>
                    <h5>Instant Settlement</h5>
                    <p>Receive supported merchant funds without unnecessary delay so your operational cash flow never stalls.</p>
                  </div>
                </div>
                <div className="wp">
                  <div className="wpi">
                    <i className="fas fa-shield-heart"></i>
                  </div>
                  <div>
                    <h5>Reliable Transfers</h5>
                    <p>A transaction experience focused on reducing unsuccessful transfers through multi-switch intelligent routing.</p>
                  </div>
                </div>
                <div className="wp">
                  <div className="wpi">
                    <i className="fas fa-credit-card"></i>
                  </div>
                  <div>
                    <h5>Debit-Card Access</h5>
                    <p>Support convenient and secure access to funds through robust card services and ATM cash withdrawals.</p>
                  </div>
                </div>
                <div className="wp">
                  <div className="wpi">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h5>24/7 Customer Support</h5>
                    <p>Get immediate help when operational issues affect your merchant activity from dedicated support specialists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Developer Payment Gateway API */}
      <section className="sp" id="developers" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="ab-grid" style={{ alignItems: "center" }}>
            <div className="rr">
              <div className="tag">Developers &amp; FinTech</div>
              <h2 className="h2">
                Add payments to your product in <em>an afternoon.</em>
              </h2>
              <p className="lead">
                Our payment gateway API lets fintechs and online businesses accept money without building banking infrastructure from scratch.
              </p>

              <div className="pillars" style={{ marginTop: "24px" }}>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <h5>Accept Payments</h5>
                    <p>Take card and bank transfer payments seamlessly through one clean, modern API integration.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h5>Track Settlements</h5>
                    <p>See every customer payment land in your MoneyLot dashboard in real time with automated webhooks.</p>
                  </div>
                </div>
                <div className="pl">
                  <div className="pi">
                    <i className="fas fa-receipt"></i>
                  </div>
                  <div>
                    <h5>Reconcile Easily</h5>
                    <p>Clear, auditable transaction reports and downloadable CSV summaries for your finance and audit teams.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "30px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-red">
                  Talk to Our Integration Team <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="https://moneylot.ng/register" target="_blank" rel="noreferrer" className="btn btn-ob">
                  Create Developer Account
                </Link>
              </div>
            </div>

            {/* Right: Code Window */}
            <div className="rl">
              <div className="code-window">
                <div className="code-window-bar">
                  <div className="code-dots">
                    <div className="code-dot red"></div>
                    <div className="code-dot yellow"></div>
                    <div className="code-dot green"></div>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>
                    checkout.ts — Illustrative example
                  </span>
                  <span style={{ fontSize: "0.68rem", color: "var(--brand-gold)", fontWeight: 700 }}>
                    API v2.0
                  </span>
                </div>
                <pre className="code-content">
                  <code>{`const payment = await moneylot.payments.create({
  amount: 4500000, // in kobo (₦45,000.00)
  currency: "NGN",
  email: "tunde@example.com",
  reference: "ORDER-10293",
  channels: ["card", "transfer"],
});

// Send your customer to the checkout
redirect(payment.checkoutUrl);`}</code>
                </pre>
                <div style={{ padding: "12px 20px", background: "#0a1322", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.72rem", color: "#64748b" }}>SDKs for Node.js, Python, PHP &amp; Go</span>
                  <span style={{ fontSize: "0.72rem", color: "#4ade80" }}>✓ Tested &amp; Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mobile Access & MoneyLot Debit Card */}
      <section className="sp" id="mobile-card" style={{ background: "var(--off)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
            <div className="tag" style={{ justifyContent: "center" }}>
              Mobile &amp; Card Access
            </div>
            <h2 className="h2">
              Carry supported merchant services <em>with you.</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Use the MoneyLot app for supported account-opening, transfers and bill payments while staying connected to your earning activity.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {/* Card 1: Mobile App */}
            <div className="faq-card" style={{ padding: "36px" }}>
              <div style={{ display: "inline-flex", width: "50px", height: "50px", background: "rgba(0,48,110,0.08)", borderRadius: "8px", alignItems: "center", justifyContent: "center", color: "var(--brand-navy)", fontSize: "1.4rem", marginBottom: "20px" }}>
                <i className="fas fa-mobile-screen"></i>
              </div>
              <h3 style={{ fontFamily: "var(--ff-d)", fontSize: "1.8rem", color: "var(--brand-navy)", marginBottom: "12px" }}>
                One User-Friendly Mobile Experience
              </h3>
              <p style={{ color: "var(--mid)", lineHeight: "1.8", marginBottom: "20px" }}>
                Carry supported merchant services with you wherever business takes you. Complete instant transfers, monitor cash flow, open customer accounts, and track your daily commissions.
              </p>
              <ul style={{ marginBottom: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Account, transfer and payment access
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Merchant tools wherever business takes you
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Real-time notification of incoming settlements
                </li>
              </ul>
              <Link
                href="https://play.google.com/store/apps/details?id=com.moneylot.agent&hl=en&gl=US"
                target="_blank"
                rel="noreferrer"
                className="btn btn-red"
              >
                <i className="fab fa-google-play"></i> View on Google Play →
              </Link>
            </div>

            {/* Card 2: Debit Card */}
            <div className="faq-card" style={{ padding: "36px" }}>
              <div style={{ display: "inline-flex", width: "50px", height: "50px", background: "rgba(221,177,73,0.12)", borderRadius: "8px", alignItems: "center", justifyContent: "center", color: "var(--brand-gold)", fontSize: "1.4rem", marginBottom: "20px" }}>
                <i className="fas fa-credit-card"></i>
              </div>
              <h3 style={{ fontFamily: "var(--ff-d)", fontSize: "1.8rem", color: "var(--brand-navy)", marginBottom: "12px" }}>
                MoneyLot Debit Card
              </h3>
              <p style={{ color: "var(--mid)", lineHeight: "1.8", marginBottom: "20px" }}>
                A card for everyday spending needs. Order from your location and manage supported card controls through your account with automated transaction logging.
              </p>
              <ul style={{ marginBottom: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Manage or disable instantly from your account
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Compatible with ATMs and POS terminals nationwide
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--ink)" }}>
                  <i className="fas fa-check-circle" style={{ color: "var(--brand-gold)" }}></i> Designed for convenient supported transactions
                </li>
              </ul>
              <Link href="/contact" className="btn btn-ob">
                Ask About MoneyLot Card →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Security & Backing */}
      <section className="sp" id="security" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
            <div className="tag" style={{ justifyContent: "center" }}>
              Security &amp; Assurance
            </div>
            <h2 className="h2">
              Built to keep your money <em>where it belongs.</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Enterprise-grade financial controls, strict regulatory compliance, and total transparency on every transaction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="sc3" style={{ padding: "32px", border: "1px solid var(--border)" }}>
              <div className="si" style={{ color: "var(--brand-gold)" }}>
                <i className="fas fa-user-check"></i>
              </div>
              <h3 style={{ fontSize: "1.3rem", marginTop: "12px" }}>Instant Identity Checks</h3>
              <p style={{ marginTop: "10px" }}>
                Every customer is verified before they can move money, so the people you pay and transact with are who they say they are.
              </p>
            </div>

            <div className="sc3" style={{ padding: "32px", border: "1px solid var(--border)" }}>
              <div className="si" style={{ color: "var(--brand-gold)" }}>
                <i className="fas fa-sliders"></i>
              </div>
              <h3 style={{ fontSize: "1.3rem", marginTop: "12px" }}>Controls You Set</h3>
              <p style={{ marginTop: "10px" }}>
                Spending limits on business cards and transparent transaction reports keep you in complete charge of your money 24/7.
              </p>
            </div>

            <div className="sc3" style={{ padding: "32px", border: "1px solid var(--border)" }}>
              <div className="si" style={{ color: "var(--brand-gold)" }}>
                <i className="fas fa-building-columns"></i>
              </div>
              <h3 style={{ fontSize: "1.3rem", marginTop: "12px" }}>Backed by a Bank</h3>
              <p style={{ marginTop: "10px" }}>
                MoneyLot is a proud subsidiary of Mainstreet Microfinance Bank, providing institutional stability, compliance, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Merchant Questions & FAQs */}
      <section className="sp" id="faq" style={{ background: "var(--off)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
            <div className="tag" style={{ justifyContent: "center" }}>
              Merchant Questions
            </div>
            <h2 className="h2">
              Helpful answers <em>before you apply.</em>
            </h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Speak with MoneyLot for current eligibility, coverage and commercial terms.
            </p>
          </div>

          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="faq-card">
              <h4>
                <span>What is MoneyLot?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                MoneyLot gives businesses, fintech companies and individuals the financial infrastructure to bank, take payments,
                lend, save and invest. MoneyLot is a subsidiary of Mainstreet Microfinance Bank.
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>How do I become a MoneyLot merchant?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                Provide your basic contact and business details through our online registration portal. Our team will guide you
                through the required onboarding steps, verify your BVN and supporting documents, and issue your agent tools or POS.
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>What documents will I need?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                You will need a valid government-issued ID (NIN, Voter&apos;s Card, International Passport, or Driver&apos;s License),
                your Bank Verification Number (BVN), a recent utility bill as proof of business address, and CAC registration documents for registered companies.
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>Which areas does MoneyLot currently serve?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                MoneyLot serves merchants, businesses, and agency locations across all 36 states of Nigeria and the Federal Capital Territory (FCT).
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>What if I experience a problem with a POS device?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                Our dedicated merchant support and field operations teams provide instant troubleshooting, 24/7 technical assistance,
                and swift device swaps to ensure your business operations never experience downtime.
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>How long does verification take?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                Thanks to automated instant identity checks, most accounts are verified on the spot within minutes of submitting your information.
              </p>
            </div>

            <div className="faq-card">
              <h4>
                <span>Do I need to activate my account before using it?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: "0.9rem", color: "var(--brand-gold)" }}></i>
              </h4>
              <p>
                Once your registration and KYC verification are completed, your account is immediately active. Simply fund your account
                or link your terminal to start transacting and earning commissions right away.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px", fontSize: "0.92rem", color: "var(--mid)" }}>
            Can&apos;t find what you need?{" "}
            <Link href="/contact" style={{ color: "var(--brand-navy)", fontWeight: 700, textDecoration: "underline" }}>
              Contact our team
            </Link>{" "}
            or call <strong>070-MONEYLOT</strong>.
          </div>
        </div>
      </section>

      {/* Section: Ready to Become a MoneyLot Merchant (CTA Banner) */}
      <section className="cta-s">
        <div className="container cta-in">
          <div className="cta-t">
            <h2>READY TO BECOME A MONEYLOT MERCHANT?</h2>
            <p>
              Provide your details and our team will guide you through the required information, including BVN and supporting documents.
            </p>
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
                  <Link href="#products">Business Account</Link>
                </li>
                <li>
                  <Link href="#developers">Payment Gateway</Link>
                </li>
                <li>
                  <Link href="/service">Agency Banking</Link>
                </li>
                <li>
                  <Link href="#mobile-card">MoneyLot Debit Card</Link>
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
                  <Link href="#developers">Developers</Link>
                </li>
                <li>
                  <Link href="#faq">FAQs</Link>
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

              {/* Newsletter Subscription */}
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--brand-gold)", fontWeight: 700, marginBottom: "4px" }}>
                  Money tips &amp; member deals
                </div>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginBottom: "8px", lineHeight: "1.4" }}>
                  Practical advice for growing your business and savings.
                </p>
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

      {/* Back to top */}
      <div className="bt" id="bt">
        <i className="fas fa-chevron-up"></i>
      </div>

      <LegacyScript src="/scripts/index.js" />
    </div>
  );
}
