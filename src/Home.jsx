import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import products from "./products";



const benefits = [
  { icon: "◇", title: "Premium Materials", text: "Material options for comfort, durability and performance." },
  { icon: "✳", title: "Custom Solutions", text: "Footwear components tailored to your product requirements." },
  { icon: "↗", title: "Manufacturing", text: "A manufacturing-focused approach to product development." },
  { icon: "◎", title: "Dedicated Support", text: "Support from your first discussion to product development." },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fl-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="fl-eyebrow">
      <span className="fl-eyebrow-line" />
      {children}
    </div>
  );
}

function Home({ setPage, onEnquire }) {
  const [activeProduct, setActiveProduct] = useState(0);

  const goTo = (page) => {
    if (typeof setPage === "function") {
      setPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const enquire = (product) => {
    if (typeof onEnquire === "function") {
      onEnquire(product);
    } else {
      goTo("contact");
    }
  };

  return (
    <main className="fl-home">
      {/* HERO */}
      <section className="fl-hero">
        <div className="fl-hero-grid" />
        <div className="fl-hero-glow" />

        <div className="fl-hero-inner">
          <div className="fl-hero-copy">
            <div className="fl-hero-kicker fl-enter fl-delay-1">
              <span /> FOOTWEAR COMPONENTS MANUFACTURER
            </div>

            <h1 className="fl-hero-title fl-enter fl-delay-2">
              Engineered
              <br />
              for <span>Every Step.</span>
            </h1>

            <p className="fl-hero-description fl-enter fl-delay-3">
              High-performance insoles and footwear components,
              crafted with innovation, precision and comfort.
            </p>

            <div className="fl-hero-actions fl-enter fl-delay-4">
              <button
                className="fl-button fl-button-orange"
                onClick={() => goTo("catalog")}
              >
                Explore Products <span>↗</span>
              </button>

              <button
                className="fl-button fl-button-outline"
                onClick={() => goTo("about")}
              >
                Our Company <span>→</span>
              </button>
            </div>

            <div className="fl-hero-points fl-enter fl-delay-5">
              <span><b>✳</b> Quality Materials</span>
              <span><b>◇</b> Custom Solutions</span>
              <span><b>◎</b> Manufacturing</span>
            </div>
          </div>

          <div className="fl-hero-visual">
            <div className="fl-visual-ring fl-ring-one" />
            <div className="fl-visual-ring fl-ring-two" />
            <div className="fl-visual-glow" />

            <div className="fl-product-orbit fl-orbit-one" />
            <div className="fl-product-orbit fl-orbit-two" />

            <div className="fl-sole fl-sole-back">
              <img src="/soles/sole-1.png" alt="Insole material" />
            </div>
            <div className="fl-sole fl-sole-left">
              <img src="/soles/sole-2.png" alt="Footwear component" />
            </div>
            <div className="fl-sole fl-sole-right">
              <img src="/soles/sole-3.png" alt="Comfort insole" />
            </div>
            <div className="fl-sole fl-sole-front">
              <img src="/soles/sole-4.png" alt="Footluxe product showcase" />
            </div>

            <div className="fl-floating-label fl-label-top">
              <span>01 / MATERIAL</span>
              <strong>Engineered Comfort</strong>
            </div>
            <div className="fl-floating-label fl-label-bottom">
              <span>FOOTLUXE</span>
              <strong>COMFORT ENGINEERED</strong>
            </div>

            <div className="fl-visual-index">
              {products.map((product, index) => (
                <button
                  key={product.number}
                  className={activeProduct === index ? "active" : ""}
                  onClick={() => setActiveProduct(index)}
                  aria-label={`Select product ${product.number}`}
                >
                  {product.number}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="fl-hero-footer">
          <span>DESIGNED FOR COMFORT. BUILT FOR PERFORMANCE.</span>
          <a href="#fl-products">SCROLL TO EXPLORE ↓</a>
          <span>FOOTLUXE / INDIA</span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="fl-products-section" id="fl-products">
        <div className="fl-products-layout">
          <Reveal className="fl-products-intro">
            <Eyebrow>OUR PRODUCT RANGE</Eyebrow>
            <h2>Performance in every <span>layer.</span></h2>
            <p>
              Explore footwear component solutions designed around
              comfort, materials and everyday performance.
            </p>
            <button
              className="fl-button fl-button-dark"
              onClick={() => goTo("catalog")}
            >
              View Full Catalog <span>↗</span>
            </button>
          </Reveal>

          <div className="fl-product-cards">
            {products.slice(0,4).map((product, index) => (
              <Reveal key={product.number} delay={index * 90}>
                <article
                  className="fl-product-card"
                  onMouseEnter={() => setActiveProduct(index)}
                >
                  <button
                    className="fl-product-arrow"
                    aria-label={`Enquire about ${product.name}`}
                    onClick={() => enquire(product)}
                  >
                    ↗
                  </button>

                  <div className="fl-product-image">
                    <span className="fl-product-number">{product.number}</span>
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>

                  <div className="fl-product-card-info">
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                    <button onClick={() => enquire(product)}>
                      Enquire about product <span>→</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="fl-manufacturing">
        <div className="fl-manufacturing-inner">
          <Reveal className="fl-manufacturing-copy">
            <Eyebrow>ABOUT FOOTLUXE</Eyebrow>
            <h2>
              Manufacturing
              <br /> comfort for a
              <br /><span>better tomorrow.</span>
            </h2>
            <p>
              Footluxe develops insole and footwear component solutions
              with a focus on materials, comfort and manufacturing.
              We help footwear brands explore product solutions.
            </p>
            <button
              className="fl-button fl-button-outline"
              onClick={() => goTo("about")}
            >
              Know More About Us <span>↗</span>
            </button>
          </Reveal>

          <Reveal className="fl-factory-visual" delay={150}>
            <div className="fl-factory-image">
              <img
                src="/soles/factory.png"
                alt="Footluxe manufacturing facility"
                loading="lazy"
              />
              <div className="fl-factory-overlay" />
              <div className="fl-factory-caption">
                <span>PRECISION / PROCESS / PERFORMANCE</span>
                <strong>Made with purpose.</strong>
              </div>
            </div>
          </Reveal>

          <div className="fl-manufacturing-side">
            {["Product development", "Material selection", "Manufacturing solutions"].map(
              (item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="fl-benefits-section">
        <div className="fl-benefits-inner">
          <Reveal className="fl-benefits-heading">
            <Eyebrow>WHY CHOOSE FOOTLUXE</Eyebrow>
            <h2>Quality. Innovation. <span>Reliability.</span></h2>
          </Reveal>

          <div className="fl-benefit-grid">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 90}>
                <article className="fl-benefit-card">
                  <div className="fl-benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                  <span className="fl-benefit-index">0{index + 1}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="fl-cta-section">
        <div className="fl-cta-glow" />
        <Reveal className="fl-cta-content">
          <Eyebrow>LET'S BUILD SOMETHING BETTER</Eyebrow>
          <h2>Have a product <br /><span>in mind?</span></h2>
          <p>
            Tell us about your requirements and explore the right
            footwear component solution for your brand.
          </p>
          <button
            className="fl-button fl-button-orange"
            onClick={() => goTo("contact")}
          >
            Start a Conversation <span>↗</span>
          </button>
        </Reveal>
        <div className="fl-cta-mark">FL.</div>
      </section>
    </main>
  );
}

export default Home;