import React, { useMemo, useState } from 'react';
import  products from './products.js';
import Home from "./Home.jsx";
import "./styles.css";


const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"/>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    factory: <><path d="M3 21V9l6 3V8l6 4V5h4v16Z"/><path d="M7 17h1"/><path d="M12 17h1"/><path d="M17 17h1"/></>
  };
  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
};

function Logo() {
  const [logoError, setLogoError] = React.useState(false);

  return (
    <a className="logo" href="#home" aria-label="Footluxe home">
      {!logoError ? (
        <img
          className="brand-logo"
          src="/soles/Logo.png"
          alt="Footluxe"
          onError={() => setLogoError(true)}
        />
      ) : (
        <span className="logo-fallback">
          <span className="logo-fallback-mark">F</span>
          <span className="logo-fallback-text">
            <strong>FOOTLUXE</strong>
            <small>COMFORT IN EVERY STEP</small>
          </span>
        </span>
      )}
    </a>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = [['Home','home'], ['About','about'], ['Services','services'], ['Catalog','catalog'], ['Contact','contact']];
  const go = (id) => { setPage(id); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return <header className="header">
    <div className="container nav-wrap">

      <Logo />
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {links.map(([label,id]) => <button key={id} className={page === id ? 'nav-link active' : 'nav-link'} onClick={() => go(id)}>{label}</button>)}
        <button className="nav-cta" onClick={() => go('contact')}>Request a consultation <Icon name="arrow" size={16}/></button>
      </nav>
    </div>
  </header>;
}

function Eyebrow({ children }) { return <div className="eyebrow"><span />{children}</div>; }
function SectionTitle({ eyebrow, title, text, light=false }) {
  return <div className={`section-title ${light ? 'light' : ''}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function ProductVisual({ product, large=false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`product-visual ${large ? 'product-visual-large' : ''}`}>
    {!failed && <img src={product.image} alt={product.name} loading="lazy" onError={() => setFailed(true)} />}
    {failed && <div className="image-placeholder"><div className="placeholder-sole"><span /></div><small>ADD PRODUCT IMAGE</small></div>}
    <span className="visual-tag">{product.category}</span>
  </div>;
}

function ProductCard({ product, onEnquire }) {
  return (
    <article className="product-card">
      <ProductVisual product={product} />

      <div className="product-info">
        <div>
          <span className="product-kicker">
            FOOTLUXE COMPONENTS
          </span>

          <h3>{product.articleNo || product.name || "Product"}</h3>

          <div className="product-details">
            <p>
              <strong>Article No.:</strong> {product.articleNo || "-"}
            </p>
            <p>
              <strong>Colour:</strong> {product.colour || "-"}
            </p>
            <p>
              <strong>Size:</strong> {product.size || "-"}
            </p>
            <p>
              <strong>Material:</strong> {product.material || "-"}
            </p>
            <p>
              <strong>Sole Type:</strong> {product.soleType || "-"}
            </p>
          </div>

          {product.description && (
            <p>{product.description}</p>
          )}
        </div>

        <button
          className="round-arrow"
          aria-label={`Enquire about ${product.articleNo || product.name}`}
          onClick={() => onEnquire(product)}
        >
          <Icon name="arrow" />
        </button>
      </div>
    </article>
  );
}
function About({ setPage }) {
  return (
    <PageShell
      eyebrow="FOOTLUXE / OUR COMPANY"
      title={<>We engineer comfort.<br /><em>One detail at a time.</em></>}
      intro="Manufacturers, innovators and problem-solvers dedicated to creating footwear insocks and components around the needs of footwear brands."
    >
      <div className="about-page">

        {/* COMPANY STORY */}
        <section className="about-story">
          <div className="about-story-copy">
            <span className="about-kicker">01 / OUR STORY</span>
            <h2>Comfort is built from the inside out.</h2>
            <p>
              Footluxe Comfort Pvt. Ltd. is a footwear component
              manufacturer based in Kanpur, Uttar Pradesh, India.
              We focus on PU insocks, footbeds and customized
              component solutions for footwear applications.
            </p>
            <p>
              Our approach combines manufacturing capabilities,
              product development and collaboration to help
              footwear brands translate their requirements into
              practical product solutions.
            </p>
            <button
              className="button button-orange"
              onClick={() => setPage("services")}
            >
              Explore Our Services <span>↗</span>
            </button>
          </div>

          <div className="about-story-visual">
            <img
              src="/soles/factory.png"
              alt="Footluxe manufacturing facility"
              loading="lazy"
            />
            <div className="about-image-caption">
              <span>FOOTLUXE COMFORT PVT. LTD.</span>
              <strong>Made for footwear.</strong>
            </div>
          </div>
        </section>

        {/* CAPACITY */}
        <section className="about-capacity">
          <div>
            <span className="about-kicker">02 / OUR CAPABILITIES</span>
            <h2>Built to support your production needs.</h2>
            <p>
              Manufacturing capacity and product options designed
              to support both larger orders and specialized
              requirements.
            </p>
          </div>
          <div className="about-capacity-number">
            <strong>350,000</strong>
            <span>pairs per month</span>
            <small>Listed PU insock production capacity</small>
          </div>
        </section>

        {/* PRODUCT RANGE */}
        <section className="about-products">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">03 / PRODUCT RANGE</span>
              <h2>Components made for different needs.</h2>
            </div>
            <p>
              Explore product options for footwear applications,
              comfort requirements and custom specifications.
            </p>
          </div>

          <div className="about-product-grid">
            <article className="about-product-card">
              <div className="about-product-image">
                <img
                  src="/soles/sole-1.png"
                  alt="PU insock component"
                  loading="lazy"
                />
              </div>
              <div className="about-product-copy">
                <span>01 / EVERYDAY COMFORT</span>
                <h3>PU Insocks</h3>
                <p>
                  PU insock options for different footwear styles,
                  sizes and application requirements.
                </p>
              </div>
            </article>

            <article className="about-product-card">
              <div className="about-product-image">
                <img
                  src="/soles/sole-2.png"
                  alt="Footbed component"
                  loading="lazy"
                />
              </div>
              <div className="about-product-copy">
                <span>02 / COMFORT OPTIONS</span>
                <h3>Footbeds & Inserts</h3>
                <p>
                  Product options including memory foam and
                  insert-based designs, subject to requirements.
                </p>
              </div>
            </article>

            <article className="about-product-card">
              <div className="about-product-image">
                <img
                  src="/soles/sole-3.png"
                  alt="Footwear component sample"
                  loading="lazy"
                />
              </div>
              <div className="about-product-copy">
                <span>03 / CUSTOM SOLUTIONS</span>
                <h3>Specialized Components</h3>
                <p>
                  Discuss custom dimensions, colors, thicknesses
                  and product specifications with the team.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FACTORY */}
        <section className="about-factory">
          <div className="about-factory-image">
            <img
              src="/soles/worker.png"
              alt="Footluxe factory and manufacturing"
              loading="lazy"
            />
          </div>
          <div className="about-factory-copy">
            <span className="about-kicker">04 / INSIDE OUR FACILITY</span>
            <h2>People, process and precision.</h2>
            <p>
              Manufacturing depends on the right combination
              of equipment, skilled people, materials and
              process control.
            </p>
            <p>
              Footluxe describes its facility as using modern
              production equipment, with quality checks and
              raw material verification throughout the process.
            </p>
            <button
              className="button button-orange"
              onClick={() => setPage("contact")}
            >
              Discuss Your Requirements <span>↗</span>
            </button>
          </div>
        </section>

        {/* VISION AND MISSION */}
        <section className="about-purpose">
          <div className="about-purpose-card">
            <span className="about-kicker">05 / OUR VISION</span>
            <h2>Move the industry forward.</h2>
            <p>
              Embrace technology to deliver quality products
              at competitive prices and contribute to the
              evolution of footwear components.
            </p>
          </div>
          <div className="about-purpose-card about-purpose-dark">
            <span className="about-kicker">06 / OUR MISSION</span>
            <h2>Build around customer needs.</h2>
            <p>
              Develop quality products with contemporary designs,
              while respecting customer choices and
              product-specific requirements.
            </p>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="about-values">
          <div className="about-section-heading">
            <div>
              <span className="about-kicker">07 / WHAT GUIDES US</span>
              <h2>Our values, in every detail.</h2>
            </div>
          </div>

          <div className="about-values-grid">
            <article>
              <span>01</span>
              <h3>Quality First</h3>
              <p>Focus on product checks and manufacturing consistency.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Customer Focus</h3>
              <p>Understand individual product needs and specifications.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Innovation</h3>
              <p>Explore technology and new product development approaches.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Value</h3>
              <p>Consider product requirements alongside cost expectations.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Flexibility</h3>
              <p>Discuss custom sizes, colors and design preferences.</p>
            </article>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="about-custom">
          <div className="about-custom-heading">
            <span className="about-kicker">08 / CUSTOM DEVELOPMENT</span>
            <h2>Your brief. Your specifications. A collaborative approach.</h2>
            <p>
              Share your reference images, target sizes, colors,
              intended footwear application and quantity requirements.
            </p>
          </div>

          <div className="about-custom-list">
            <div><span>↗</span> Custom colors and finishes</div>
            <div><span>↗</span> Size and thickness variations</div>
            <div><span>↗</span> Design and branding requirements</div>
            <div><span>↗</span> Sample development discussions</div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="about-final-cta">
          <div>
            <span className="about-kicker">LET'S BUILD TOGETHER</span>
            <h2>Have a footwear component brief?</h2>
            <p>
              Tell us what you are developing. Let's discuss
              your product requirements and the next steps.
            </p>
          </div>
          <button
            className="button button-orange"
            onClick={() => setPage("contact")}
          >
            Contact Footluxe <span>↗</span>
          </button>
        </section>

      </div>
    </PageShell>
  );
}

function Services({ setPage }) {
  const items = [
    ['01','Insole & Insock Components','Explore product options for footwear applications, from everyday insocks to specialized component requirements.'],
    ['02','Custom Product Development','Discuss product shape, dimensions, material preferences and other requirements with the team.'],
    ['03','Manufacturing Collaboration','Align product requirements and specifications before moving to the next stage of production.'],
    ['04','Product Enquiries','Share your target application, expected quantities and reference images so the team can understand your brief.']
  ];
  return <PageShell eyebrow="OUR SERVICES" title={<>Practical support for<br/><em>footwear component needs.</em></>} intro="From choosing a product category to discussing a custom component, we aim to make the first conversation clear and useful.">
    <div className="service-list">{items.map(([n,t,d])=><article key={n} className="service-list-item"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><Icon name="arrow"/></article>)}</div>
    <div className="inline-cta"><div><h3>Looking for a specific component?</h3><p>Browse the catalog or send us an enquiry.</p></div><button className="button button-orange" onClick={() => setPage('catalog')}>Browse catalog <Icon name="arrow"/></button></div>
  </PageShell>;
}

function PageShell({ eyebrow, title, intro, children }) {
  return <main className="page-shell"><section className="page-hero"><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p><div className="page-hero-bottom"><span>FOOTLUXE / COMPANY</span><span>MADE FOR BETTER FOOTWEAR EXPERIENCES</span></div></div></section><section className="container page-content">{children}</section></main>;
}

function Catalog({ onEnquire }) {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const categories = [
    'All',
    ...new Set(
      products
        .map((p) => p.category)
        .filter(Boolean)
    )
  ];

  const shown = useMemo(
    () =>
      products.filter((p) => {
        const matchesCategory =
          filter === 'All' || p.category === filter;

        const searchableText = [
          p.articleNo,
          p.articleNo,
          p.name,
          p.category,
          p.description,
          p.colour,
          p.size,
          p.material,
          p.soleType
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        const matchesSearch = searchableText.includes(
          query.toLowerCase()
        );

        return matchesCategory && matchesSearch;
      }),
    [filter, query]
  );

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <Eyebrow>FOOTLUXE / PRODUCT RANGE</Eyebrow>
          <h1>Explore the<br />product catalog.</h1>
          <p>
            Browse our product range and discover components
            for your next collection.
          </p>
        </div>
      </section>

      <section className="container catalog-content">
        <div className="catalog-toolbar">
          <div>
            <Eyebrow>OUR PRODUCTS</Eyebrow>
            <h2>Components for your next collection.</h2>
          </div>

          <label className="search-box">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <div className="filters" aria-label="Filter products">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
            >
              {category}
            </button>
          ))}
        </div>

        {shown.length > 0 ? (
          <div className="product-grid catalog-grid">
            {shown.map((p, index) => (
              <ProductCard
                key={p.id ?? p.articleNo ?? index}
                product={p}
                onEnquire={onEnquire}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try another search or select a different category.</p>
            <button
              type="button"
              className="button button-orange"
              onClick={() => {
                setFilter('All');
                setQuery('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="catalog-note">
          <Icon name="check" />
          <p>
            Product descriptions are starter copy. Confirm names,
            specifications and categories against the approved company catalog.
          </p>
        </div>
      </section>
    </main>
  );
}

function Contact({ setPage }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Footluxe Enquiry - ${data.get("enquiry")}`
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
      `Company: ${data.get("company") || "Not provided"}\n` +
      `Email: ${data.get("email")}\n` +
      `Phone: ${data.get("phone")}\n` +
      `Enquiry: ${data.get("enquiry")}\n` +
      `Quantity: ${data.get("quantity") || "Not specified"}\n\n` +
      `Message:\n${data.get("message")}`
    );

    window.location.href =
      `mailto:info@footluxe.in?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell
      eyebrow="CONTACT FOOTLUXE"
      title={
        <>
          Good products start with{" "}
          <em>a conversation.</em>
        </>
      }
      intro="From footwear components to custom product development, connect with Footluxe Comfort Pvt. Ltd. to discuss your requirements and explore possibilities for your business."
    >
      <section className="fx-contact-hero">
        <div className="fx-contact-hero-copy">
          <span className="fx-contact-label">LET'S CONNECT</span>

          <h2>
            Every great product
            <br />
            begins with the <em>right conversation.</em>
          </h2>

          <p>
            Tell us what your business needs. Whether you're
            sourcing PU insocks, exploring custom designs or
            discussing manufacturing requirements, we're ready
            to understand your project.
          </p>

          <div className="fx-contact-hero-points">
            <div><span>✓</span> Product enquiries</div>
            <div><span>✓</span> Custom development</div>
            <div><span>✓</span> Manufacturing partnerships</div>
          </div>

          <a className="fx-contact-hero-link" href="#fx-enquiry">
            Discuss your project <span>↘</span>
          </a>
        </div>

        <div className="fx-contact-art">
          <div className="fx-contact-art-top">
            <span>FOOTLUXE COMFORT PVT. LTD.</span>
            <span>EST. IN COMFORT</span>
          </div>

          <div className="fx-contact-art-center">
            <span className="fx-contact-art-f">F</span>
            <span className="fx-contact-art-dot">.</span>
          </div>

          <div className="fx-contact-art-bottom">
            <div>
              <span>FOOTWEAR COMPONENTS</span>
              <strong>Designed around your needs.</strong>
            </div>
            <span className="fx-contact-art-arrow">↗</span>
          </div>
        </div>
      </section>

      <section className="fx-contact-services">
        <div className="fx-contact-section-head">
          <div>
            <span className="fx-contact-label">HOW CAN WE HELP?</span>
            <h2>Let's talk business.</h2>
          </div>
          <p>
            Share your requirements with us, and help us understand
            the products or manufacturing support you're looking for.
          </p>
        </div>

        <div className="fx-contact-service-grid">
          <article className="fx-contact-service">
            <span className="fx-contact-service-no">01 / PRODUCTS</span>
            <div className="fx-contact-service-symbol">↗</div>
            <h3>Product Enquiries</h3>
            <p>
              Discuss PU insocks, memory foam insocks,
              Lycra-covered insocks, PU half heels and other
              footwear component requirements.
            </p>
          </article>

          <article className="fx-contact-service">
            <span className="fx-contact-service-no">02 / PRODUCTION</span>
            <div className="fx-contact-service-symbol">↗</div>
            <h3>Bulk Manufacturing</h3>
            <p>
              Share your expected quantities, product
              specifications and supply requirements for
              a manufacturing discussion.
            </p>
          </article>

          <article className="fx-contact-service">
            <span className="fx-contact-service-no">03 / DESIGN</span>
            <div className="fx-contact-service-symbol">↗</div>
            <h3>Custom Development</h3>
            <p>
              Discuss specific sizes, colours, thickness,
              textures, inserts, branding or other custom
              product requirements.
            </p>
          </article>

          <article className="fx-contact-service">
            <span className="fx-contact-service-no">04 / PARTNERSHIPS</span>
            <div className="fx-contact-service-symbol">↗</div>
            <h3>Business Collaboration</h3>
            <p>
              Start a conversation about working together
              on footwear components, product supply and
              manufacturing opportunities.
            </p>
          </article>
        </div>
      </section>

      <section className="fx-contact-main">
        <div className="fx-contact-details">
          <span className="fx-contact-label">WE'RE HERE TO HELP</span>
          <h2>Let's make the connection.</h2>

          <p className="fx-contact-details-intro">
            Get in touch with our team or find our office
            and manufacturing facility in Kanpur, Uttar Pradesh.
          </p>

          <div className="fx-contact-detail-card">
            <div className="fx-contact-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-2-2 2a15 15 0 0 1-6.5-6.5l2-2-2-5.5H7Z"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="fx-contact-detail-content">
              <span className="fx-contact-detail-kicker">GIVE US A CALL</span>
              <h3>Phone</h3>
              <a href="tel:+917607666660">+91 7607666660</a>
              <a href="tel:+919519455558">+91 9519455558</a>
            </div>
          </div>

          <div className="fx-contact-detail-card">
            <div className="fx-contact-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"
                  stroke="currentColor" strokeWidth="1.5" />
                <path d="m4 7 8 6 8-6"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="fx-contact-detail-content">
              <span className="fx-contact-detail-kicker">EMAIL US</span>
              <h3>Email Address</h3>
              <a href="mailto:info@footluxe.in">info@footluxe.in</a>
              <p>For product and business enquiries.</p>
            </div>
          </div>

          <div className="fx-contact-address">
            <div className="fx-contact-address-head">
              <span className="fx-contact-address-number">01</span>
              <span className="fx-contact-detail-kicker">OUR OFFICE</span>
            </div>
            <h3>Footluxe Office</h3>
            <p>
              117/N/56, Kakadeo, Naveen Nagar,
              Kanpur Nagar, Uttar Pradesh – 208025, India.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=117%2FN%2F56%2C+Kakadeo%2C+Naveen+Nagar%2C+Kanpur+Nagar+UP+208025"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span>↗</span>
            </a>
          </div>

          <div className="fx-contact-address">
            <div className="fx-contact-address-head">
              <span className="fx-contact-address-number">02</span>
              <span className="fx-contact-detail-kicker">
                MANUFACTURING FACILITY
              </span>
            </div>
            <h3>Factory Address</h3>
            <p>
              D-75, Panki Site-5, Udyog Kunj,
              Kanpur Nagar, Uttar Pradesh – 208022, India.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=D-75%2C+Panki+Site-5%2C+Udyog+Kunj%2C+Kanpur+Nagar+UP+208022"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span>↗</span>
            </a>
          </div>

          <div className="fx-contact-capacity">
            <span>MONTHLY PU INSOCK PRODUCTION CAPACITY</span>
            <strong>350,000 <small>pairs</small></strong>
            <p>
              A manufacturing capability built to support
              footwear component requirements at scale.
            </p>
          </div>
        </div>

        <div className="fx-contact-form-wrap" id="fx-enquiry">
          <div className="fx-contact-form-heading">
            <span className="fx-contact-label">PROJECT ENQUIRY</span>
            <h2>How can we help?</h2>
            <p>
              Fill in the details below and tell us a little
              about your project.
            </p>
          </div>

          <form className="fx-contact-form" onSubmit={handleSubmit}>
            <div className="fx-contact-field">
              <label htmlFor="fx-name">Your name *</label>
              <input
                id="fx-name"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="fx-contact-field">
              <label htmlFor="fx-company">Company name</label>
              <input
                id="fx-company"
                name="company"
                placeholder="Your company or brand"
                autoComplete="organization"
              />
            </div>

            <div className="fx-contact-field-row">
              <div className="fx-contact-field">
                <label htmlFor="fx-email">Email address *</label>
                <input
                  id="fx-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="fx-contact-field">
                <label htmlFor="fx-phone">Phone number *</label>
                <input
                  id="fx-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="fx-contact-field">
              <label htmlFor="fx-enquiry">Enquiry type *</label>
              <select
                id="fx-enquiry"
                name="enquiry"
                defaultValue=""
                required
              >
                <option value="" disabled>Select an enquiry</option>
                <option value="PU insocks">PU insocks</option>
                <option value="Memory foam insocks">Memory foam insocks</option>
                <option value="Lycra-covered insocks">Lycra-covered insocks</option>
                <option value="PU half heel footbeds">PU half heel footbeds</option>
                <option value="Custom product development">Custom product development</option>
                <option value="Bulk manufacturing">Bulk manufacturing</option>
                <option value="Business partnership">Business partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="fx-contact-field">
              <label htmlFor="fx-quantity">Expected quantity (optional)</label>
              <input
                id="fx-quantity"
                name="quantity"
                placeholder="e.g. estimated monthly requirement"
              />
            </div>

            <div className="fx-contact-field">
              <label htmlFor="fx-message">Tell us about your project *</label>
              <textarea
                id="fx-message"
                name="message"
                rows="5"
                placeholder="Product type, specifications, quantity or questions..."
                required
              />
            </div>

            <button className="fx-contact-submit" type="submit">
              <span>Send enquiry</span>
              <span className="fx-contact-submit-arrow">↗</span>
            </button>

            <p className="fx-contact-form-note">
              Submitting opens your default email application
              with your enquiry details prepared.
            </p>
          </form>
        </div>
      </section>

      <section className="fx-contact-process">
        <div className="fx-contact-section-head">
          <div>
            <span className="fx-contact-label">THE NEXT STEP</span>
            <h2>From enquiry to conversation.</h2>
          </div>
          <p>
            A clear brief helps start a more productive
            discussion about your business requirements.
          </p>
        </div>

        <div className="fx-contact-process-grid">
          <article>
            <span>01</span>
            <h3>Tell us what you need</h3>
            <p>
              Share your product requirements, specifications,
              quantities and business context.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Discuss your requirements</h3>
            <p>
              Outline your expectations and the type of product
              or manufacturing support you're exploring.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Explore the possibilities</h3>
            <p>
              Continue the discussion around suitable products,
              customisation and next steps.
            </p>
          </article>
        </div>
      </section>

      <section className="fx-contact-bottom">
        <div>
          <span className="fx-contact-label">FOOTLUXE COMFORT PVT. LTD.</span>
          <h2>Have a product requirement in mind?</h2>
          <p>
            Let's start with a conversation about your footwear
            components and manufacturing needs.
          </p>
        </div>
        <button onClick={() => setPage("services")}>
          Explore our services <span>↗</span>
        </button>
      </section>
    </PageShell>
  );
}

function Footer({ setPage }) {
  const links = [['Home','home'],['About','about'],['Services','services'],['Catalog','catalog'],['Contact','contact']];
  return <footer className="footer"><div className="container"><div className="footer-top"><div><Logo/><p className="footer-description">Footwear components and insole manufacturing support for brands and manufacturers.</p></div><div className="footer-links"><h4>EXPLORE</h4>{links.map(([l,id])=><button key={id} onClick={()=>{setPage(id);window.scrollTo({top:0,behavior:'smooth'})}}>{l}</button>)}</div><div className="footer-contact"><h4>START A CONVERSATION</h4><p>Have a product brief or custom requirement?</p><button className="footer-contact-link" onClick={()=>setPage('contact')}>Contact our team <Icon name="arrow" size={16}/></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FOOTLUXE. ALL RIGHTS RESERVED.</span><span>COMFORT IN EVERY STEP.</span></div></div></footer>;
}

function App() {
  const [page, setPage] = useState('home');
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const enquire = product => { setEnquiryProduct(product); setPage('contact'); window.scrollTo({top:0,behavior:'smooth'}); };
  const renderPage = () => {
    if (page === 'about') return <About setPage={setPage}/>;
    if (page === 'services') return <Services setPage={setPage}/>;
    if (page === 'catalog') return <Catalog onEnquire={enquire}/>;
    if (page === 'contact') return <Contact key={enquiryProduct?.id || 'general'} enquiryProduct={enquiryProduct}/>;
    return <Home setPage={setPage} onEnquire={enquire}/>;
  };
  return <><Header page={page} setPage={setPage}/>{renderPage()}<Footer setPage={setPage}/></>;
}

export default App;