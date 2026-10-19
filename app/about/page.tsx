import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = { title: "About Afro Metrics | Brand Protection Experts" };

export default function AboutPage() {
  return <div className="page-about min-h-screen">


<header id="hdr">
  <div className="container">
    <nav className="ni">
      <Link href="/" className="logo">
        <div className="lm brand-mark" aria-label="Afro Metrics mark">AM</div>
        <div className="lt">
          <div className="br">Afro Metrics</div>
          <div className="sb">Brand Protection &amp; Intelligence</div>
        </div>
      </Link>
      <ul className="nl-nav">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about" className="active">About Afro Metrics</Link></li>
        <li><Link href="/service">Services</Link></li>
        <li><Link href="#process">Our Process</Link></li>
        <li><Link href="#why">Why Us</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <div className="nav-cta-d">
        <Link href="#consult-form" className="btn btn-red">Get Consultation <i className="fas fa-arrow-right"></i></Link>
      </div>
      <div className="hbg" id="hbg"><span></span><span></span><span></span></div>
    </nav>
  </div>
</header>


<div className="mm" id="mm">
  <Link href="/" className="ml">Home</Link>
  <Link href="/about" className="ml active">About Afro Metrics</Link>
  <Link href="/service" className="ml">Services</Link>
  <Link href="/#process" className="ml">Our Process</Link>
  <Link href="/#why" className="ml">Why Us</Link>
  <Link href="/#contact" className="ml">Contact</Link>
  <Link href="/contact#consult-form" className="btn btn-red" style={{ "marginTop": "12px" }}>Get Consultation</Link>
</div>


<section className="page-hero">
  <div className="ph-bg"></div>
  <div className="ph-bar"></div>
  <div className="ph-slice"></div>
  <div className="ph-grid"></div>
  <div className="container ph-content">
    <div className="breadcrumb">
      <Link href="/">Home</Link>
      <span className="sep"><i className="fas fa-chevron-right"></i></span>
      <span className="curr">About Afro Metrics</span>
    </div>
    <h1 className="ph-title">About <span>Afro</span><br />Metrics</h1>
    <p className="ph-sub">Nigeria&apos;s foremost brand intelligence and risk mitigation consultancy — built on integrity, driven by intelligence.</p>
  </div>
  <div className="ph-border" style={{ "width": "100%", "position": "absolute", "bottom": "0", "left": "0" }}></div>
</section>


<section className="sp" id="about">
  <div className="container">
    <div className="intro-grid">


      <div className="intro-visual rl">
        <div className="ca"></div>
        <div className="intro-img">
          <Image src="/images/about-01.png" alt="Afro Metrics team" width={1200} height={800} unoptimized={true} />
          <div className="ca2"></div>
        </div>
        <div className="intro-badge">
          <div className="big">12+</div>
          <div className="sm">Years<br />Trusted</div>
        </div>
      </div>


      <div className="intro-copy rr">
        <div className="tag">Who We Are</div>
        <h2 className="h2">Afro Metrics <em>Africa</em></h2>
        <p>At Afro Metrics, we are passionate about helping businesses protect what matters most — their brand, their people, and their reputation.</p>
        <p>Through services like brand protection, mystery shopping, market research, law enforcement support and corporate training, we provide practical, insight-driven solutions that strengthen trust and improve customer experiences across Nigeria and West Africa.</p>
        <p>Our vision is to become Africa&apos;s most trusted risk mitigation partner — delivering smart, forward-thinking strategies that help organisations operate more efficiently, stay compliant, and deliver excellence at every level.</p>

        <div className="feat-badges">
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-check"></i></div><span>Tailored Solutions</span></div>
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-globe-africa"></i></div><span>West African Reach</span></div>
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-chart-line"></i></div><span>Proven Track Record</span></div>
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-microchip"></i></div><span>Intelligence Technology</span></div>
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-user-shield"></i></div><span>Ex-Law Enforcement</span></div>
          <div className="fb-item"><div className="fb-icon"><i className="fas fa-handshake"></i></div><span>Agency Partnerships</span></div>
        </div>

        <div style={{ "marginTop": "32px", "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact#consult-form" className="btn btn-red">Work With Us <i className="fas fa-arrow-right"></i></Link>
          <Link href="/service" className="btn btn-ob">Our Services</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="mvv-strip">
  <div className="container" style={{ "paddingTop": "0", "paddingBottom": "0" }}>
    <div className="mvv-grid">
      <div className="mvv-card rv" data-d="1">
        <div className="mvv-num">01</div>
        <div className="mvv-icon"><i className="fas fa-bullseye"></i></div>
        <h3>Our Mission</h3>
        <p>To deliver intelligence-led brand protection and risk mitigation services that empower Nigerian and African businesses to operate confidently — knowing their IP, revenue and reputation are safeguarded by experts who understand the terrain.</p>
      </div>
      <div className="mvv-card rv" data-d="2">
        <div className="mvv-num">02</div>
        <div className="mvv-icon"><i className="fas fa-eye"></i></div>
        <h3>Our Vision</h3>
        <p>To be Africa&apos;s most trusted brand intelligence consultancy — a company where every client, regardless of industry or size, can access world-class protection, rigorous due diligence, and decisive enforcement action against counterfeiters.</p>
      </div>
      <div className="mvv-card rv" data-d="3">
        <div className="mvv-num">03</div>
        <div className="mvv-icon"><i className="fas fa-route"></i></div>
        <h3>Our Approach</h3>
        <p>We don&apos;t guess — we gather intelligence. Every engagement begins with evidence collection, proceeds through regulatory coordination, and concludes with measurable enforcement outcomes and transparent ROI reporting for our clients.</p>
      </div>
    </div>
  </div>
</section>


<section className="stats-banner">
  <div className="container">
    <div className="sb-grid">
      <div className="sb-item rv" data-d="1">
        <div className="sb-num" data-count="12" data-sfx="+">0+</div>
        <div className="sb-lbl">Years of Experience</div>
      </div>
      <div className="sb-item rv" data-d="2">
        <div className="sb-num" data-count="150" data-sfx="+">0+</div>
        <div className="sb-lbl">Brands Protected</div>
      </div>
      <div className="sb-item rv" data-d="3">
        <div className="sb-num" data-count="3200" data-sfx="+">0+</div>
        <div className="sb-lbl">Items Seized</div>
      </div>
      <div className="sb-item rv" data-d="4">
        <div className="sb-num" data-count="98" data-sfx="%">0%</div>
        <div className="sb-lbl">Client Retention</div>
      </div>
    </div>
  </div>
</section>


<section className="cv-section sp">
  <div className="container">
    <div style={{ "textAlign": "center", "maxWidth": "560px", "margin": "0 auto" }}>
      <div className="tag" style={{ "justifyContent": "center" }}>What Drives Us</div>
      <h2 className="h2" style={{ "textAlign": "center" }}>Our <em>Core Values</em></h2>
      <p className="lead" style={{ "margin": "0 auto", "textAlign": "center" }}>Every decision, every operation and every report is guided by these principles.</p>
    </div>
    <div className="cv-grid">
      <div className="cv-card rv" data-d="1">
        <div className="cv-icon"><i className="fas fa-handshake"></i></div>
        <h3>Integrity</h3>
        <p>We uphold the highest ethical standards in all our engagements. Our word is our bond — to clients, agencies and the communities we serve.</p>
      </div>
      <div className="cv-card rv" data-d="2">
        <div className="cv-icon"><i className="fas fa-trophy"></i></div>
        <h3>Excellence</h3>
        <p>We are committed to delivering high-quality, actionable intelligence. Good enough is never enough when your brand is on the line.</p>
      </div>
      <div className="cv-card rv" data-d="3">
        <div className="cv-icon"><i className="fas fa-lock"></i></div>
        <h3>Confidentiality</h3>
        <p>We ensure absolute discretion in all investigations and evaluations. Client identities and operational details are protected at every stage.</p>
      </div>
      <div className="cv-card rv" data-d="4">
        <div className="cv-icon"><i className="fas fa-microchip"></i></div>
        <h3>Innovation</h3>
        <p>We leverage cutting-edge intelligence techniques and technology to stay ahead of counterfeiters who are constantly evolving their methods.</p>
      </div>
    </div>
  </div>
</section>





<section className="sp-sm" style={{ "background": "var(--off)" }}>
  <div className="container">
    <div className="call-card rv">
      <div className="cc-left">
        <div className="cc-badge"><span className="dot"></span>Available 24 / 7</div>
        <h3>Speak Directly With Our<br />Intelligence Experts</h3>
        <p>Urgent brand threat? Product counterfeiting detected in your market?<br />Our team is on standby — call us now for immediate consultation.</p>
      </div>
      <Link href="tel:+233545010161" className="call-phone">
        <i className="fas fa-headset"></i>
        +233 54 501 0161
      </Link>
    </div>
  </div>
</section>


<section className="sp" style={{ "background": "var(--white)" }} id="why">
  <div className="container">
    <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "80px", "alignItems": "center" }}>
      <div className="rl">
        <div className="tag">Why Afro Metrics</div>
        <h2 className="h2">What Sets Us <em>Apart</em></h2>
        <p className="lead" style={{ "marginBottom": "28px" }}>We are not a standard consultancy. We are an intelligence organisation that happens to operate in the private sector — bringing enforcement-grade capability to brand protection.</p>

        <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
          <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "16px", "padding": "18px 20px", "border": "1px solid var(--border)", "borderRadius": "2px", "transition": "all 0.3s" }} className="wp-row">
            <div style={{ "width": "38px", "height": "38px", "borderRadius": "4px", "background": "var(--brand-gold-tint)", "color": "var(--brand-navy)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "0.9rem", "flexShrink": "0" }}><i className="fas fa-award"></i></div>
            <div><h5 style={{ "fontSize": "0.9rem", "fontWeight": "700", "color": "var(--ink)", "marginBottom": "4px" }}>Ex-Law Enforcement Leadership</h5><p style={{ "fontSize": "0.81rem", "color": "var(--mid)", "lineHeight": "1.65" }}>Former NAFDAC, EFCC and police intelligence officers with real enforcement experience on Nigerian streets.</p></div>
          </div>
          <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "16px", "padding": "18px 20px", "border": "1px solid var(--border)", "borderRadius": "2px", "transition": "all 0.3s" }} className="wp-row">
            <div style={{ "width": "38px", "height": "38px", "borderRadius": "4px", "background": "var(--brand-gold-tint)", "color": "var(--brand-navy)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "0.9rem", "flexShrink": "0" }}><i className="fas fa-network-wired"></i></div>
            <div><h5 style={{ "fontSize": "0.9rem", "fontWeight": "700", "color": "var(--ink)", "marginBottom": "4px" }}>Formal Regulatory MoUs</h5><p style={{ "fontSize": "0.81rem", "color": "var(--mid)", "lineHeight": "1.65" }}>Formal agreements with NAFDAC, FCCPC and state commands ensure evidence is legally admissible and actions are swift.</p></div>
          </div>
          <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "16px", "padding": "18px 20px", "border": "1px solid var(--border)", "borderRadius": "2px", "transition": "all 0.3s" }} className="wp-row">
            <div style={{ "width": "38px", "height": "38px", "borderRadius": "4px", "background": "var(--brand-gold-tint)", "color": "var(--brand-navy)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "0.9rem", "flexShrink": "0" }}><i className="fas fa-satellite-dish"></i></div>
            <div><h5 style={{ "fontSize": "0.9rem", "fontWeight": "700", "color": "var(--ink)", "marginBottom": "4px" }}>24/7 Intelligence Monitoring</h5><p style={{ "fontSize": "0.81rem", "color": "var(--mid)", "lineHeight": "1.65" }}>Physical markets, social media and e-commerce platforms monitored around the clock. Threats neutralised before they scale.</p></div>
          </div>
          <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "16px", "padding": "18px 20px", "border": "1px solid var(--border)", "borderRadius": "2px", "transition": "all 0.3s" }} className="wp-row">
            <div style={{ "width": "38px", "height": "38px", "borderRadius": "4px", "background": "var(--brand-gold-tint)", "color": "var(--brand-navy)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "0.9rem", "flexShrink": "0" }}><i className="fas fa-file-contract"></i></div>
            <div><h5 style={{ "fontSize": "0.9rem", "fontWeight": "700", "color": "var(--ink)", "marginBottom": "4px" }}>Full Evidential Reporting</h5><p style={{ "fontSize": "0.81rem", "color": "var(--mid)", "lineHeight": "1.65" }}>Chain-of-custody docs, photographic evidence and ROI metrics delivered after every operation — full accountability.</p></div>
          </div>
        </div>
      </div>

      <div className="rr" style={{ "position": "relative" }}>
        <div style={{ "position": "relative", "borderRadius": "2px", "overflow": "hidden", "aspectRatio": "4/3" }}>
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1600" alt="Afro Metrics professionals" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "filter": "contrast(1.05)" }} width={1200} height={800} unoptimized={true} />
          <div style={{ "position": "absolute", "left": "0", "bottom": "0", "top": "0", "width": "5px", "background": "var(--brand-navy)" }}></div>
        </div>
        <div style={{ "position": "absolute", "bottom": "-20px", "right": "-20px", "background": "var(--ink)", "color": "var(--white)", "padding": "20px 24px", "borderRadius": "2px", "boxShadow": "var(--sh-m)", "minWidth": "192px", "borderBottom": "4px solid var(--brand-navy)" }}>
          <div style={{ "fontFamily": "var(--ff-t)", "fontSize": "2.5rem", "color": "var(--brand-navy)", "lineHeight": "1" }}>100%</div>
          <div style={{ "fontSize": "0.7rem", "color": "rgba(255,255,255,0.45)", "textTransform": "uppercase", "letterSpacing": "0.1em", "marginTop": "4px" }}>Legally Compliant<br />Operations</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="cta-s">
  <div className="container cta-in">
    <div className="cta-t">
      <h2>READY TO PROTECT YOUR BRAND?</h2>
      <p>Schedule a confidential consultation with our intelligence team today.</p>
    </div>
    <div className="cta-bs">
      <Link href="/#contact" className="btn btn-wh">Request Consultation <i className="fas fa-arrow-right"></i></Link>
      <Link href="tel:+233545010161" className="btn btn-ow"><i className="fas fa-phone"></i> Call Us Now</Link>
    </div>
  </div>
</section>


<footer id="contact">
  <div className="container">
    <div className="fm">
      <div className="f-brand">
        <div className="lm2 brand-mark">AM</div>
        <p>Nigeria&apos;s foremost brand protection and intelligence consultancy. Safeguarding IP, recovering revenue, and upholding market integrity across West Africa.</p>
        <div className="sr">
          <Link href="#" className="so"><i className="fab fa-linkedin-in"></i></Link>
          <Link href="#" className="so"><i className="fab fa-twitter"></i></Link>
          <Link href="#" className="so"><i className="fab fa-facebook-f"></i></Link>
          <Link href="#" className="so"><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
      <div className="fc2">
        <h5>Services</h5>
        <ul>
          <li><Link href="/#services">Brand Protection</Link></li>
          <li><Link href="/#services">Mystery Shopping</Link></li>
          <li><Link href="/#services">Market Research</Link></li>
          <li><Link href="/#services">Due Diligence</Link></li>
          <li><Link href="/#services">Brand Awareness</Link></li>
          <li><Link href="/#services">LE Training</Link></li>
        </ul>
      </div>
      <div className="fc2">
        <h5>Company</h5>
        <ul>
          <li><Link href="/about">About Afro Metrics</Link></li>
          <li><Link href="/#process">Our Process</Link></li>
          <li><Link href="/#why">Why Choose Us</Link></li>
          <li><Link href="/#gallery">Field Operations</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">News &amp; Insights</Link></li>
        </ul>
      </div>
      <div className="fc2 ci2">
        <h5>Contact Us</h5>
        <p><i className="fas fa-map-marker-alt"></i>U1209, Afariwaa Road, Ablekuman 2</p>
        <p><i className="fas fa-phone-alt"></i><Link href="tel:+233545010161" style={{ "color": "rgba(255,255,255,0.36)" }}>+233 54 501 0161</Link></p>
        <p><i className="fas fa-envelope"></i><Link href="mailto:info@afrometrix.org" style={{ "color": "rgba(255,255,255,0.36)" }}>info@afrometrix.org</Link></p>
        <p><i className="fas fa-globe"></i><Link href="https://www.afrometrix.org" target="_blank" rel="noreferrer" style={{ "color": "rgba(255,255,255,0.36)" }}>www.afrometrix.org</Link></p>
        <div className="nlf" style={{ "marginTop": "14px" }}>
          <input type="email" id="nle" placeholder="Your email address" />
          <button id="nlb">Get Industry Alerts</button>
        </div>
      </div>
    </div>
    <div className="fb2">
      <p>© 2026 Afro Metrics. All rights reserved.</p>
      <div className="lg-l">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Cookie Policy</Link>
      </div>
    </div>
  </div>
</footer>

<div className="bt" id="bt"><i className="fas fa-chevron-up"></i></div>


<LegacyScript src="/scripts/about.js" /></div>;
}
