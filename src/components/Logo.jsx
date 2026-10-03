import AshrayaLogo from './AshrayaLogo';

export default function Logo({ variant = 'header', size, className = '' }) {
  return <AshrayaLogo variant={variant} className={className} />;
}
