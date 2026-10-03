import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data';

export const AshrayaLogo = ({
  variant = 'header',
  showImageLogo = false,
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (showImageLogo && !imgFailed) {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img
          src={BRAND_ASSETS.logoUrl}
          alt="Ashraya Constructions & Interiors"
          onError={() => setImgFailed(true)}
          style={{ height: variant === 'compact' ? 32 : 40, width: 'auto', objectFit: 'contain' }}
        />
        <span
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: '1.25rem',
            letterSpacing: '0.22em',
            color: '#f2ca50',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          ASHRAYA
        </span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}
    >
      {/* Bespoke Vector Architectural 'A' Beam Monogram */}
      <svg
        width={variant === 'footer' ? '42' : '34'}
        height={variant === 'footer' ? '42' : '34'}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ashrayaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE088" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8E6F12" />
          </linearGradient>
          <linearGradient id="ashrayaBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7B1C" />
            <stop offset="50%" stopColor="#F2CA50" />
            <stop offset="100%" stopColor="#8E6F12" />
          </linearGradient>
        </defs>
        {/* Diamond Apex */}
        <polygon points="24,3 27,7.5 24,12 21,7.5" fill="#FFE088" />
        {/* A-Frame Pillars */}
        <path
          d="M24 10L10 43H16.5L24 23.5L31.5 43H38L24 10Z"
          fill="url(#ashrayaGold)"
        />
        {/* Horizontal Structural Beam */}
        <rect x="4" y="27.5" width="40" height="3.2" fill="url(#ashrayaBeam)" />
      </svg>

      {variant === 'footer' ? (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: '1.5rem',
              letterSpacing: '0.24em',
              color: '#f4f1ea',
              textTransform: 'uppercase',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            ASHRAYA
          </span>
          <span
            style={{
              fontFamily: "'Manrope', 'Inter', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.24em',
              color: '#d4af37',
              textTransform: 'uppercase',
              marginTop: '6px',
              fontWeight: 500,
            }}
          >
            Constructions &amp; Interiors
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '12px',
              color: '#99907c',
              marginTop: '2px',
            }}
          >
            &ldquo;Dreams on Beams.&rdquo;
          </span>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: '1.25rem',
              letterSpacing: '0.24em',
              color: '#f4f1ea',
              textTransform: 'uppercase',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              lineHeight: 1.1,
            }}
          >
            ASHRAYA
          </span>
          <span
            style={{
              fontFamily: "'Manrope', 'Inter', sans-serif",
              fontSize: '8px',
              letterSpacing: '0.22em',
              color: '#d4af37',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginTop: '2px',
            }}
          >
            CONSTRUCTIONS &amp; INTERIORS
          </span>
        </div>
      )}
    </div>
  );
};

export default AshrayaLogo;
