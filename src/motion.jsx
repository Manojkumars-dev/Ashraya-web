import { motion } from 'framer-motion';
import AshrayaLogo from './components/AshrayaLogo';

export const E = [0.16, 1, 0.3, 1];
export const vp = { once: true, amount: 0.2 };
export const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: E } } };
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
export const Reveal = ({ children, ...p }) => <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp} {...p}>{children}</motion.div>;
export const Stagger = ({ children, ...p }) => <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} {...p}>{children}</motion.div>;
export const Item = ({ children, ...p }) => <motion.div variants={fadeUp} {...p}>{children}</motion.div>;

export const Ph = ({ h = 40, className = '' }) => <div className={'ph ' + className} style={{ '--h': h }} />;

export const Logo = ({ full }) => (
  <AshrayaLogo variant={full ? 'footer' : 'header'} />
);
