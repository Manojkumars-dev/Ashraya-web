import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useInView, animate } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Ruler,
  Calendar,
  Gem,
  Hammer,
  Award,
  MessageSquare,
  ClipboardList,
  CalendarCheck,
} from 'lucide-react';
import {
  stats,
  SERVICES_DATA,
  PROJECTS_DATA,
  COMPARISON_ROWS,
  WHY_ASHRAYA_DATA,
  PROCESS_STEPS,
  MATERIALS_DATA,
  TESTIMONIALS_DATA,
  TRUST_ITEMS,
  BRAND_ASSETS,
  CONTACT_INFO,
} from '../data';
import Logo from './Logo';
import { E, Reveal, Stagger, Item } from '../motion';

const Head = ({ e, t, s }) => (
  <Reveal className="head">
    <p className="eyebrow gold">{e}</p>
    <h2>{t}</h2>
    {s && <p className="sub">{s}</p>}
  </Reveal>
);

function Stat({ n, suf, l }) {
  const r = useRef(),
    v = useInView(r, { once: true, amount: 0.6 });
  const [x, setX] = useState(0);

  useEffect(() => {
    if (v) {
      const c = animate(0, n, {
        duration: 2.2,
        ease: E,
        onUpdate: (u) => setX(Math.round(u)),
      });
      return () => c.stop();
    }
  }, [v, n]);

  return (
    <div ref={r} className="stat">
      <b>
        {x}
        {suf}
      </b>
      <span>{l}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ABOUT / WHO WE ARE
   ═══════════════════════════════════════════ */
export const About = () => (
  <section id="who-we-are" className="sec">
    <div className="wrap split">
      <div>
        <Reveal>
          <p className="eyebrow gold">WHO WE ARE</p>
          <h2>
            We don't just build spaces.<br />
            <em>We shape the way they feel.</em>
          </h2>
          <p className="mute">
            Ashraya Constructions &amp; Interiors brings construction and interior craftsmanship together under one roof. From structural foundations to the finest interior details, we create thoughtfully designed spaces where architecture meets everyday living.
          </p>
        </Reveal>
        <div className="stats">
          {stats.map(([n, s, l]) => (
            <Stat key={l} n={n} suf={s} l={l} />
          ))}
        </div>
      </div>
      <motion.div
        className="tall"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: E }}
      >
        <picture>
          <source media="(max-width:768px)" srcSet={BRAND_ASSETS.whoWeAreMobile} />
          <img
            src={BRAND_ASSETS.whoWeAreDesktop}
            alt="Double-height luxury living pavilion with concealed cove lighting, bookmatched dark timber, and Italian marble"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </picture>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════ */
export const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="services" className="sec alt">
      <div className="wrap">
        <Head
          e="SERVICES"
          t="Everything Your Space Needs."
          s="From the first foundation to the final finishing touch."
        />
        <Stagger className="services-luxury-grid">
          {SERVICES_DATA.map((s) => {
            const isExp = expandedId === s.id;
            return (
              <Item key={s.id} className={`service-luxury-card ${isExp ? 'expanded' : ''}`}>
                <div className="service-img-wrap">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                  <div className="service-idx-badge">{s.index}</div>
                </div>
                <div className="service-content-body">
                  <span className="service-cat-tag">{s.category}</span>
                  <h3>{s.title}</h3>
                  <p className="service-short-desc">{s.shortDesc}</p>

                  <AnimatePresence>
                    {isExp && (
                      <motion.div
                        className="service-expand-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="service-full-desc">{s.fullDesc}</p>
                        <ul className="service-deliverables-list">
                          {s.deliverables.map((d, di) => (
                            <li key={di}>
                              <CheckCircle size={14} className="gold" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className="service-details-toggle"
                    onClick={() => setExpandedId(isExp ? null : s.id)}
                  >
                    {isExp ? 'Show Less' : 'Full Deliverables'}
                    {isExp ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════ */
export const Projects = () => {
  const [activeProjIdx, setActiveProjIdx] = useState(0);
  const activeProj = PROJECTS_DATA[activeProjIdx];

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <Head
          e="FEATURED PROJECTS"
          t="Spaces We've Brought to Life."
          s="Take a look at recently delivered turnkey architectural monuments across Bangalore, Channapatna, Mandya & Maddur."
        />

        <div className="project-tabs-row">
          {PROJECTS_DATA.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              className={`proj-tab-btn ${activeProjIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveProjIdx(idx)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeProj.id}
          className="project-showcase-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: E }}
        >
          <div className="proj-showcase-img">
            <picture>
              <source media="(max-width:768px)" srcSet={activeProj.mobileImage || activeProj.image} />
              <img src={activeProj.image} alt={activeProj.alt} loading="lazy" />
            </picture>
          </div>

          <div className="proj-showcase-info">
            <div className="proj-meta-tags">
              <span><MapPin size={14} /> {activeProj.location}</span>
              <span><Ruler size={14} /> {activeProj.area}</span>
              <span><Calendar size={14} /> {activeProj.year}</span>
            </div>
            <p className="proj-summary-p">{activeProj.summary}</p>
            <p className="proj-notes-p">{activeProj.architecturalNotes}</p>

            <div className="proj-highlights-list">
              <span className="eyebrow gold">KEY HIGHLIGHTS</span>
              <ul>
                {activeProj.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="gold" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="btn btn-g" style={{ marginTop: 24 }}>
              Talk to Our Experts <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   COMPARE
   ═══════════════════════════════════════════ */
export const Compare = () => (
  <section id="compare" className="sec alt">
    <div className="wrap">
      <Head
        e="COMPARE"
        t="Which Experience Is Right For You?"
      />
      <Reveal className="tablewrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Classic</th>
              <th>Premium</th>
              <th className="gold">Royal</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((r) => (
              <tr key={r.dimension}>
                <td className="comp-dim-col"><b>{r.dimension}</b></td>
                <td>{r.basic}</td>
                <td>{r.classic}</td>
                <td>{r.premium}</td>
                <td className="gold" style={{ fontWeight: 500 }}>{r.royal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   WHY ASHRAYA
   ═══════════════════════════════════════════ */
export const Why = () => (
  <section id="why" className="sec">
    <div className="wrap">
      <Head
        e="WHY ASHRAYA"
        t="Why Build With Ashraya?"
        s="Six pillars of uncompromising excellence that define every project we deliver."
      />
      <Stagger className="grid3">
        {WHY_ASHRAYA_DATA.map((w) => (
          <Item key={w.title} className="why-luxury-card">
            <span className="why-num-tag">{w.index}</span>
            <h3>{w.title}</h3>
            <p className="mute">{w.description}</p>
          </Item>
        ))}
      </Stagger>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════ */
export function Process() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  });

  return (
    <section id="process" className="sec alt" ref={ref}>
      <div className="wrap">
        <Head
          e="OUR PROCESS"
          t="From Dream to Reality."
          s="A disciplined stage-gate methodology engineered for absolute clarity from first sketch to ceremonial key handover."
        />

        <div className="process-luxury-timeline">
          {PROCESS_STEPS.map((s, idx) => (
            <Reveal key={s.step} className="process-luxury-step" delay={idx * 0.05}>
              <div className="step-num-circle">
                <span>{s.step}</span>
              </div>
              <div className="step-content-card">
                <div className="step-top-line">
                  <span className="step-phase-tag">{s.phase}</span>
                  <span className="step-duration-tag">{s.duration}</span>
                </div>
                <h3>{s.title}</h3>
                <p className="step-desc-text">{s.description}</p>
                <div className="step-deliverable-box">
                  <span className="gold">Deliverable:</span> {s.deliverable}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MATERIALS
   ═══════════════════════════════════════════ */
export const Materials = () => (
  <section id="materials" className="sec">
    <div className="wrap">
      <Head
        e="MATERIALS & FINISHES"
        t="Every Finish Tells a Story."
        s="Authentic Italian quarry stones, kiln-aged timbers, and PVD architectural brassware curated in our private sample library."
      />
      <Stagger className="materials-luxury-grid">
        {MATERIALS_DATA.map((m) => (
          <Item key={m.id} className="material-luxury-card">
            <div className="mat-img-frame">
              <img src={m.image} alt={m.alt} loading="lazy" />
              <span className="mat-cat-badge">{m.category}</span>
            </div>
            <div className="mat-info-body">
              <h4>{m.name}</h4>
              <p className="mat-provenance-p">{m.provenance}</p>
              <p className="mat-desc-p">{m.description}</p>
            </div>
          </Item>
        ))}
      </Stagger>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════ */
function ReviewTiltCard({ review }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      className="review-tilt-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="stars" aria-label="5 stars" style={{ display: 'flex', gap: '4px' }}>
        {[0, 1, 2, 3, 4].map((k) => (
          <Star key={k} size={15} fill="#D4AF37" color="#D4AF37" />
        ))}
      </div>
      <p className="review-quote-text">“{review.quote}”</p>
      <div className="review-footer-row">
        <span className="review-client-name">{review.clientName}</span>
        <span className="review-location-badge">
          <MapPin size={13} className="gold" />
          {review.location}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="sec alt" style={{ overflow: 'hidden' }}>
      <div className="wrap">
        <Head
          e="CLIENT REVIEWS"
          t="Genuine Reviews From Homeowners."
          s="Real feedback from families who entrusted their construction and interiors to Ashraya across Bangalore, Channapatna, Mandya, and Maddur."
        />
      </div>
      <div className="reviews-ticker-wrapper">
        <div className="reviews-ticker-track">
          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((review, i) => (
            <ReviewTiltCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST
   ═══════════════════════════════════════════ */
const TI = [Gem, Hammer, Award, MessageSquare, ClipboardList, CalendarCheck];

export const Trust = () => (
  <section className="sec">
    <div className="wrap">
      <Head
        e="TRUST"
        t="Built With Precision. Designed With Purpose."
      />
      <Stagger className="grid3 trust">
        {TRUST_ITEMS.map((t, i) => {
          const IconComponent = TI[i] || Shield;
          return (
            <Item key={t.title} className="trust-luxury-card">
              <IconComponent size={24} className="gold" strokeWidth={1.5} />
              <div>
                <h4>{t.title}</h4>
                <p className="gold small" style={{ margin: '2px 0 6px' }}>{t.subtitle}</p>
                <p className="mute small">{t.description}</p>
              </div>
            </Item>
          );
        })}
      </Stagger>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
export const CTA = () => (
  <section className="cta">
    <img
      src={BRAND_ASSETS.heroDesktop}
      alt="Ashraya luxury residence"
      className="fill"
      style={{ objectFit: 'cover', opacity: 0.25 }}
      loading="lazy"
    />
    <div className="shade" />
    <Reveal className="wrap cta-in">
      <p className="eyebrow gold">COMMISSION YOUR SANCTUARY</p>
      <h2>
        Your Dream Home Starts With a <em>Conversation.</em>
      </h2>
      <p className="lead">
        Tell us what you're imagining. We'll help turn it into a space you can call your own.
      </p>
      <div className="row c">
        <a href="#contact" className="btn btn-g">
          Talk to Our Experts
        </a>
        <a href="#contact" className="btn btn-o">
          Get a Consultation
        </a>
      </div>
    </Reveal>
  </section>
);

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="sec">
      <div className="wrap split c">
        <div>
          <Head
            e="CONTACT"
            t="Let's Build Something Beautiful."
            s="Share your plot or residence parameters below. Our Principal Architect will connect with you within 24 business hours."
          />
          <ul className="info">
            <li>
              <Phone size={18} className="gold" style={{ flexShrink: 0, marginTop: 4 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="tel:+917795259014" style={{ color: 'var(--ivory)', transition: 'color .3s' }}>
                  +91 77952 59014
                </a>
                <a href="tel:+918722178305" style={{ color: 'var(--ivory)', transition: 'color .3s' }}>
                  +91 87221 78305
                </a>
              </div>
            </li>
            <li>
              <Mail size={18} className="gold" />
              <a href="mailto:studio@ashraya.in" style={{ color: 'var(--ivory)' }}>studio@ashraya.in</a>
            </li>
            <li>
              <MapPin size={18} className="gold" />
              <span>Bangalore · Channapatna · Mandya · Maddur, Karnataka</span>
            </li>
            <li>
              <Clock size={18} className="gold" />
              <span>Mon–Sat: 9:30 AM – 7:00 PM (By Appointment)</span>
            </li>
          </ul>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 14 }}>
            <a
              className="btn btn-o"
              href="https://wa.me/917795259014"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp (+91 77952 59014)
            </a>
          </div>
        </div>
        <Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="contact-luxury-form"
          >
            <div className="form-double-col">
              <label>
                Full Name *
                <input required name="name" placeholder="e.g. Rajiv Menon" />
              </label>
              <label>
                Phone Number *
                <input required name="phone" type="tel" placeholder="+91 77952 59014" />
              </label>
            </div>
            <label>
              Email Address *
              <input required name="email" type="email" placeholder="rajiv@example.com" />
            </label>
            <div className="form-double-col">
              <label>
                Location of Plot / Site
                <input name="location" placeholder="e.g. Bangalore, Channapatna, Mandya, Maddur" />
              </label>
              <label>
                Approximate Area (sq.ft)
                <input name="area" placeholder="e.g. 5,000 sq.ft" />
              </label>
            </div>
            <div className="form-double-col">
              <label>
                Property Type
                <select name="type">
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Apartment</option>
                  <option>Commercial</option>
                </select>
              </label>
              <label>
                Interested Package
                <select name="pkg" defaultValue="Royal">
                  <option value="Royal">Royal Package (₹2,999/sq.ft · Ultimate Luxury)</option>
                  <option value="Premium">Premium Package (₹2,699/sq.ft · Signature)</option>
                  <option value="Classic">Classic Package (₹2,399/sq.ft · Elevated)</option>
                  <option value="Basic">Basic Package (₹1,999/sq.ft · Essential)</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </label>
            </div>
            <label className="full">
              Tell us about your project
              <textarea name="msg" rows="4" placeholder="Tell us about your architectural goals, timeline, or family lifestyle requirements..." />
            </label>
            <button className="btn btn-g full" type="submit">
              {sent ? 'Request received ✓' : 'Request a Consultation'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
const FC = [
  [
    'NAVIGATION',
    [
      ['Home', '#hero'],
      ['Who We Are', '#who-we-are'],
      ['Services', '#services'],
      ['Featured Projects', '#projects'],
      ['Why Ashraya', '#why'],
    ],
  ],
  [
    'BESPOKE PACKAGES',
    [
      ['Royal Package (Ultimate Luxury)', '#packages'],
      ['Premium Package (Signature)', '#packages'],
      ['Classic Package (Elevated)', '#packages'],
      ['Basic Package (Essential)', '#packages'],
      ['Package Comparison Matrix', '#compare'],
    ],
  ],
  [
    'ATELIER & CRAFT',
    [
      ['Interactive House Anatomy', '#included'],
      ['Materials & Finishes Library', '#materials'],
      ['8-Step Execution Blueprint', '#process'],
      ['Book Private Consultation', '#contact'],
    ],
  ],
];

export const Footer = () => (
  <footer className="foot">
    <div className="wrap">
      <div className="fg">
        <div className="fbrand">
          <a href="#hero" className="flogo">
            <Logo variant="footer" />
          </a>
          <p style={{ marginTop: 16, lineHeight: 1.7 }}>
            An architectural and interior design atelier uniting turnkey structural engineering with bespoke luxury interiors across South India.
          </p>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} className="gold" style={{ flexShrink: 0 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px' }}>
                <a href="tel:+917795259014" style={{ color: 'var(--ivory)' }}>+91 77952 59014</a>
                <span style={{ color: 'var(--mute)' }}>·</span>
                <a href="tel:+918722178305" style={{ color: 'var(--ivory)' }}>+91 87221 78305</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--mute)', fontSize: '0.82rem' }}>
              <MapPin size={15} className="gold" style={{ flexShrink: 0 }} />
              <span>Bangalore · Channapatna · Mandya · Maddur</span>
            </div>
          </div>
          <div className="soc" style={{ marginTop: 20 }}>
            {[
              [Instagram, 'Instagram'],
              [Facebook, 'Facebook'],
              [Linkedin, 'LinkedIn'],
              [Youtube, 'YouTube'],
            ].map(([I, n]) => (
              <a key={n} href="#" aria-label={n}>
                <I size={18} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>
        {FC.map(([h, l]) => (
          <nav key={h} aria-label={h}>
            <h4 className="gold" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
              {h}
            </h4>
            {l.map(([t, href]) => (
              <a key={t} href={href} style={{ display: 'block', marginBottom: 10, color: 'var(--mute)', fontSize: '0.88rem' }}>
                {t}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="fb">
        <p>© 2026 Ashraya Constructions &amp; Interiors. All Rights Reserved.</p>
        <p className="gold">DREAMS ON BEAMS · BANGALORE · CHANNAPATNA · MANDYA · MADDUR</p>
      </div>
    </div>
  </footer>
);
