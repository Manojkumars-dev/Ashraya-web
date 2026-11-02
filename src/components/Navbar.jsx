import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { nav, CONTACT_INFO } from '../data';
import { E } from '../motion';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));
  const go = () => setOpen(false);

  return (
    <motion.header
      className={'nav' + (scrolled ? ' scrolled' : '')}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: E }}
    >
      <a href="#hero" aria-label="Ashraya Constructions & Interiors Home" className="nav-logo-link">
        <Logo variant="header" />
      </a>
      <nav className="links" aria-label="Primary">
        {nav.map(([l, id]) => (
          <a key={id} href={'#' + id} className="ul">
            {l}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a href="tel:+917795259014" className="nav-phone-pill" title="Call Ashraya">
          <Phone size={13} className="gold" />
          <span>+91 77952 59014</span>
        </a>
        <a href="#contact" className="btn btn-o nav-cta">
          Talk to an Expert
        </a>
        <a
          href="tel:+917795259014"
          className="nav-call-mobile"
          aria-label="Call Ashraya +91 77952 59014"
        >
          <Phone size={18} />
        </a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} color="#D4AF37" /> : <Menu size={24} color="#f0ede6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.06 } } }}>
              {nav.map(([l, id]) => (
                <motion.a
                  key={id}
                  href={'#' + id}
                  onClick={go}
                  variants={{ h: { opacity: 0, y: 16 }, s: { opacity: 1, y: 0 } }}
                >
                  {l}
                </motion.a>
              ))}
              <a href="#contact" onClick={go} className="btn btn-g" style={{ marginTop: 12 }}>
                Talk to an Expert
              </a>
              <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', color: 'var(--mute)', textTransform: 'uppercase' }}>Direct Call:</span>
                <a href="tel:+917795259014" style={{ fontSize: '0.95rem', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={15} /> +91 77952 59014
                </a>
                <a href="tel:+918722178305" style={{ fontSize: '0.95rem', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={15} /> +91 87221 78305
                </a>
                <a
                  href="https://wa.me/917795259014"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 6, fontSize: '0.95rem', color: '#25D366', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <span style={{ fontSize: '1rem' }}>💬</span> WhatsApp: +91 77952 59014
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
