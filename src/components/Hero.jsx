import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { E } from '../motion';
import { BRAND_ASSETS } from '../data';

const up = (d) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: E, delay: d },
});

export default function Hero() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y }}>
        <picture>
          <source media="(max-width:768px)" srcSet={BRAND_ASSETS.heroMobile} />
          <motion.img
            src={BRAND_ASSETS.heroDesktop}
            alt="Luxury architectural villa by Ashraya"
            className="hero-img"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>
      </motion.div>
      <div className="hero-shade" />
      <div className="wrap hero-in">
        <motion.p className="eyebrow gold dotl" {...up(0.3)}>
          ASHRAYA / CONSTRUCTIONS &amp; INTERIORS
        </motion.p>
        <motion.h1 {...up(0.6)}>
          Dreams on <em>Beams.</em>
        </motion.h1>
        <motion.p className="lead" {...up(1.0)}>
          From structure to signature interiors, we create spaces designed around the way you dream, live and belong.
        </motion.p>
        <motion.div className="row c" {...up(1.4)}>
          <a href="#projects" className="btn btn-g">
            Explore Our Work
          </a>
          <a href="#contact" className="btn btn-o">
            Talk to Our Experts
          </a>
        </motion.div>
        <motion.div className="proof" {...up(1.8)}>
          <span>100+ Bespoke Spaces Delivered</span>
          <i>·</i>
          <span>10-Year Structural Warranty</span>
          <i>·</i>
          <b>Bangalore · Channapatna · Mandya · Maddur</b>
        </motion.div>
      </div>
      <motion.div
        className="scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        SCROLL TO DISCOVER<span />
      </motion.div>
    </section>
  );
}
