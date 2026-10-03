import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Minus, ArrowRight, DollarSign, Sparkles, Sliders } from 'lucide-react';
import { PACKAGES_DATA, areas } from '../data';
import { E, Stagger, Item, Reveal } from '../motion';

export default function Packages() {
  const [open, setOpen] = useState(3); // Default to Royal
  const [estimatorSqFt, setEstimatorSqFt] = useState(2500);
  const [estimatorTier, setEstimatorTier] = useState('royal');

  const selectedPkg = open !== null ? PACKAGES_DATA[open] : null;

  const estimatedTotal = useMemo(() => {
    const pkg = PACKAGES_DATA.find(p => p.id === estimatorTier);
    if (!pkg) return '—';
    const total = pkg.numericRate * estimatorSqFt;
    if (total >= 10000000) {
      return `₹${(total / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(total / 100000).toFixed(1)} L`;
  }, [estimatorSqFt, estimatorTier]);

  return (
    <section id="packages" className="sec">
      <div className="wrap">
        <Reveal className="head" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-2.5">
            <p className="eyebrow gold">OUR PACKAGES</p>
          </div>
          <h2>Find the Perfect Package for Your Dream Home.</h2>
          <p className="sub" style={{ margin: '0 auto' }}>
            Choose a level of finish that matches your vision, lifestyle and expectations.
          </p>
        </Reveal>

        {/* Interactive Built-Up Area Investment Estimator */}
        <Reveal className="estimator-box">
          <div className="est-header">
            <Sliders size={22} className="gold" />
            <div>
              <h3>Interactive Turnkey Investment Estimator</h3>
              <p className="mute">Slide to adjust your built-up area and preview estimated package investments.</p>
            </div>
          </div>
          <div className="est-grid">
            <div className="est-slider-wrap">
              <div className="est-label-row">
                <span>Built-Up Area</span>
                <b className="gold">{estimatorSqFt.toLocaleString()} SQ.FT</b>
              </div>
              <input
                type="range"
                min={1500}
                max={15000}
                step={250}
                value={estimatorSqFt}
                onChange={(e) => setEstimatorSqFt(Number(e.target.value))}
                aria-label="Approximate Built-Up Area in Square Feet"
                className="est-slider"
              />
              <div className="est-range-marks">
                <span>1,500 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>10,000 sq.ft</span>
                <span>15,000 sq.ft</span>
              </div>
            </div>

            <div className="est-tiers-wrap">
              <span className="est-label">Select Package Tier</span>
              <div className="est-tier-buttons">
                {PACKAGES_DATA.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`est-tier-btn ${estimatorTier === p.id ? 'active' : ''}`}
                    onClick={() => setEstimatorTier(p.id)}
                  >
                    <b>{p.name}</b>
                    <small>{p.pricePerSqFt}/sq.ft</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="est-result-wrap">
              <span className="est-result-label">Estimated Turnkey Investment</span>
              <div className="est-result-value">{estimatedTotal}</div>
              <p className="mute small">Fixed-price escrow contract with zero escalation.</p>
              <a href="#contact" className="btn btn-g btn-sm">Request Itemized BOQ</a>
            </div>
          </div>
        </Reveal>

        {/* 4 Package Cards */}
        <Stagger className="tiers" style={{ marginTop: 48 }}>
          {PACKAGES_DATA.map((p, i) => (
            <Item
              key={p.id}
              className={'tier' + (p.featured ? ' royal' : '') + (open === i ? ' on' : '')}
            >
              {p.featured && (
                <div className="tier-badge">
                  <Sparkles size={12} /> ULTIMATE LUXURY
                </div>
              )}
              <p className="eyebrow gold">{p.name}</p>
              <h3>{p.subtitle}</h3>
              <p className="tagline-text">{p.tagline}</p>
              <div className="price-tag">
                {p.pricePerSqFt}
                <span>/sq.ft</span>
              </div>
              <p className="mute small">{p.description}</p>
              <ul>
                {p.keyInclusions.map((x) => (
                  <li key={x}>
                    <Check size={14} className="gold" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <button
                className="link"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {open === i ? `Hide ${p.name} Specs ↑` : `Explore ${p.name} →`}
              </button>
            </Item>
          ))}
        </Stagger>

        {/* Detailed Area Specs Drawer */}
        <AnimatePresence mode="wait" initial={false}>
          {selectedPkg && (
            <motion.div
              key={selectedPkg.id}
              className="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1, transition: { duration: 0.8, ease: E } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.4, ease: E } }}
            >
              <motion.div
                className="detail-in"
                initial="h"
                animate="s"
                variants={{ s: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } } }}
              >
                <div className="detail-top-row">
                  <div>
                    <span className="eyebrow gold">{selectedPkg.name} SPECIFICATIONS MATRIX</span>
                    <h3>{selectedPkg.name} — {selectedPkg.subtitle} Tier</h3>
                    <p className="mute">{selectedPkg.description}</p>
                  </div>
                  <div className="detail-price-box">
                    <span className="price-val">{selectedPkg.pricePerSqFt}</span>
                    <span className="price-unit">per sq.ft built-up area</span>
                  </div>
                </div>

                <div className="specs-area-grid">
                  {selectedPkg.areas.map((a) => (
                    <motion.div
                      key={a.area}
                      className="spec-area-card"
                      variants={{ h: { opacity: 0, y: 12 }, s: { opacity: 1, y: 0 } }}
                    >
                      <div className="spec-area-head">
                        <strong>{a.area}</strong>
                        <span className="spec-area-cat">{a.category}</span>
                      </div>
                      <p className="spec-area-body">{a.spec}</p>
                      <div className="spec-area-brand">
                        <span>Brand:</span> <b>{a.brand}</b>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="detail-actions">
                  <a href="#contact" className="btn btn-g">
                    Request a {selectedPkg.name} Consultation <ArrowRight size={14} />
                  </a>
                  <a href="#compare" className="btn btn-o">
                    Compare All Tiers
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
