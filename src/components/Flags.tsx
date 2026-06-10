export function FlagFr({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 3 2" aria-hidden>
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  );
}

export function FlagGb({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden>
      <path fill="#012169" d="M0 0v30h60V0z" />
      <path fill="none" stroke="#FFF" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
      <path fill="none" stroke="#C8102E" strokeWidth="4" d="M0 0l60 30M60 0L0 30" />
      <path fill="none" stroke="#FFF" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path fill="none" stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  );
}
