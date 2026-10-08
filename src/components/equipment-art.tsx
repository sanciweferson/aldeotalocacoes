type Kind = "scaffold" | "props" | "mixer" | "compactor" | "drill";

export function EquipmentArt({ kind, className = "" }: { kind: Kind; className?: string }) {
  if (kind === "scaffold") return <Scaffold className={className} />;
  if (kind === "props") return <Props className={className} />;
  if (kind === "mixer") return <Mixer className={className} />;
  if (kind === "compactor") return <Compactor className={className} />;
  return <Drill className={className} />;
}

function Scaffold({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 250" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 222V35M225 222V35M95 222V35M185 222V35" stroke="var(--svg-blue)" strokeWidth="8" />
        <path d="M51 72h178M51 138h178M51 202h178" stroke="var(--svg-blue)" strokeWidth="7" />
        <path d="M56 76 95 134M95 76 56 134M185 76l40 58M225 76l-40 58M56 142l39 56M95 142l-39 56M185 142l40 56M225 142l-40 56" stroke="var(--svg-blue-soft)" strokeWidth="6" />
        <path d="M61 111h159M61 176h159" stroke="var(--svg-orange)" strokeWidth="18" />
        <path d="M65 102h150M65 167h150" stroke="var(--svg-wood)" strokeWidth="11" />
      </g>
      <ellipse cx="140" cy="230" rx="100" ry="10" fill="var(--svg-shadow)" />
    </svg>
  );
}

function Props({ className = "" }: { className?: string }) {
  const xs = [58, 95, 132, 169, 206];
  return (
    <svg className={className} viewBox="0 0 270 250" aria-hidden="true">
      <rect x="36" y="38" width="198" height="18" rx="5" fill="var(--svg-orange)" />
      <rect x="44" y="56" width="182" height="12" rx="4" fill="var(--svg-wood)" />
      {xs.map((x) => (
        <g key={x}>
          <rect x={x - 5} y="64" width="10" height="156" rx="5" fill="var(--svg-metal)" />
          <rect x={x - 13} y="119" width="26" height="16" rx="5" fill="var(--svg-blue)" />
          <rect x={x - 9} y="137" width="18" height="12" rx="3" fill="var(--svg-metal-dark)" />
          <rect x={x - 12} y="213" width="24" height="7" rx="3" fill="var(--svg-blue)" />
        </g>
      ))}
      <ellipse cx="135" cy="229" rx="104" ry="10" fill="var(--svg-shadow)" />
    </svg>
  );
}

function Mixer({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 250" aria-hidden="true">
      <ellipse cx="142" cy="226" rx="104" ry="11" fill="var(--svg-shadow)" />
      <circle cx="88" cy="205" r="19" fill="var(--svg-blue)" /><circle cx="197" cy="205" r="19" fill="var(--svg-blue)" />
      <path d="M72 191h132l-16-99H98L72 191Z" fill="var(--svg-blue-soft)" />
      <path d="M89 65c48-18 103-1 114 39 10 36-21 79-68 90-45 10-88-12-96-49-7-34 14-66 50-80Z" fill="var(--svg-orange)" />
      <path d="M111 70c38-9 76 3 89 31l-143 45c-3-32 19-65 54-76Z" fill="var(--svg-orange-light)" />
      <circle cx="191" cy="108" r="29" fill="var(--svg-blue)" /><circle cx="191" cy="108" r="18" fill="var(--surface)" />
      <path d="M72 190 52 218M204 190l21 28" stroke="var(--svg-blue)" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

function Compactor({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 250" aria-hidden="true">
      <ellipse cx="132" cy="226" rx="83" ry="10" fill="var(--svg-shadow)" />
      <path d="M70 75h100c20 0 36 16 36 36v30H89c-18 0-32-14-32-32V88c0-7 6-13 13-13Z" fill="var(--svg-blue)" />
      <rect x="76" y="88" width="78" height="37" rx="9" fill="var(--svg-orange)" />
      <path d="M184 84c12-35 28-52 43-62" stroke="var(--svg-blue)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M177 139h30l-12 47h-35l17-47Z" fill="var(--svg-metal-dark)" />
      <path d="M165 184h33l18 25H140l25-25Z" fill="var(--svg-orange)" />
      <rect x="132" y="207" width="92" height="14" rx="7" fill="var(--svg-blue)" />
      <path d="M171 143h22" stroke="var(--svg-orange-light)" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

function Drill({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 250" aria-hidden="true">
      <ellipse cx="142" cy="225" rx="95" ry="10" fill="var(--svg-shadow)" />
      <path d="M54 84h139c22 0 40 18 40 40v22H83c-27 0-49-22-49-49V104c0-11 9-20 20-20Z" fill="var(--svg-blue)" />
      <rect x="92" y="96" width="71" height="34" rx="8" fill="var(--svg-orange)" />
      <path d="M153 146h47l-12 72h-53l18-72Z" fill="var(--svg-blue-soft)" />
      <path d="M52 115H14" stroke="var(--svg-metal-dark)" strokeWidth="11" strokeLinecap="round" />
      <path d="M14 115H3" stroke="var(--svg-metal)" strokeWidth="5" strokeLinecap="round" />
      <rect x="213" y="103" width="30" height="51" rx="11" fill="var(--svg-blue-soft)" />
      <path d="M185 218h22" stroke="var(--svg-orange)" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}

export function HeroEquipmentArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg className="hero-city" viewBox="0 0 600 430">
        <path d="M450 360V145h76v215M380 360V210h58v150M535 360V95h48v265M335 360V265h36v95" fill="var(--hero-building)" />
        <path d="M382 110h130M455 110V48M455 48l98 36M510 84l-16 14" fill="none" stroke="var(--hero-line)" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="hero-scaffold"><EquipmentArt kind="scaffold" /></div>
      <div className="hero-props"><EquipmentArt kind="props" /></div>
      <span className="hero-tag hero-tag-one">Andaimes<br />para sua obra</span>
      <span className="hero-tag hero-tag-two">Escoras metálicas<br />para sua estrutura</span>
    </div>
  );
}
