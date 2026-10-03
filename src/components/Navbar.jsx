import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav } from '../data';
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
      <a href="#contact" className="btn btn-o nav-cta">
        Talk to an Expert
      </a>
      <button
        className="burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} color="#D4AF37" /> : <Menu size={24} color="#f0ede6" />}
      </button>

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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
