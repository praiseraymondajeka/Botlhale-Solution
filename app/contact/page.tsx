import Link from "next/link";
import Image from "next/image";
import LegacyScript from "@/components/legacy-script";

export const metadata = { title: "Contact & Consultation | Botlhale Solutions Nigeria" };

export default function ContactPage() {
  return <div className="page-contact min-h-screen">


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
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About BSA</Link></li>
        <li><Link href="/service">Services</Link></li>
        <li><Link href="/#process">Our Process</Link></li>
        <li><Link href="/#why">Why Us</Link></li>
        <li><Link href="/contact" className="active">Contact</Link></li>
      </ul>
      <div className="nav-cta-d" style={{ "display": "flex" }}>
        <Link href="#consult-form" className="btn btn-red">Request Consultation <i className="fas fa-arrow-right"></i></Link>
      </div>
      <div className="hbg" id="hbg"><span></span><span></span><span></span></div>
    </nav>
  </div>
</header>


<div className="mm" id="mm">
  <Link href="/">Home</Link>
  <Link href="/about">About BSA</Link>
  <Link href="/service">Services</Link>
  <Link href="/#process">Our Process</Link>
  <Link href="/#why">Why Us</Link>
  <Link href="/contact" className="active">Contact</Link>
  <Link href="#consult-form" className="btn btn-red" style={{ "marginTop": "12px" }}>Request Consultation</Link>
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
          <span className="cur">Contact &amp; Consultation</span>
        </div>
        <div className="hero-kicker"><span className="dot"></span>Available 24/7 for urgent brand threats</div>
        <h1 className="ph-title">Let&apos;s <span className="ac">Talk</span><br />Strategy</h1>
        <p className="ph-sub">Whether you&apos;re facing an active counterfeiting crisis or planning long-term brand protection — our intelligence team is ready. Confidential. No obligation.</p>
        <div className="ph-actions">
          <Link href="#consult-form" className="btn btn-red">Request Consultation <i className="fas fa-arrow-right"></i></Link>
          <Link href="tel:+2348123456789" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us Directly</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="contact-main" id="consult-form">
  <div className="contact-grid">

    
    <div className="contact-info-panel">
      <div className="cip-top">
        <div className="tag">Get In Touch</div>
        <h2>Every <em>Brand Deserves</em><br />Protection</h2>
        <p>Reach out through any channel. All enquiries are treated with strict confidentiality — we never disclose client identities or case details.</p>

        <div className="response-badge">
          <div className="rb-dot"></div>
          <div className="rb-text">Average response time: <strong>Under 4 hours</strong></div>
        </div>

        <div className="c-items">
          <div className="c-item">
            <div className="c-icon"><i className="fas fa-envelope"></i></div>
            <div>
              <div className="c-label">Email Us</div>
              <div className="c-val"><Link href="mailto:m.ogwu@botlhalesolutions.com">m.ogwu@botlhalesolutions.com</Link></div>
              <div className="c-sub">For consultations, proposals &amp; general enquiries</div>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon"><i className="fas fa-phone-alt"></i></div>
            <div>
              <div className="c-label">Call Us Directly</div>
              <div className="c-val"><Link href="tel:+2348123456789">+234 812 345 6789</Link></div>
              <div className="c-sub">24/7 for urgent brand protection emergencies</div>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <div className="c-label">Visit Our Office</div>
              <div className="c-val">Lagos</div>
              <div className="c-sub">Nigeria</div>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon"><i className="fas fa-clock"></i></div>
            <div>
              <div className="c-label">Office Hours</div>
              <div className="c-val">Mon – Fri: 8:00 AM – 6:00 PM</div>
              <div className="c-sub">Emergency intelligence ops: 24/7</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cip-bottom">
        <div className="c-social-label">Follow BSA Nigeria</div>
        <div className="c-socials">
          <Link href="#" className="cs"><i className="fab fa-linkedin-in"></i></Link>
          <Link href="#" className="cs"><i className="fab fa-twitter"></i></Link>
          <Link href="#" className="cs"><i className="fab fa-facebook-f"></i></Link>
          <Link href="#" className="cs"><i className="fab fa-instagram"></i></Link>
          <Link href="#" className="cs"><i className="fab fa-whatsapp"></i></Link>
        </div>
      </div>
    </div>

    
    <div className="contact-form-panel">
      
      <div id="formWrapper">
        <div className="form-head">
          <div className="tag">Request a Consultation</div>
          <h2>Tell Us About Your <em>Brand Challenge</em></h2>
          <p>Fill in the form below and one of our senior intelligence consultants will respond within 4 hours on business days. All information is strictly confidential.</p>
        </div>

        
        <div style={{ "marginBottom": "10px" }}>
          <div style={{ "fontSize": "0.73rem", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "var(--charcoal)", "marginBottom": "10px" }}>Service of interest <span style={{ "color": "var(--red)" }}>*</span></div>
          <div className="svc-selector">
            <button type="button" className="ss-btn sel" data-svc="Brand Protection">Brand Protection</button>
            <button type="button" className="ss-btn" data-svc="Mystery Shopping">Mystery Shopping</button>
            <button type="button" className="ss-btn" data-svc="Market Research">Market Research</button>
            <button type="button" className="ss-btn" data-svc="Due Diligence">Due Diligence</button>
            <button type="button" className="ss-btn" data-svc="Brand Awareness">Brand Awareness</button>
            <button type="button" className="ss-btn" data-svc="LE Training">LE Training</button>
            <button type="button" className="ss-btn" data-svc="Not Sure Yet">Not Sure Yet</button>
          </div>
          <input type="hidden" id="selectedService" defaultValue="Brand Protection" />
        </div>

        <div style={{ "marginBottom": "18px" }}>
          <div style={{ "fontSize": "0.73rem", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "var(--charcoal)", "marginBottom": "10px" }}>Urgency level</div>
          <div className="urgency-row">
            <div className="urg-opt">
              <input type="radio" name="urgency" id="u1" defaultValue="standard" defaultChecked={true} />
              <label htmlFor="u1"><i className="fas fa-calendar"></i>Standard</label>
            </div>
            <div className="urg-opt">
              <input type="radio" name="urgency" id="u2" defaultValue="priority" />
              <label htmlFor="u2"><i className="fas fa-bolt"></i>Priority</label>
            </div>
            <div className="urg-opt urgent">
              <input type="radio" name="urgency" id="u3" defaultValue="urgent" />
              <label htmlFor="u3"><i className="fas fa-triangle-exclamation"></i>Urgent</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>First Name <span>*</span></label>
            <input type="text" id="firstName" placeholder="Chukwuemeka" autoComplete="given-name" />
          </div>
          <div className="field">
            <label>Last Name <span>*</span></label>
            <input type="text" id="lastName" placeholder="Okonkwo" autoComplete="family-name" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Email Address <span>*</span></label>
            <input type="email" id="emailField" placeholder="you@company.com" autoComplete="email" />
          </div>
          <div className="field">
            <label>Phone Number <span>*</span></label>
            <input type="tel" id="phoneField" placeholder="+234 800 000 0000" autoComplete="tel" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Company / Organisation <span>*</span></label>
            <input type="text" id="companyField" placeholder="Your company name" />
          </div>
          <div className="field">
            <label>Job Title</label>
            <input type="text" id="jobField" placeholder="Brand Manager, CEO..." />
          </div>
        </div>

        <div className="form-row full">
          <div className="field">
            <label>Industry Sector <span>*</span></label>
            <select id="sectorField" defaultValue="">
              <option value="" disabled={true}>Select your sector</option>
              <option>FMCG / Consumer Goods</option>
              <option>Pharmaceutical &amp; Healthcare</option>
              <option>Beverages &amp; Brewing</option>
              <option>Technology &amp; Electronics</option>
              <option>Fashion &amp; Apparel</option>
              <option>Automotive Parts</option>
              <option>Paint, Chemicals &amp; Coatings</option>
              <option>Banking &amp; Financial Services</option>
              <option>Retail &amp; Distribution</option>
              <option>Government / Regulatory Body</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-row full">
          <div className="field">
            <label>Describe Your Challenge or Enquiry <span>*</span></label>
            <textarea id="messageField" placeholder="Tell us about your brand protection challenge, the markets affected, the scale of the problem, or any specific questions you have. All information is strictly confidential."></textarea>
          </div>
        </div>

        <div className="form-row full">
          <div className="field">
            <label>How Did You Hear About Us?</label>
            <select id="sourceField" defaultValue="">
              <option value="" disabled={true}>Select an option</option>
              <option>Google / Web Search</option>
              <option>LinkedIn</option>
              <option>Referral from client or partner</option>
              <option>Industry event or conference</option>
              <option>NAFDAC / Regulatory body</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="consent-row">
          <input type="checkbox" id="consentBox" />
          <label htmlFor="consentBox">I confirm that the information provided is accurate and I consent to BSA Nigeria contacting me regarding this enquiry. I understand all communications are strictly confidential. See our <Link href="#">Privacy Policy</Link>.</label>
        </div>

        <div className="form-submit-row">
          <button className="submit-btn" id="submitBtn" type="button">
            Send Consultation Request <i className="fas fa-arrow-right s-icon"></i>
          </button>
        </div>
        <div style={{ "marginTop": "14px" }}>
          <div className="or-call">Prefer to speak directly? <Link href="tel:+2348123456789">Call +234 812 345 6789</Link> or <Link href="mailto:m.ogwu@botlhalesolutions.com">email m.ogwu@botlhalesolutions.com</Link></div>
        </div>
      </div>

      
      <div className="form-success" id="formSuccess">
        <div className="success-icon"><i className="fas fa-check"></i></div>
        <h3>Consultation Request Sent</h3>
        <p>Thank you for reaching out. A senior BSA Nigeria consultant will review your enquiry and respond to <strong id="successEmail"></strong> within 4 business hours.</p>
        <div className="ref" id="refNum"></div>
        <p style={{ "fontSize": "0.8rem", "color": "var(--muted)", "marginTop": "8px" }}>For urgent matters, please call <Link href="tel:+2348123456789" style={{ "color": "var(--red)", "fontWeight": "700" }}>+234 812 345 6789</Link> directly.</p>
        <button className="btn btn-ob" style={{ "marginTop": "10px" }} data-reset-form="true">Submit Another Enquiry</button>
      </div>
    </div>

  </div>
</section>


<section className="quick-contact">
  <div className="container">
    <div style={{ "textAlign": "center", "maxWidth": "560px", "margin": "0 auto" }}>
      <div className="tag" style={{ "justifyContent": "center" }}>Other Ways to Reach Us</div>
      <h2 className="h2">Choose Your <em>Preferred Channel</em></h2>
    </div>
    <div className="qc-grid">
      <div className="qcc rv" data-d="1">
        <div className="qcc-icon"><i className="fas fa-envelope-open-text"></i></div>
        <h4>Email a Consultant</h4>
        <p>Send your enquiry directly to our senior intelligence team. All emails are treated with strict confidentiality and responded to within 4 hours.</p>
        <Link href="mailto:m.ogwu@botlhalesolutions.com" className="qcc-action">
          m.ogwu@botlhalesolutions.com <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="qcc rv" data-d="2">
        <div className="qcc-icon"><i className="fas fa-phone-volume"></i></div>
        <h4>Call Us Directly</h4>
        <p>For urgent brand protection emergencies or to speak immediately with one of our intelligence operatives — call our 24/7 line.</p>
        <Link href="tel:+2348123456789" className="qcc-action">
          +234 812 345 6789 <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="qcc rv" data-d="3">
        <div className="qcc-icon"><i className="fas fa-location-dot"></i></div>
        <h4>Visit Our Office</h4>
        <p>Our Lagos headquarters is open Monday to Friday, 8AM – 6PM. In-person consultations available by appointment.</p>
        <Link href="https://maps.google.com/?q=Victoria+Island+Lagos" target="_blank" rel="noopener" className="qcc-action">
          Victoria Island, Lagos <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
</section>


<section className="why-consult sp">
  <div className="container">
    <div className="wc-grid">
      <div className="rl" style={{ "position": "relative" }}>
        <div className="wc-img">
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1600" alt="BSA Consultants" width={1200} height={800} unoptimized={true} />
        </div>
        <div className="wc-badge">
          <div className="bn">4hr</div>
          <div className="bl">Response<br />Guarantee</div>
        </div>
      </div>
      <div className="rr">
        <div className="tag">Why Consult BSA?</div>
        <h2 className="h2">What Happens After <em>You Reach Out</em></h2>
        <p className="lead">Our consultation process is fast, confidential, and consequence-free. Here is exactly what to expect.</p>
        <div className="wc-points">
          <div className="wcp">
            <div className="wcp-ic"><i className="fas fa-1"></i></div>
            <div>
              <h5>Confidential Intake — Within 4 Hours</h5>
              <p>A senior consultant reviews your submission and contacts you to gather initial details. No obligation, no hard sell.</p>
            </div>
          </div>
          <div className="wcp">
            <div className="wcp-ic"><i className="fas fa-2"></i></div>
            <div>
              <h5>Threat Assessment Call — Within 48 Hours</h5>
              <p>We conduct a structured threat assessment to map the current risk to your brand — geographic scope, volume, and key actors.</p>
            </div>
          </div>
          <div className="wcp">
            <div className="wcp-ic"><i className="fas fa-3"></i></div>
            <div>
              <h5>Tailored Intelligence Brief Delivered</h5>
              <p>You receive a concise intelligence brief outlining the recommended approach, resources, KPIs, and estimated timeline.</p>
            </div>
          </div>
          <div className="wcp">
            <div className="wcp-ic"><i className="fas fa-4"></i></div>
            <div>
              <h5>Engagement Begins — On Your Terms</h5>
              <p>If you choose to proceed, operations begin immediately. If not, the consultation and brief remain yours — no strings attached.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="faq-sec sp" id="faq">
  <div className="container">
    <div>
      <div className="tag">Common Questions</div>
      <h2 className="h2">Frequently Asked <em>Questions</em></h2>
    </div>
    <div className="faq-grid">
      <div className="faq-list">
        <div className="faq-item open">
          <div className="faq-q">How quickly can BSA respond to an active counterfeiting crisis?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">For confirmed active crises, our rapid response team can begin covert intelligence gathering within 24–48 hours of engagement confirmation. We maintain standing relationships with NAFDAC and state police commands that enable us to move faster than any competitor in the market.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Is my enquiry and company information kept confidential?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">Absolutely. Client confidentiality is non-negotiable at BSA. Your identity, the nature of your enquiry, and all case details are never disclosed to any third party. Our operatives are bound by strict NDAs and our internal security protocols mirror those of law enforcement agencies.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Do you only operate in Lagos, or across all of Nigeria?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">We have active operational capacity across 12+ Nigerian states including Lagos, Abuja, Kano, Port Harcourt, Ibadan, Aba, and Onitsha. We also operate across West Africa with partner networks in Ghana, Benin, and Côte d&apos;Ivoire.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What industries do you serve?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">Our clients span FMCG, pharmaceuticals, beverages, electronics, automotive parts, fashion, personal care, and financial services. If your brand is sold through Nigerian trade channels, we have the expertise and network to protect it.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What does a typical engagement cost?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">Every engagement is scoped individually based on the complexity of the threat, geographic spread, and services required. We provide a transparent, itemised proposal before any work begins — no hidden fees. Initial consultations are free and confidential.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Can BSA help with online counterfeiting and social media fraud?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">Yes. Our intelligence operations now cover digital channels including social media platforms, e-commerce marketplaces (Jumia, Konga, Facebook Marketplace), and WhatsApp distribution networks — which are increasingly becoming primary routes for counterfeit goods in Nigeria.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Do you work with law enforcement directly?<div className="fq-icon"><i className="fas fa-plus"></i></div></div>
          <div className="faq-a">Yes. BSA has formal Memoranda of Understanding (MoUs) with NAFDAC, the Federal Competition and Consumer Protection Commission (FCCPC), and multiple state police commands. This means enforcement actions we initiate carry full legal weight and can result in arrests, prosecutions, and permanent seizures.</div>
        </div>
      </div>

      
      <div className="faq-aside rv">
        <h3>Still Have<br /><em>Questions?</em></h3>
        <p>Our team is happy to answer any specific questions about our services, coverage, or methodology before you commit to anything.</p>
        <Link href="#consult-form" className="btn btn-red" style={{ "width": "100%", "justifyContent": "center" }}>Request Free Consultation <i className="fas fa-arrow-right"></i></Link>
        <div className="divider"><span>or contact us directly</span></div>
        <div className="direct-contact">
          <div className="dc">
            <div className="dc-ic"><i className="fas fa-envelope"></i></div>
            <div className="dc-text">
              <div className="dl">Email</div>
              <div className="dv"><Link href="mailto:m.ogwu@botlhalesolutions.com">m.ogwu@botlhalesolutions.com</Link></div>
            </div>
          </div>
          <div className="dc">
            <div className="dc-ic"><i className="fas fa-phone"></i></div>
            <div className="dc-text">
              <div className="dl">Phone (24/7)</div>
              <div className="dv"><Link href="tel:+2348123456789">+234 812 345 6789</Link></div>
            </div>
          </div>
          <div className="dc">
            <div className="dc-ic"><i className="fab fa-whatsapp"></i></div>
            <div className="dc-text">
              <div className="dl">WhatsApp</div>
              <div className="dv"><Link href="https://wa.me/2348123456789" target="_blank">+234 812 345 6789</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="cta-s">
  <div className="container cta-in">
    <div className="cta-t">
      <h2>DON&apos;T WAIT FOR THE DAMAGE TO SPREAD</h2>
      <p>Every day of inaction costs your brand revenue, trust, and market share. Act now.</p>
    </div>
    <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
      <Link href="#consult-form" className="btn btn-wh">Request Consultation <i className="fas fa-arrow-right"></i></Link>
      <Link href="tel:+2348123456789" className="btn btn-ow"><i className="fas fa-phone"></i>Call Us Now</Link>
    </div>
  </div>
</section>


<footer id="footer">
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
          <li><Link href="/service">Brand Protection</Link></li>
          <li><Link href="/service">Mystery Shopping</Link></li>
          <li><Link href="/service">Market Research</Link></li>
          <li><Link href="/service">Due Diligence</Link></li>
          <li><Link href="/service">Brand Awareness</Link></li>
          <li><Link href="/service">LE Training</Link></li>
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
        <p><i className="fas fa-phone-alt"></i><Link href="tel:+2348123456789" style={{ "color": "rgba(255,255,255,0.36)" }}>+234 812 345 6789</Link></p>
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


<LegacyScript src="/scripts/contact.js" /></div>;
}
