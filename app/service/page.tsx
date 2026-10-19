import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = { title: "Our Services | Botlhale Solutions Nigeria – Brand Protection & Intelligence" };

export default function ServicesPage() {
  return <div className="page-service min-h-screen">


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
      <ul className="nav-ul">
        <li><Link href="/service">Home</Link></li>
        <li><Link href="/about">About BSA</Link></li>
        <li><Link href="/service" className="active">Services</Link></li>
        <li><Link href="/#process">Our Process</Link></li>
        <li><Link href="/#why">Why Us</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      <div className="nav-cta-d" style={{ "display": "flex" }}>
        <Link href="/contact#consult-form" className="btn btn-red">Get Consultation <i className="fas fa-arrow-right"></i></Link>
      </div>
      <div className="hbg" id="hbg"><span></span><span></span><span></span></div>
    </nav>
  </div>
</header>


<div className="mm" id="mm">
  <Link href="/">Home</Link>
  <Link href="/about">About BSA</Link>
  <Link href="/service" className="active">Services</Link>
  <Link href="/#process">Our Process</Link>
  <Link href="/#why">Why Us</Link>
  <Link href="/#contact">Contact</Link>
  <Link href="/contact#consult-form" className="btn btn-red" style={{ "marginTop": "12px" }}>Get Consultation</Link>
</div>


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
          <span className="sep"><i className="fas fa-chevron-right"></i></span>
          <span className="cur">Our Services</span>
        </div>
        <h1 className="ph-title">Our <span className="ac">Services</span></h1>
        <p className="ph-sub">Six intelligence-driven services designed to protect your brand, recover lost revenue, and eliminate risk across every dimension of your business.</p>
        <div className="ph-actions">
          <Link href="#svc-nav" className="btn btn-red">Explore Services <i className="fas fa-arrow-down"></i></Link>
          <Link href="/#contact" className="btn btn-ow">Get a Consultation</Link>
        </div>
      </div>
    </div>

    
    <div className="ph-strip">
      <div className="container">
        <div className="psi">
          <div className="ps"><div className="n" data-count="6" data-sfx="">0</div><div className="l">Core Service Areas</div></div>
          <div className="ps"><div className="n" data-count="150" data-sfx="+">0</div><div className="l">Brands Served</div></div>
          <div className="ps"><div className="n" data-count="12" data-sfx="+">0</div><div className="l">Years of Intelligence</div></div>
          <div className="ps"><div className="n" data-count="98" data-sfx="%">0</div><div className="l">Client Retention Rate</div></div>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="svc-nav" id="svc-nav">
  <div className="container">
    <div className="svc-nav-inner">
      <button className="snb act" data-svc="bp"><i className="fas fa-shield-halved"></i>Brand Protection</button>
      <button className="snb" data-svc="ms"><i className="fas fa-user-secret"></i>Mystery Shopping</button>
      <button className="snb" data-svc="mr"><i className="fas fa-chart-line"></i>Market Research</button>
      <button className="snb" data-svc="dd"><i className="fas fa-magnifying-glass-chart"></i>Due Diligence</button>
      <button className="snb" data-svc="ba"><i className="fas fa-bullhorn"></i>Brand Awareness</button>
      <button className="snb" data-svc="lt"><i className="fas fa-chalkboard-user"></i>LE Training</button>
    </div>
  </div>
</div>


<div className="svc-area" id="svcArea">

  
  <div className="svc-panel act" id="bp">
    
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&amp;w=2070" alt="Brand Protection Operations" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">01</div>
        <div className="tag">Service 01</div>
        <h2>Brand <em>Protection</em></h2>
        <p>Our three-phase intelligence-driven approach provides comprehensive protection against counterfeit activity, IP violations, and market infiltration. We Detect, Disrupt, and Dismantle — then monitor to prevent re-emergence.</p>
        <p>From covert test purchases to coordinated enforcement raids with NAFDAC and state police, every action is evidence-led and legally sound — ensuring prosecutable outcomes that protect your revenue long-term.</p>
        <div className="panel-btns">
          <Link href="/contact#consult-form" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/#why" className="btn btn-ob">Why BSA</Link>
        </div>
      </div>
    </div>
    
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">What&apos;s Included</div>
            <h2 className="h2">The <em>Capabilities</em> Behind<br />Our Brand Protection</h2>
          </div>
          <p className="lead">Our brand protection team combines human intelligence, legal expertise, and agency partnerships to deliver industry-leading results.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-chart-line"></i></div>
            <h4>Proven 3-Phase Strategy</h4>
            <p>A clear structured path from initial intelligence gathering through disruption to full-scale enforcement and market monitoring.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-map-marker-alt"></i></div>
            <h4>Deep Local Expertise</h4>
            <p>Operatives embedded in Lagos, Kano, Abuja and Port Harcourt trade hubs with fluent understanding of local market dynamics.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-gavel"></i></div>
            <h4>Agency-Backed Enforcement</h4>
            <p>Formal MoUs with NAFDAC, FCCPC and state police commands guarantee rapid, legally admissible enforcement action.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-satellite-dish"></i></div>
            <h4>24/7 Market Surveillance</h4>
            <p>Continuous monitoring of physical markets, social media, and e-commerce platforms to intercept threats before they scale.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>PROTECT YOUR BRAND TODAY</h3><p>Our team is ready to assess your current exposure and build a tailored intelligence brief.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact" className="btn btn-wh">Start Now <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

  
  <div className="svc-panel" id="ms">
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&amp;w=2070" alt="Mystery Shopping" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">02</div>
        <div className="tag">Service 02</div>
        <h2>Mystery <em>Shopping</em> &amp; CX Evaluation</h2>
        <p>We employ a multi-faceted approach to mystery shopping — ensuring comprehensive, objective evaluation of customer service delivery and operational efficiency across every touchpoint your customers encounter.</p>
        <p>Our methodology is customised for banking, retail, FMCG, and service sectors, focusing on in-person interactions, phone engagements, compliance monitoring, and digital channel assessments.</p>
        <div className="panel-btns">
          <Link href="/#contact" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/about" className="btn btn-ob">About BSA</Link>
        </div>
      </div>
    </div>
    
    <div className="method-wrap">
      <div className="container">
        <div>
          <div className="tag" style={{ "color": "rgba(223,10,10,0.85)" }}>How It Works</div>
          <h2 className="h2" style={{ "color": "var(--white)" }}>Our <em>Mystery Shopping</em> Methodology</h2>
        </div>
        <div className="method-grid">
          <div className="method-steps">
            <div className="ms">
              <div className="ms-num">01</div>
              <div>
                <h4>Brief &amp; KPI Design</h4>
                <p>We work with your team to define service standards, brand promise expectations, and the specific KPIs that matter most to your business.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">02</div>
              <div>
                <h4>Shopper Deployment</h4>
                <p>Trained, certified mystery shoppers conduct in-person visits, telephone calls, and digital channel audits across your network.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">03</div>
              <div>
                <h4>Video &amp; Evidence Capture</h4>
                <p>Where authorised, covert video recordings provide irrefutable documentation of service interactions for performance analysis.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">04</div>
              <div>
                <h4>Reporting &amp; Recommendations</h4>
                <p>Detailed scorecards, branch-level breakdowns, and actionable improvement plans are delivered to your management team.</p>
              </div>
            </div>
          </div>
          <div className="method-img">
            <Image src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&amp;w=1600" alt="Mystery shopping analysis" width={1200} height={800} unoptimized={true} />
            <div className="method-fc">
              <div className="fn">40+</div>
              <div className="ft">Branches<br />Audited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">Service Features</div>
            <h2 className="h2">Built for <em>Measurable</em> CX Improvement</h2>
          </div>
          <p className="lead">Every mystery shop is designed to produce insights you can act on — not just data that sits in a report.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-clipboard-check"></i></div>
            <h4>Structured Evaluation Framework</h4>
            <p>Standardised assessment tools ensure consistency across hundreds of branches and auditors.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-users"></i></div>
            <h4>Nigerian Consumer Expertise</h4>
            <p>Deep understanding of local consumer behaviour, expectations, and cultural context across all major states.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-sliders"></i></div>
            <h4>Custom KPIs Per Brand</h4>
            <p>Evaluation criteria are built around your specific brand promise, service standards, and compliance requirements.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-chart-bar"></i></div>
            <h4>Digital Reporting Dashboards</h4>
            <p>Real-time dashboards and trend analysis enable management to track improvement across your entire network.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>ELEVATE YOUR CUSTOMER EXPERIENCE</h3><p>Find the gaps before your customers do. Speak to our mystery shopping team today.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/#contact" className="btn btn-wh">Start Now <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

  
  <div className="svc-panel" id="mr">
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070" alt="Market Research" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">03</div>
        <div className="tag">Service 03</div>
        <h2>Market Research <em>&amp; Intelligence</em></h2>
        <p>We conduct deep, qualitative and quantitative market research giving you comprehensive understanding of market trends, illicit trade volumes, consumer behaviour, and competitive landscapes across Nigeria and West Africa.</p>
        <p>Armed with actionable intelligence, you can navigate markets with confidence, identify growth opportunities, and stay ahead of threats before they become crises.</p>
        <div className="panel-btns">
          <Link href="/contact" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/about" className="btn btn-ob">About BSA</Link>
        </div>
      </div>
    </div>
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">Research Capabilities</div>
            <h2 className="h2">Intelligence That <em>Informs</em><br />Strategic Decisions</h2>
          </div>
          <p className="lead">Our research teams combine primary fieldwork with secondary analysis to deliver the most complete picture of your market.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-magnifying-glass"></i></div>
            <h4>Counterfeit Market Mapping</h4>
            <p>Quantify the volume, geography, and supply chains of counterfeit products competing against your authentic brand.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-map-marker-alt"></i></div>
            <h4>On-Ground Field Research</h4>
            <p>Researchers embedded across Nigeria&apos;s 12 key commercial cities delivering primary data with granular local accuracy.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-people-group"></i></div>
            <h4>Consumer Behaviour Studies</h4>
            <p>Qualitative and quantitative studies on purchasing decisions, brand perception, and counterfeit awareness.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-robot"></i></div>
            <h4>AI-Driven Analytics</h4>
            <p>Advanced data modelling, sentiment analysis, and trend forecasting delivered through clear, actionable reports.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>INTELLIGENCE THAT DRIVES GROWTH</h3><p>Commission a custom market research engagement tailored to your sector and geography.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact" className="btn btn-wh">Commission Research <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

  
  <div className="svc-panel" id="dd">
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=2070" alt="Due Diligence" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">04</div>
        <div className="tag">Service 04</div>
        <h2>Due <em>Diligence</em> &amp; Risk Assessment</h2>
        <p>We conduct thorough due diligence processes, leveraging our intelligence network to assess potential risks and provide the insights needed for sound partnerships, acquisitions, and investment decisions in Nigerian and West African markets.</p>
        <p>Our team has access to regulatory databases, law enforcement records, and on-ground networks that no standard background check service can replicate — protecting you from costly missteps.</p>
        <div className="panel-btns">
          <Link href="/contact" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/about" className="btn btn-ob">About BSA</Link>
        </div>
      </div>
    </div>
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">What We Verify</div>
            <h2 className="h2">Multi-Layered <em>Intelligence</em><br />Due Diligence</h2>
          </div>
          <p className="lead">We go far beyond public records — our operatives verify claims on the ground and through intelligence networks unavailable to standard providers.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-id-card"></i></div>
            <h4>Background Verification</h4>
            <p>Identity, directorship, litigation history, regulatory sanctions, and criminal record checks across multiple databases.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-building"></i></div>
            <h4>Corporate Intelligence</h4>
            <p>Ownership structure analysis, beneficial ownership identification, and subsidiary mapping for complex corporate groups.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-triangle-exclamation"></i></div>
            <h4>Risk Scoring</h4>
            <p>Sector-calibrated risk scores based on regulatory exposure, reputational risk, financial health, and market conduct.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-database"></i></div>
            <h4>Proprietary Compliance Data</h4>
            <p>Access to our proprietary West African compliance and enforcement database built over 12 years of field operations.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>KNOW WHO YOU&apos;RE DEALING WITH</h3><p>Don&apos;t risk your business on unverified partners. Commission a due diligence report today.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact" className="btn btn-wh">Start Due Diligence <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

  
  <div className="svc-panel" id="ba">
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&amp;w=2070" alt="Brand Awareness" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">05</div>
        <div className="tag">Service 05</div>
        <h2>Brand <em>Awareness</em> Campaigns</h2>
        <p>Effective brand protection goes beyond enforcement. Building strong brand awareness is a critical component in deterring counterfeit activity and reinforcing the authenticity and integrity of your products in the marketplace.</p>
        <p>By increasing public recognition and trust through strategic brand communication, consumer education, and market visibility, we help ensure consumers can easily identify and differentiate genuine products from fakes — creating a more resilient brand presence.</p>
        <div className="panel-btns">
          <Link href="/contact" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/about" className="btn btn-ob">About BSA</Link>
        </div>
      </div>
    </div>
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">Campaign Capabilities</div>
            <h2 className="h2">Awareness That <em>Deters</em><br />Counterfeiting</h2>
          </div>
          <p className="lead">Our campaigns educate consumers, empower distributors, and communicate the value of authenticity — making your genuine products the clear choice.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-megaphone"></i></div>
            <h4>Consumer Education Campaigns</h4>
            <p>Targeted communications teaching consumers how to identify authentic products and the risks of counterfeit alternatives.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-store"></i></div>
            <h4>Trade Hub Activations</h4>
            <p>Market-level education programmes at Alaba, Ariaria, Kano Kurmi, and other major Nigerian trade hubs.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-qrcode"></i></div>
            <h4>Digital Verification Tools</h4>
            <p>QR codes, holographic labels, and authentication apps that allow consumers to verify product authenticity instantly.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-bullseye"></i></div>
            <h4>Integrated IP Enforcement</h4>
            <p>Awareness campaigns are coordinated with enforcement operations for a dual approach that protects brand from all angles.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>MAKE YOUR AUTHENTIC BRAND UNMISTAKABLE</h3><p>Build the consumer awareness that makes counterfeiting commercially unviable.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/contact" className="btn btn-wh">Plan a Campaign <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

  
  <div className="svc-panel" id="lt">
    <div className="panel-hero">
      <div className="panel-img">
        <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&amp;w=2070" alt="Law Enforcement Training" width={1200} height={800} unoptimized={true} />
        <div className="p-ca"></div>
      </div>
      <div className="panel-copy">
        <div className="panel-ghost">06</div>
        <div className="tag">Service 06</div>
        <h2>Law Enforcement <em>&amp; Corporate Training</em></h2>
        <p>We offer tailored capacity-building programmes designed for law enforcement agencies and corporate compliance teams. Our programmes enhance the ability of officers and regulatory bodies to identify, investigate, and prosecute counterfeiting, IP violations, and commercial fraud.</p>
        <p>For corporations, our training sessions empower teams with the knowledge to safeguard intellectual assets, foster customer trust, minimise risk exposure, and implement proactive fraud prevention strategies.</p>
        <div className="panel-btns">
          <Link href="/contact" className="btn btn-red">Request This Service <i className="fas fa-arrow-right"></i></Link>
          <Link href="/about" className="btn btn-ob">About BSA</Link>
        </div>
      </div>
    </div>
    
    <div className="method-wrap">
      <div className="container">
        <div>
          <div className="tag" style={{ "color": "rgba(223,10,10,0.85)" }}>Training Tracks</div>
          <h2 className="h2" style={{ "color": "var(--white)" }}>Two Dedicated <em>Training Programmes</em></h2>
        </div>
        <div className="method-grid">
          <div className="method-steps">
            <div className="ms">
              <div className="ms-num">A</div>
              <div>
                <h4>Law Enforcement Training</h4>
                <p>IP law, counterfeit detection techniques, evidence gathering, inter-agency collaboration, and case management for NAFDAC, customs, and police units.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">B</div>
              <div>
                <h4>Corporate Compliance Training</h4>
                <p>Brand protection, regulatory compliance, fraud detection, vulnerability assessment, and proactive risk prevention for internal teams.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">C</div>
              <div>
                <h4>Certified Curriculum</h4>
                <p>All programmes are designed around internationally recognised IP law frameworks and practical Nigerian market realities.</p>
              </div>
            </div>
            <div className="ms">
              <div className="ms-num">D</div>
              <div>
                <h4>Case Simulation Tools</h4>
                <p>Participants work through real-world case simulations — counterfeit seizures, undercover scenarios, and prosecution preparation exercises.</p>
              </div>
            </div>
          </div>
          <div className="method-img">
            <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=1600" alt="Corporate training workshop" width={1200} height={800} unoptimized={true} />
            <div className="method-fc">
              <div className="fn">500+</div>
              <div className="ft">Officers<br />Trained</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="features-wrap">
      <div className="container">
        <div className="features-hd">
          <div>
            <div className="tag">Programme Features</div>
            <h2 className="h2">Training That <em>Builds</em><br />Real Capability</h2>
          </div>
          <p className="lead">Every training module is grounded in real Nigerian enforcement operations — not theoretical frameworks imported from abroad.</p>
        </div>
        <div className="feat-grid">
          <div className="feat rv" data-d="1">
            <div className="feat-num">01</div>
            <div className="fi"><i className="fas fa-certificate"></i></div>
            <h4>Certified Curriculum</h4>
            <p>Internationally-aligned training modules adapted specifically for West African legal frameworks and market realities.</p>
          </div>
          <div className="feat rv" data-d="2">
            <div className="feat-num">02</div>
            <div className="fi"><i className="fas fa-handshake-angle"></i></div>
            <h4>NAFDAC &amp; Police Experience</h4>
            <p>Training delivered by ex-law enforcement professionals who have led actual operations across Nigeria&apos;s major markets.</p>
          </div>
          <div className="feat rv" data-d="3">
            <div className="feat-num">03</div>
            <div className="fi"><i className="fas fa-layer-group"></i></div>
            <h4>Bespoke Corporate Modules</h4>
            <p>Compliance and fraud prevention training tailored to your sector, risk profile, and organisational structure.</p>
          </div>
          <div className="feat rv" data-d="4">
            <div className="feat-num">04</div>
            <div className="fi"><i className="fas fa-computer"></i></div>
            <h4>Case Simulation Tools</h4>
            <p>Immersive exercises built around real-world counterfeit seizure scenarios, evidence management, and prosecution preparation.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-cta">
      <div className="container pci">
        <div className="pct"><h3>BUILD CAPABILITY THAT LASTS</h3><p>Commission a training programme tailored to your agency or corporate team&apos;s specific needs.</p></div>
        <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
          <Link href="/#contact" className="btn btn-wh">Enquire About Training <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us</Link>
        </div>
      </div>
    </div>
  </div>

</div>


<section className="overview-sec sp">
  <div className="container">
    <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "marginBottom": "56px", "gap": "40px", "flexWrap": "wrap" }}>
      <div>
        <div className="tag">Full Portfolio</div>
        <h2 className="h2">All <em>Six Services</em> at a Glance</h2>
      </div>
      <p className="lead">Every service is designed to work independently or as part of an integrated brand protection strategy.</p>
    </div>
    <div className="ov-grid">
      <div className="ovc rv" data-d="1" data-switch-service="bp">
        <div className="ovc-num">01</div>
        <div className="ovc-icon"><i className="fas fa-shield-halved"></i></div>
        <h3>Brand Protection</h3>
        <p>Intelligence-led three-phase enforcement to detect, disrupt, and dismantle counterfeit networks targeting your brand.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
      </div>
      <div className="ovc rv" data-d="2" data-switch-service="ms">
        <div className="ovc-num">02</div>
        <div className="ovc-icon"><i className="fas fa-user-secret"></i></div>
        <h3>Mystery Shopping</h3>
        <p>Objective customer experience evaluation across every touchpoint — revealing the gaps your internal audits miss.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
      </div>
      <div className="ovc rv" data-d="3" data-switch-service="mr">
        <div className="ovc-num">03</div>
        <div className="ovc-icon"><i className="fas fa-chart-line"></i></div>
        <h3>Market Research</h3>
        <p>Deep market intelligence on trends, illicit trade volumes, consumer behaviour, and competitive landscape.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
      </div>
      <div className="ovc rv" data-d="4" data-switch-service="dd">
        <div className="ovc-num">04</div>
        <div className="ovc-icon"><i className="fas fa-magnifying-glass-chart"></i></div>
        <h3>Due Diligence</h3>
        <p>Multi-layered background verification and corporate intelligence to protect partnerships and investments.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
      </div>
      <div className="ovc rv" data-d="5" data-switch-service="ba">
        <div className="ovc-num">05</div>
        <div className="ovc-icon"><i className="fas fa-bullhorn"></i></div>
        <h3>Brand Awareness</h3>
        <p>Consumer education campaigns and digital verification tools that make counterfeiting commercially unviable.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
      </div>
      <div className="ovc rv" data-d="6" data-switch-service="lt">
        <div className="ovc-num">06</div>
        <div className="ovc-icon"><i className="fas fa-chalkboard-user"></i></div>
        <h3>LE &amp; Corporate Training</h3>
        <p>Certified capacity-building programmes for enforcement agencies and corporate compliance teams.</p>
        <div className="ovc-link">Explore <i className="fas fa-arrow-right"></i></div>
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
      <Link href="/contact" className="btn btn-wh">Request Consultation <i className="fas fa-arrow-right"></i></Link>
      <Link href="tel:+234 704 031 5768" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us Now</Link>
    </div>
  </div>
