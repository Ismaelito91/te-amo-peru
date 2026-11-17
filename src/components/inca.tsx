import { cn } from "@/lib/utils";

// Chakana (croix andine) utilisée comme logo.
export function Chakana({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 9" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M3 0h3v1h1v1h1v1h1v3H8v1H7v1H6v1H3V8H2V7H1V6H0V3h1V2h1V1h1zM4.5 3.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 1 0 0-2.4z"
      />
    </svg>
  );
}

// Bande de tocapus : une suite de carrés à motifs géométriques, comme sur les uncus incas.
export function TocapuBand({ className, id = "tocapu" }: { className?: string; id?: string }) {
  return (
    <svg className={cn("block h-6 w-full", className)} aria-hidden="true">
      <defs>
        <pattern id={id} width="144" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="var(--cochenille)" />
          <path d="M10 5h4v3h3v3h3v2h-3v3h-3v3h-4v-3H7v-3H4v-2h3V8h3z" fill="var(--mais)" />

          <rect x="24" width="24" height="24" fill="var(--nuit)" />
          <path d="M28 4h8v8h-8zM36 12h8v8h-8z" fill="var(--mais)" />
          <path d="M36 4h8v8h-8zM28 12h8v8h-8z" fill="var(--pierre)" />

          <rect x="48" width="24" height="24" fill="var(--mais)" />
          <path d="M48 16l6-8 6 8 6-8 6 8" stroke="var(--nuit)" strokeWidth="3" fill="none" />

          <rect x="72" width="24" height="24" fill="var(--chicha)" />
          <rect x="76" y="4" width="16" height="16" fill="none" stroke="var(--pierre)" strokeWidth="2" />
          <rect x="81" y="9" width="6" height="6" fill="var(--pierre)" />

          <rect x="96" width="24" height="24" fill="var(--pierre)" />
          <path d="M108 3l9 9-9 9-9-9z" fill="var(--cochenille)" />
          <path d="M108 9l3 3-3 3-3-3z" fill="var(--pierre)" />

          <rect x="120" width="24" height="24" fill="var(--nuit)" />
          <path d="M120 5h24v3h-24zM120 11h24v2h-24zM120 16h24v3h-24z" fill="var(--cochenille)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// Petit mot en quechua, posé au-dessus des titres.
export function Quechua({ word, meaning, className }: { word: string; meaning: string; className?: string }) {
  return (
    <p className={cn("text-sm tracking-[0.2em] uppercase", className)}>
      <span lang="qu" className="font-semibold">{word}</span>
      <span className="opacity-70"> · {meaning}</span>
    </p>
  );
}
