import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Environment, Lightformer, ContactShadows, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { spots, tiers } from '../data';
import { E, Ph } from '../motion';

const STAGES = ['Bare shell', 'Flooring & walls', 'Ceiling & lighting', 'Furniture & joinery', 'Evening glow'];
const FLOOR = ['#8a8378', '#a99b80', '#cfc6b2', '#e8e2d4'], FR = [0.8, 0.5, 0.22, 0.1];
const GOLD = '#D4AF37', WARM = '#ffb766';
const mat = (c, e, ei, r, m) => <meshStandardMaterial color={c} roughness={r} metalness={m} emissive={e || '#000'} emissiveIntensity={ei} />;
const Box = ({ p, s, c, e, ei = 0, r = 0.65, m = 0.1 }) => <mesh position={p} castShadow receiveShadow><boxGeometry args={s} />{mat(c, e, ei, r, m)}</mesh>;
const Cyl = ({ p, a, c, e, ei = 0, r = 0.6, m = 0.1 }) => <mesh position={p} castShadow><cylinderGeometry args={a} />{mat(c, e, ei, r, m)}</mesh>;
const Sph = ({ p, a, c, e, ei = 0, r = 0.8, m = 0 }) => <mesh position={p} castShadow><sphereGeometry args={a} />{mat(c, e, ei, r, m)}</mesh>;
const Gold = ({ p, s, ei = 0.5 }) => <Box p={p} s={s} c={GOLD} e={GOLD} ei={ei} m={0.9} r={0.25} />;

