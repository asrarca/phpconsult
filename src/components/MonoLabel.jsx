export default function MonoLabel({ children, className = '', style }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.12em] uppercase ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