</section>


<footer id="contact">
  <div className="container">
    <div className="fm">
      <div className="fb">
        <div className="flm">BS</div>
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
          <li><Link href="#" data-switch-service="bp">Brand Protection</Link></li>
          <li><Link href="#" data-switch-service="ms">Mystery Shopping</Link></li>
          <li><Link href="#" data-switch-service="mr">Market Research</Link></li>
          <li><Link href="#" data-switch-service="dd">Due Diligence</Link></li>
          <li><Link href="#" data-switch-service="ba">Brand Awareness</Link></li>
          <li><Link href="#" data-switch-service="lt">LE Training</Link></li>
        </ul>
      </div>
      <div className="fc2">
        <h5>Company</h5>
        <ul>
          <li><Link href="/about">About BSA Nigeria</Link></li>
          <li><Link href="/#process">Our Process</Link></li>
          <li><Link href="/#why">Why Choose Us</Link></li>
          <li><Link href="/#gallery">Field Operations</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">News &amp; Insights</Link></li>
        </ul>
      </div>
      <div className="fc2 ci2">
        <h5>Contact Us</h5>
        <p><i className="fas fa-map-marker-alt"></i>Lagos, Nigeria</p>
        <p><i className="fas fa-phone-alt"></i><Link href="tel:+234 704 031 5768" style={{ "color": "rgba(255,255,255,0.36)" }}>+234 704 031 5768</Link></p>
        <p><i className="fas fa-envelope"></i><Link href="mailto:m.ogwu@botlhalesolutions.com" style={{ "color": "rgba(255,255,255,0.36)" }}>m.ogwu@botlhalesolutions.com</Link></p>
        <div className="nlf" style={{ "marginTop": "14px" }}>
          <input type="email" id="nle" placeholder="Your email address" />
          <button id="nlb">Get Industry Alerts</button>
        </div>
      </div>
    </div>
    <div className="fb2">
      <p>© 2025 Botlhale Solutions Nigeria Ltd. All rights reserved.</p>
      <div className="lg-links">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Cookie Policy</Link>
      </div>
    </div>
  </div>
</footer>

<div className="bt" id="bt"><i className="fas fa-chevron-up"></i></div>


<LegacyScript src="/scripts/service.js" /></div>;
}
