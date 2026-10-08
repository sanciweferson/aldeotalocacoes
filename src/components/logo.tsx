export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="Aldeota Locações">
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path d="M32 4 58 51H45L32 28 19 51H6L32 4Z" fill="currentColor" className="brand-orange" />
        <path d="m32 22 18 32H39L32 42l-7 12H14l18-32Z" fill="currentColor" className="brand-blue" />
      </svg>
      {!compact && (
        <span className="brand-type">
          <strong>ALDEOTA</strong>
          <small>LOCAÇÕES</small>
        </span>
      )}
    </div>
  );
}
