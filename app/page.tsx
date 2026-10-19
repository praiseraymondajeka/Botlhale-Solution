import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = { title: "Botlhale Solutions Nigeria | Brand Protection & Risk Mitigation" };

export default function HomePage() {
  return <div className="page-home min-h-screen">


<header id="hdr">
  <div className="container">
    <nav className="ni">
      <Link href="/" className="logo">
        <div className="lm"><Image src="/images/logo.jpeg" alt="" width={1200} height={800} unoptimized={true} /></div>
        <div className="lt">
          <div className="br">Botlhale Solutions</div>
          <div className="sb">Nigeria Ltd · Brand Integrity</div>
        </div>
      </Link>
      <ul className="nl">
        <li><Link href="/about">About BSA</Link></li>
        <li><Link href="/service">Services</Link></li>
        <li><Link href="/#process">Our Process</Link></li>
        <li><Link href="/#why">Why Us</Link></li>
        <li><Link href="/#gallery">Operations</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="nav-cta-btn" style={{ "display": "flex" }}>
        <Link href="/contact#consult-form" className="btn btn-red">Get Consultation <i className="fas fa-arrow-right"></i></Link>
      </div>
      <div className="hbg" id="hbg"><span></span><span></span><span></span></div>
    </nav>
  </div>
</header>


<div className="mm" id="mm">
  <Link href="/about" className="ml">About BSA</Link>
  <Link href="/service" className="ml">Services</Link>
  <Link href="/#process" className="ml">Our Process</Link>
  <Link href="/#why" className="ml">Why Us</Link>
  <Link href="/#gallery" className="ml">Operations</Link>
  <Link href="/#contact" className="ml">Contact</Link>
  <Link href="/contact#consult-form" className="btn btn-red" style={{ "marginTop": "12px" }}>Get Consultation</Link>
</div>


<section className="hero" id="home">
  <div className="hbg-img" id="bgImg"></div>
  <div className="h-slice"></div>
  <div className="h-grid"></div>
  <div className="h-bar"></div>

  <div className="hs">
    <div className="hw">
      <div className="container">
        <div className="sl ac" id="sl0">
          <div className="hc">
            <div className="hk"><span className="dot"></span>Intelligence-Driven Brand Defence</div>
            <h1 className="ht">Safeguard<br />Your <span className="ac">Brand.</span></h1>
            <p className="hd">Robust strategies for brand protection across Nigeria and West Africa. We identify, neutralise and prosecute threats against your intellectual property.</p>
            <div className="ha">
              <Link href="/service" className="btn btn-red">Explore Services <i className="fas fa-arrow-right"></i></Link>
              <Link href="/about" className="btn btn-ow">About BSA</Link>
            </div>
          </div>
        </div>
        <div className="sl" id="sl1">
          <div className="hc">
            <div className="hk"><span className="dot"></span>Risk Mitigation Specialists</div>
            <h1 className="ht">Your Shield<br />Against <span className="ac">Risk.</span></h1>
            <p className="hd">Prevention is better than damage control. Our intelligence teams operate 24/7 to detect threats before they become crises — protecting revenue and reputation.</p>
            <div className="ha">
              <Link href="/#process" className="btn btn-red">See Our Process <i className="fas fa-arrow-right"></i></Link>
              <Link href="/contact#consult-form" className="btn btn-ow">Consult Us</Link>
            </div>
          </div>
        </div>
        <div className="sl" id="sl2">
          <div className="hc">
            <div className="hk"><span className="dot"></span>Revenue Recovery</div>
            <h1 className="ht">Recover<br /><span className="ac">Lost</span> Revenue.</h1>
            <p className="hd">Counterfeiting costs Nigerian businesses billions annually. Our intelligence-led enforcement operations eliminate illicit competition and recover market share.</p>
            <div className="ha">
              <Link href="/contact" className="btn btn-red">Get Started <i className="fas fa-arrow-right"></i></Link>
              <Link href="#why" className="btn btn-ow">Why Choose BSA</Link>
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

  <div className="hctr">
    <div className="container">
      <div className="ci">
        <div className="cx"><div className="num" data-count="12" data-sfx="+">0</div><div className="lb">Years Intelligence Experience</div></div>
        <div className="cx"><div className="num" data-count="150" data-sfx="+">0</div><div className="lb">Brands Protected Nationwide</div></div>
        <div className="cx"><div className="num" data-count="3200" data-sfx="+">0</div><div className="lb">Counterfeit Items Seized</div></div>
        <div className="cx"><div className="num" data-count="98" data-sfx="%">0</div><div className="lb">Client Retention Rate</div></div>
      </div>
    </div>
  </div>
</section>


<section className="sp" id="about" style={{ "background": "var(--white)" }}>
  <div className="container">
    <div className="ab-grid">
      <div className="ab-vis rl">
        <div className="ca"></div>
        <div className="ab-img">
          <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&amp;w=1600" alt="BSA Team" width={1200} height={800} unoptimized={true} />
          <div className="ca2"></div>
        </div>
        <div className="ab-badge"><div className="big">12+</div><div className="sm">Years<br />Trusted</div></div>
      </div>
      <div className="rr">
        <div className="tag">Who We Are</div>
        <h2 className="h2">Nigeria&apos;s Premier <em>Brand Intelligence</em> Firm</h2>
        <p className="lead">At Botlhale Solutions (Nigeria) Ltd, we are the leading authority in risk mitigation, brand protection and market intelligence. We bring together ex-law enforcement professionals, IP attorneys and intelligence analysts under one roof to deliver decisive, measurable results.</p>
        <div className="mbox">
          <h4>Our Vision</h4>
          <p>To be Nigeria&apos;s most trusted brand intelligence consultancy — delivering innovative, evidence-based solutions that protect IP, recover revenue, and uphold market integrity for brands operating across Africa.</p>
        </div>
        <div className="pillars">
          <div className="pl"><div className="pi"><i className="fas fa-eye"></i></div><div><h5>Intelligence-Led</h5><p>Data and evidence drive every enforcement action we take.</p></div></div>
          <div className="pl"><div className="pi"><i className="fas fa-handshake"></i></div><div><h5>Agency Partnerships</h5><p>Formal collaboration with NAFDAC, FCCPC &amp; police.</p></div></div>
          <div className="pl"><div className="pi"><i className="fas fa-globe-africa"></i></div><div><h5>Nationwide Coverage</h5><p>Presence in 12+ states across Nigeria.</p></div></div>
          <div className="pl"><div className="pi"><i className="fas fa-lock"></i></div><div><h5>Confidential</h5><p>Client identities protected throughout all investigations.</p></div></div>
        </div>
        <div style={{ "marginTop": "32px", "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact#consult-form" className="btn btn-red">Work With Us <i className="fas fa-arrow-right"></i></Link>
          <Link href="/service" className="btn btn-ob">Our Services</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="sv-sec sp" id="services">
  <div className="container">
    <div className="sv-top">
      <div>
        <div className="tag">What We Do</div>
        <h2 className="h2">Comprehensive <em>Protection</em> Services</h2>
      </div>
      <p className="lead">End-to-end brand security — from covert intelligence to public enforcement and consumer education.</p>
    </div>
    <div className="sg">
      <div className="sc3 rv" data-d="1"><div className="cn">01</div><div className="si"><i className="fas fa-shield-halved"></i></div><h3>Brand Protection</h3><p>Three-phase intelligence-driven tactics: Detect, Disrupt, Dismantle. We identify counterfeit networks, conduct test purchases and execute coordinated enforcement with regulatory agencies.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
      <div className="sc3 rv" data-d="2"><div className="cn">02</div><div className="si"><i className="fas fa-user-secret"></i></div><h3>Mystery Shopping</h3><p>Understand your business through a customer&apos;s eyes. Our certified mystery shoppers conduct structured audits of service delivery, product authenticity and staff compliance at every touchpoint.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
      <div className="sc3 rv" data-d="3"><div className="cn">03</div><div className="si"><i className="fas fa-chart-line"></i></div><h3>Market Research &amp; Intelligence</h3><p>Deep qualitative and quantitative insights into market trends, illicit trade volumes, consumer behaviour and competitive landscape to inform strategic business decisions.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
      <div className="sc3 rv" data-d="4"><div className="cn">04</div><div className="si"><i className="fas fa-magnifying-glass-chart"></i></div><h3>Due Diligence</h3><p>Thorough risk assessment, background verification and corporate intelligence checks for partnerships, distributors, acquisitions and investment decisions in the Nigerian market.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
      <div className="sc3 rv" data-d="5"><div className="cn">05</div><div className="si"><i className="fas fa-bullhorn"></i></div><h3>Brand Awareness Campaigns</h3><p>Strategic consumer education and anti-counterfeiting campaigns to strengthen brand presence, educate consumers on authentic products and combat IP violations at point of sale.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
      <div className="sc3 rv" data-d="6"><div className="cn">06</div><div className="si"><i className="fas fa-chalkboard-user"></i></div><h3>Law Enforcement Training</h3><p>Structured capacity-building for regulatory agencies, customs officers and corporate compliance teams on IP law, counterfeit detection and evidence-gathering best practice.</p><Link href="#contact" className="sl2">Enquire <i className="fas fa-arrow-right"></i></Link></div>
    </div>
  </div>
</section>


<section className="sp" id="process" style={{ "background": "var(--white)" }}>
  <div className="container">
    <div style={{ "textAlign": "center", "maxWidth": "560px", "margin": "0 auto" }}>
      <div className="tag" style={{ "justifyContent": "center" }}>How We Work</div>
      <h2 className="h2">A Proven <em>4-Phase</em> Intelligence Methodology</h2>
      <p className="lead" style={{ "margin": "0 auto" }}>Every engagement follows our rigorous intelligence cycle — ensuring airtight evidence, legal compliance, and maximum impact.</p>
    </div>
    <div className="pr-row">
      <div className="st rv" data-d="1"><div className="sn">01</div><h4>Briefing &amp; Scoping</h4><p>We assess your brand&apos;s exposure, threat level and key markets. A tailored intelligence brief is developed outlining risks, targets and KPIs.</p></div>
      <div className="st rv" data-d="2"><div className="sn">02</div><h4>Covert Intelligence</h4><p>Undercover operatives conduct test purchases, map supply chains and document counterfeit networks across open and wholesale markets.</p></div>
      <div className="st rv" data-d="3"><div className="sn">03</div><h4>Enforcement Action</h4><p>Evidence packages are presented to agencies. Joint raids with NAFDAC and police are coordinated, with seizures, arrests and prosecution referrals.</p></div>
      <div className="st rv" data-d="4"><div className="sn">04</div><h4>Reporting &amp; Recovery</h4><p>Comprehensive post-operation reports delivered. Ongoing monitoring ensures counterfeit networks do not re-emerge and market health is tracked.</p></div>
    </div>
  </div>
</section>


<section className="wy-sec sp" id="why">
  <div className="container">
    <div className="wy-grid">
      <div className="wy-vis rl">
        <div className="wif">
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1600" alt="BSA Professionals" width={1200} height={800} unoptimized={true} />
        </div>
        <div className="wfc"><div className="fn">100%</div><div className="ft">Legally Compliant<br />Operations</div></div>
      </div>
      <div className="rr">
        <div className="tag">Our Difference</div>
        <h2 className="h2">Why Leading Brands<br />Choose <em>BSA Nigeria</em></h2>
        <p className="lead">We don&apos;t just identify problems — we eliminate them with measurable, lasting results. Our combination of intelligence expertise and legal rigour sets us apart.</p>
        <div className="wps">
          <div className="wp"><div className="wpi"><i className="fas fa-award"></i></div><div><h5>Ex-Law Enforcement Leadership</h5><p>Former NAFDAC, EFCC and police intelligence officers with decades of on-ground experience in Nigeria&apos;s market landscape.</p></div></div>
          <div className="wp"><div className="wpi"><i className="fas fa-network-wired"></i></div><div><h5>Unmatched Regulatory Access</h5><p>Formal MoUs with NAFDAC, FCCPC and state police commands ensure rapid enforcement response and legally admissible evidence.</p></div></div>
          <div className="wp"><div className="wpi"><i className="fas fa-satellite-dish"></i></div><div><h5>Real-Time Intelligence Operations</h5><p>24/7 monitoring across physical markets, social media and e-commerce — threats neutralised before they scale.</p></div></div>
          <div className="wp"><div className="wpi"><i className="fas fa-file-contract"></i></div><div><h5>Transparent, Evidenced Reporting</h5><p>Photographic evidence, chain-of-custody documentation and ROI metrics delivered after every operation.</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="ts-sec sp">
  <div className="container">
    <div style={{ "textAlign": "center", "maxWidth": "520px", "margin": "0 auto" }}>
      <div className="tag" style={{ "justifyContent": "center", "color": "rgba(223,10,10,0.85)" }}>Client Voices</div>
      <h2 className="h2">Trusted by <em>Industry Leaders</em></h2>
    </div>
    <div className="tg">
      <div className="tc rv" data-d="1"><div className="tt"><div className="tstrs">★★★★★</div><div className="qm">&quot;</div></div><blockquote>BSA&apos;s intelligence operation dismantled a counterfeiting network costing us millions annually. Within 90 days, our Lagos market share recovered significantly.</blockquote><div className="tf"><div className="tav">AO</div><div><div className="tn">Adewale Okonkwo</div><div className="tr2">Head of IP, FMCG Multinational — Lagos</div></div></div></div>
      <div className="tc rv" data-d="2"><div className="tt"><div className="tstrs">★★★★★</div><div className="qm">&quot;</div></div><blockquote>The mystery shopping programme revealed critical service gaps across our 40-branch network that internal audits consistently missed. Precise and actionable data.</blockquote><div className="tf"><div className="tav">NK</div><div><div className="tn">Ngozi Kamalu</div><div className="tr2">VP Customer Experience, Retail Chain — Abuja</div></div></div></div>
      <div className="tc rv" data-d="3"><div className="tt"><div className="tstrs">★★★★★</div><div className="qm">&quot;</div></div><blockquote>Their due diligence report on a prospective distributor saved us from a potentially catastrophic partnership. Depth of local intelligence that is truly unmatched.</blockquote><div className="tf"><div className="tav">EB</div><div><div className="tn">Emmanuel Bright</div><div className="tr2">Country Director, Pharma Company — Port Harcourt</div></div></div></div>
    </div>
  </div>
</section>


<div className="tk-sec">
  <p className="tk-lbl">Trusted by brands operating across Nigeria</p>
  <div className="tw">
    <div className="tk">
      <div className="ti"><i className="fas fa-shield-halved"></i>FMCG Brands</div>
      <div className="ti"><i className="fas fa-pills"></i>Pharmaceutical</div>
      <div className="ti"><i className="fas fa-wine-bottle"></i>Beverages</div>
      <div className="ti"><i className="fas fa-laptop"></i>Technology</div>
      <div className="ti"><i className="fas fa-tshirt"></i>Fashion &amp; Apparel</div>
      <div className="ti"><i className="fas fa-car"></i>Automotive Parts</div>
      <div className="ti"><i className="fas fa-paint-roller"></i>Paint &amp; Coatings</div>
      <div className="ti"><i className="fas fa-utensils"></i>Food &amp; Beverage</div>
      <div className="ti"><i className="fas fa-bolt"></i>Electronics</div>
      <div className="ti"><i className="fas fa-baby"></i>Personal Care</div>
      <div className="ti"><i className="fas fa-shield-halved"></i>FMCG Brands</div>
      <div className="ti"><i className="fas fa-pills"></i>Pharmaceutical</div>
      <div className="ti"><i className="fas fa-wine-bottle"></i>Beverages</div>
      <div className="ti"><i className="fas fa-laptop"></i>Technology</div>
      <div className="ti"><i className="fas fa-tshirt"></i>Fashion &amp; Apparel</div>
      <div className="ti"><i className="fas fa-car"></i>Automotive Parts</div>
      <div className="ti"><i className="fas fa-paint-roller"></i>Paint &amp; Coatings</div>
      <div className="ti"><i className="fas fa-utensils"></i>Food &amp; Beverage</div>
      <div className="ti"><i className="fas fa-bolt"></i>Electronics</div>
      <div className="ti"><i className="fas fa-baby"></i>Personal Care</div>
    </div>
  </div>
</div>


<section className="sp" id="gallery" style={{ "background": "var(--white)" }}>
  <div className="container">
    <div className="gl-top">
      <div>
        <div className="tag">In the Field</div>
        <h2 className="h2">Operations Across <em>Nigeria</em></h2>
      </div>
      <p className="lead">From Lagos open markets to Kano wholesale hubs — our operatives are everywhere counterfeiters operate.</p>
    </div>
    <div className="gg">
      <div className="gc rv" data-d="1"><Image src="/images/african-american-man-security-guy-using-walkie-talkie-while-holding-back-crowd-shoppers-police-officer-managing-large-group-people-store-entrance-busy-holiday-shopping-seaso.jpg" alt="Lagos" width={1200} height={800} unoptimized={true} /><div className="go"><div className="gl"><i className="fas fa-map-marker-alt"></i> Lagos</div><div className="gt">Market Enforcement Operation</div></div></div>
      <div className="gc rv" data-d="2"><Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&amp;w=2070" alt="Abuja" width={1200} height={800} unoptimized={true} /><div className="go"><div className="gl"><i className="fas fa-map-marker-alt"></i> Lagos</div><div className="gt">Covert Test Purchase</div></div></div>
      <div className="gc rv" data-d="3"><Image src="/images/NAFDAC-officials.jpg" alt="Raid" width={1200} height={800} unoptimized={true} /><div className="go"><div className="gl"><i className="fas fa-map-marker-alt"></i> Nationwide</div><div className="gt">Joint NAFDAC Raid</div></div></div>
      <div className="gc rv" data-d="4"><Image src="/images/Use AI Image Apr 12, 2026, 12_13_54.png" alt="Training" width={1200} height={800} unoptimized={true} /><div className="go"><div className="gl"><i className="fas fa-map-marker-alt"></i> Lagos</div><div className="gt">Corporate Training Workshop</div></div></div>
      <div className="gc rv" data-d="5"><Image src="/images/Use AI Image Apr 12, 2026, 12_18_29.png" alt="Analysis" width={1200} height={800} unoptimized={true} /><div className="go"><div className="gl"><i className="fas fa-map-marker-alt"></i> Lagos</div><div className="gt">Intelligence Analysis</div></div></div>
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
      <Link href="/contact#consult-form" className="btn btn-wh">Request Consultation <i className="fas fa-arrow-right"></i></Link>
      <Link href="tel:+2347040315768" className="btn btn-ow"><i className="fas fa-phone"></i> Call Us Now</Link>
    </div>
  </div>
</section>


<footer id="contact">
  <div className="container">
    <div className="fm">
      <div className="fb">
        <div className="lm" style={{ "marginBottom": "16px" }}>BS</div>
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
          <li><Link href="#services">Brand Protection</Link></li>
          <li><Link href="#services">Mystery Shopping</Link></li>
          <li><Link href="#services">Market Research</Link></li>
          <li><Link href="#services">Due Diligence</Link></li>
          <li><Link href="#services">Brand Awareness</Link></li>
          <li><Link href="#services">LE Training</Link></li>
        </ul>
      </div>
      <div className="fc2">
        <h5>Company</h5>
        <ul>
          <li><Link href="#about">About BSA Nigeria</Link></li>
          <li><Link href="#process">Our Process</Link></li>
          <li><Link href="#why">Why Choose Us</Link></li>
          <li><Link href="#gallery">Field Operations</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">News &amp; Insights</Link></li>
        </ul>
      </div>
      <div className="fc2 ci2">
        <h5>Contact Us</h5>
        <p><i className="fas fa-map-marker-alt"></i>Lagos, Nigeria</p>
        <p><i className="fas fa-phone-alt"></i><Link href="tel:+2347040315768" style={{ "color": "rgba(255,255,255,0.36)" }}>+2347040315768</Link></p>
        <p><i className="fas fa-envelope"></i><Link href="mailto:m.ogwu@botlhalesolutions.com" style={{ "color": "rgba(255,255,255,0.36)" }}>m.ogwu@botlhalesolutions.com</Link></p>
        <div className="nlf" style={{ "marginTop": "14px" }}>
          <input type="email" id="nle" placeholder="Your email address" />
          <button id="nlb">Get Industry Alerts</button>
        </div>
      </div>
    </div>
    <div className="fb2">
      <p>© 2026 Botlhale Solutions Nigeria Ltd. All rights reserved.</p>
      <div className="lg">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Cookie Policy</Link>
      </div>
    </div>
  </div>
</footer>

<div className="bt" id="bt"><i className="fas fa-chevron-up"></i></div>


<LegacyScript src="/scripts/index.js" /></div>;
}