function Pop({ show, pos = [0, 0, 0], children }) {
  const g = useRef();
  useFrame((_, d) => { const k = g.current.scale.x, t = show ? 1 : 0.001; g.current.scale.setScalar(k + (t - k) * Math.min(1, d * 3)); });
  return <group ref={g} position={pos} scale={0.001}>{children}</group>;
}
function Lights({ stage }) {
  const a = useRef(), d = useRef(), w = useRef(), n = useRef();
  useFrame((_, dt) => {
    const k = Math.min(1, dt * 2), ev = stage >= 4;
    a.current.intensity += ((ev ? 0.18 : 0.6) - a.current.intensity) * k;
    d.current.intensity += ((ev ? 0.25 : 1.3) - d.current.intensity) * k;
    w.current.intensity += ((stage >= 2 ? (ev ? 45 : 12) : 0) - w.current.intensity) * k;
    n.current.intensity += ((ev ? 14 : 0) - n.current.intensity) * k;
  });
  return (<>
    <ambientLight ref={a} intensity={0.6} />
    <directionalLight ref={d} position={[6, 9, 7]} intensity={1.3} color="#ffe2bd" castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-9} shadow-camera-right={9} shadow-camera-top={9} shadow-camera-bottom={-9} />
    <pointLight ref={w} position={[0, 3.1, 0]} color={WARM} intensity={0} distance={18} />
    <pointLight ref={n} position={[-4.2, 2.4, -2]} color="#8fb0ff" intensity={0} distance={9} />
  </>);
}
function Room({ stage, tier, active, setActive }) {
  const ev = stage >= 4;
  return (<group>
    {/* shell */}
    <Box p={[0, -0.05, 0]} s={[10, 0.1, 8]} c="#3a3b3f" r={0.9} />
    <Box p={[0, 2.1, -4]} s={[10, 4.2, 0.2]} c="#24272d" r={0.9} /><Box p={[-5, 2.1, 0]} s={[0.2, 4.2, 8]} c="#202328" r={0.9} />
    {[-2.5, 0, 2.5].map((z) => (<group key={z}><Box p={[0, 4.05, z]} s={[10, 0.3, 0.35]} c="#2c2f36" /><Gold p={[0, 3.87, z]} s={[10, 0.04, 0.38]} ei={0.8} /></group>))}
    {/* night windows on the side wall */}
    {[-3, -1.2].map((z) => <Box key={z} p={[-4.87, 2.4, z]} s={[0.04, 2.2, 1.4]} c="#9fb7d9" e="#7fa6e0" ei={ev ? 1.8 : 0.4} r={0.1} />)}
    {/* floor, feature wall, art */}
    <Pop show={stage >= 1}>
      <Box p={[0, 0.03, 0]} s={[9.8, 0.06, 7.8]} c={FLOOR[tier]} r={FR[tier]} m={tier >= 2 ? 0.25 : 0.05} />
      {tier >= 2 && [-3, 0, 3].map((x) => <Gold key={x} p={[x, 0.07, 0]} s={[0.03, 0.01, 7.6]} ei={0.4} />)}
      <Box p={[-1.5, 2, -3.85]} s={[4.2, 3.3, 0.1]} c="#33281b" r={0.45} />
      {[-3.2, -2.35, -1.5, -0.65, 0.2].map((x) => <Gold key={x} p={[x, 2, -3.78]} s={[0.03, 3.3, 0.04]} ei={0.45} />)}
      {[-2.5, -0.7].map((x) => (<group key={x}><Gold p={[x, 2.45, -3.74]} s={[0.95, 1.25, 0.03]} ei={0.3} /><Box p={[x, 2.45, -3.72]} s={[0.85, 1.15, 0.03]} c="#14110c" /></group>))}
    </Pop>
    {/* ceiling cove, downlights, pendants */}
    <Pop show={stage >= 2}>
      {[-3.7, 3.7].map((z) => <Box key={z} p={[0, 3.55, z]} s={[9.4, 0.12, 0.5]} c="#1b1e24" />)}
      {[-4.7, 4.7].map((x) => <Box key={x} p={[x, 3.55, 0]} s={[0.5, 0.12, 7.4]} c="#1b1e24" />)}
      {[-3.4, 3.4].map((z) => <Box key={z} p={[0, 3.46, z]} s={[8.8, 0.04, 0.06]} c="#ffd68a" e={WARM} ei={3} />)}
      {[-4.4, 4.4].map((x) => <Box key={x} p={[x, 3.46, 0]} s={[0.06, 0.04, 6.8]} c="#ffd68a" e={WARM} ei={3} />)}
      {[[-2.2, 0.8], [2.6, -1.4], [2.8, 1.8]].map(([x, z]) => (<group key={x}>
        <Cyl p={[x, 3.1, z]} a={[0.01, 0.01, 0.9]} c="#777" /><Sph p={[x, 2.6, z]} a={[0.22, 24, 24]} c="#ffe8c0" e={WARM} ei={tier >= 2 ? 3.2 : 1.6} />
        {tier >= 3 && <><Sph p={[x + 0.4, 2.9, z]} a={[0.1, 16, 16]} c="#ffe8c0" e={WARM} ei={3} /><Sph p={[x - 0.4, 2.8, z]} a={[0.1, 16, 16]} c="#ffe8c0" e={WARM} ei={3} /></>}</group>))}
    </Pop>
    {/* living */}
    <Pop show={stage >= 3} pos={[-2.2, 0, 0.8]}>
      <Box p={[0, 0.06, 0.3]} s={[4, 0.04, 3]} c="#d8d0bd" r={1} /><Gold p={[0, 0.085, 0.3]} s={[3.6, 0.005, 2.6]} ei={0.15} />
      <Box p={[0, 0.3, 0]} s={[3, 0.5, 1.2]} c="#3a3f4a" r={0.95} /><Box p={[0, 0.8, -0.5]} s={[3, 0.6, 0.25]} c="#3a3f4a" r={0.95} />
      <Box p={[-1.45, 0.55, 0]} s={[0.1, 0.5, 1.2]} c="#343944" /><Box p={[1.45, 0.55, 0]} s={[0.1, 0.5, 1.2]} c="#343944" />
      {[-0.9, 0.9].map((x) => <Box key={x} p={[x, 0.7, -0.15]} s={[0.55, 0.5, 0.15]} c={x < 0 ? GOLD : '#e8e2d4'} r={0.9} m={x < 0 ? 0.5 : 0} />)}
      <Cyl p={[0, 0.2, 1.5]} a={[0.6, 0.6, 0.35, 32]} c="#241c12" m={0.5} r={0.3} /><Cyl p={[0, 0.4, 1.5]} a={[0.62, 0.62, 0.03, 32]} c="#e8e2d4" r={0.1} m={0.2} />
    </Pop>
    <Pop show={stage >= 3} pos={[0, 0, 2.6]}>
      <Cyl p={[0, 0.03, 0]} a={[0.3, 0.3, 0.05, 24]} c="#222" m={0.6} /><Cyl p={[0, 0.9, 0]} a={[0.02, 0.02, 1.8]} c={GOLD} m={0.9} /><Cyl p={[0, 1.8, 0]} a={[0.3, 0.42, 0.45, 28]} c="#f5e7c8" e={WARM} ei={1.4} />
    </Pop>
    <Pop show={stage >= 3} pos={[4.3, 0, 3.2]}>
      <Cyl p={[0, 0.3, 0]} a={[0.32, 0.26, 0.6, 24]} c="#1b1e24" m={0.4} r={0.3} />
      {[[0, 0.95, 0, 0.42], [0.2, 1.3, 0.1, 0.34], [-0.2, 1.55, -0.05, 0.3]].map(([x, y, z, r]) => <Sph key={y} p={[x, y, z]} a={[r, 16, 16]} c="#2f4a37" r={0.9} />)}
    </Pop>
    {/* kitchen */}
    <Pop show={stage >= 3} pos={[2.5, 0, -1.5]}>
      <Box p={[0, 0.5, 0]} s={[3, 1, 1.2]} c="#2a2d33" r={0.45} /><Box p={[0, 1.04, 0]} s={[3.1, 0.08, 1.3]} c="#ece6d8" r={0.12} m={0.2} />
      <Gold p={[0, 0.62, 0.61]} s={[2.4, 0.02, 0.01]} ei={0.5} />
      {[-0.9, 0, 0.9].map((x) => (<group key={x}><Cyl p={[x, 0.36, 1.1]} a={[0.03, 0.03, 0.72]} c="#888" m={0.8} /><Cyl p={[x, 0.74, 1.1]} a={[0.22, 0.22, 0.07, 24]} c="#4a3b27" r={0.5} /></group>))}
    </Pop>
    <Pop show={stage >= 3}>
      <Box p={[2.5, 2.1, -3.84]} s={[3.4, 1.4, 0.05]} c="#e2dccd" r={0.1} m={0.2} />
      <Box p={[2.5, 3.0, -3.55]} s={[3.4, 0.7, 0.6]} c="#2a2d33" r={0.45} /><Gold p={[2.5, 2.64, -3.24]} s={[3.4, 0.015, 0.015]} ei={1.2} />
    </Pop>
    <Pop show={stage >= 3} pos={[2.8, 0, 1.8]}>
      <Box p={[0, 0.8, 0]} s={[2, 0.08, 1]} c="#4a3b27" r={0.3} m={0.1} />
      {[[-0.9, -0.4], [0.9, -0.4], [-0.9, 0.4], [0.9, 0.4]].map(([x, z]) => <Cyl key={x + '' + z} p={[x, 0.4, z]} a={[0.03, 0.03, 0.8]} c={GOLD} m={0.9} r={0.25} />)}
      {[-0.5, 0.5].map((x) => <group key={x}><Box p={[x, 0.45, 0.85]} s={[0.5, 0.08, 0.5]} c="#3a3f4a" /><Box p={[x, 0.8, 1.08]} s={[0.5, 0.6, 0.06]} c="#3a3f4a" /></group>)}
    </Pop>
    {/* bedroom + bath */}
    <Pop show={stage >= 3} pos={[-3.3, 0, -2.5]}>
      <Box p={[0, 0.3, 0]} s={[2.2, 0.4, 2.6]} c="#2a2d33" /><Box p={[0, 0.6, 0.05]} s={[2.1, 0.3, 2.4]} c="#e8e2d4" r={0.95} /><Box p={[0, 0.78, -0.9]} s={[1.9, 0.18, 0.5]} c="#cfc6b2" r={1} />
      <Box p={[0, 0.95, -1.3]} s={[2.5, 1.5, 0.15]} c="#33281b" r={0.4} /><Gold p={[0, 0.2, 1.31]} s={[2.2, 0.03, 0.02]} ei={0.4} />
    </Pop>
    <Pop show={stage >= 3} pos={[4.2, 0, -3.3]}><Box p={[0, 1.5, 0]} s={[1.4, 3, 1.4]} c="#20242B" r={0.08} m={0.6} /><Gold p={[0, 1.5, 0.71]} s={[0.04, 3, 0.02]} ei={0.6} /></Pop>
    <Pop show={stage >= 3 && tier >= 1} pos={[-4.55, 0, 1.5]}>
      <Box p={[0, 1.5, 0]} s={[0.8, 3, 3]} c="#4a3b27" r={0.4} />{[-0.7, 0.7].map((z) => <Gold key={z} p={[0.41, 1.5, z]} s={[0.02, 2.4, 0.04]} ei={0.35} />)}
    </Pop>
    <Pop show={stage >= 3 && tier >= 3} pos={[0.5, 0, -3.8]}><Box p={[0, 1.4, 0]} s={[0.5, 0.8, 0.05]} c="#111" e="#ffd68a" ei={1.2} /></Pop>
    <ContactShadows position={[0, 0.01, 0]} opacity={0.55} scale={12} blur={2.4} far={4} />
    <Sparkles count={70} scale={[9, 3.4, 7]} position={[0, 2, 0]} size={2.2} speed={0.25} color={GOLD} opacity={stage >= 2 ? 0.7 : 0} />
    {stage >= 3 && spots.map((s) => (
      <Html key={s.k} position={s.p} center zIndexRange={[5, 0]}>
        <button className={'hot' + (active === s.k ? ' on' : '')} aria-label={s.k} onClick={() => setActive(active === s.k ? null : s.k)} />
      </Html>))}
  </group>);
}
export default function Scene() {
  const ref = useRef();
  const [stage, setStage] = useState(0), [tier, setTier] = useState(2), [active, setActive] = useState(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStage(Math.min(4, Math.max(0, Math.floor(v * 5)))));
  const weak = typeof navigator !== 'undefined' && navigator.deviceMemory && navigator.deviceMemory < 4;
  const touch = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches;
  const sp = spots.find((s) => s.k === active);
  return (
    <section id="included" className="scene" ref={ref}>
      <div className="stick">
        {weak ? <Ph h={40} className="fill" /> : (
          <Canvas shadows={!touch} camera={{ position: [8, 5.4, 10.5], fov: 40 }} dpr={[1, touch ? 1.25 : 1.75]} gl={{ antialias: true }} style={{ touchAction: 'pan-y' }}>
            <color attach="background" args={['#0b0d10']} /><fog attach="fog" args={['#0b0d10', 16, 30]} />
            <Environment resolution={128}>
              <Lightformer form="rect" intensity={2} position={[0, 6, 4]} scale={[10, 3, 1]} color="#ffe2bd" />
              <Lightformer form="rect" intensity={1} position={[-6, 3, 0]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} color="#8fb0ff" />
            </Environment>
            <Lights stage={stage} />
            <Room stage={stage} tier={tier} active={active} setActive={setActive} />
            <OrbitControls enablePan={false} enableZoom={false} target={[0, 1.6, 0]} minPolarAngle={0.7} maxPolarAngle={1.35} minAzimuthAngle={-0.1} maxAzimuthAngle={1.3} />
            {!touch && <EffectComposer multisampling={0}><Bloom mipmapBlur luminanceThreshold={0.9} intensity={0.9} /><Vignette darkness={0.65} offset={0.3} /></EffectComposer>}
          </Canvas>)}
        <div className="scene-ui">
          <p className="eyebrow gold">WHAT'S INCLUDED</p>
          <h2>Watch the interior come together.</h2>
          <p className="stage">{stage + 1}/5 · {STAGES[stage]}</p>
          <p className="mute small">Scroll to build the room. Drag to look around. Tap a gold point.</p>
          <div className="toggle" role="group" aria-label="Package finishes">
            {tiers.map((p, i) => <button key={p.id} className={tier === i ? 'on' : ''} onClick={() => setTier(i)}>{p.id}</button>)}
          </div>
          <AnimatePresence mode="wait">
            {sp && <motion.div key={sp.k} className="glass" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: E }}>
              <h3>{sp.k.toUpperCase()}</h3><p>{sp.t}</p></motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
