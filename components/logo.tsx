export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House outline */}
      <path 
        d="M24 6L4 22H10V42H38V22H44L24 6Z" 
        fill="#0f4c75"
      />
      {/* Door */}
      <rect x="20" y="28" width="8" height="14" fill="#e67e22" rx="1" />
      {/* Window left */}
      <rect x="13" y="24" width="6" height="6" fill="white" rx="1" />
      {/* Window right */}
      <rect x="29" y="24" width="6" height="6" fill="white" rx="1" />
      {/* Wrench on roof */}
      <path 
        d="M24 12L20 16L22 18L24 16L26 18L28 16L24 12Z" 
        fill="#e67e22"
      />
    </svg>
  )
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect width="40" height="40" rx="10" fill="#0f4c75" />
      {/* House shape */}
      <path 
        d="M20 8L6 19H10V32H30V19H34L20 8Z" 
        fill="white"
      />
      {/* Door */}
      <rect x="17" y="23" width="6" height="9" fill="#e67e22" rx="1" />
      {/* Window */}
      <rect x="12" y="20" width="4" height="4" fill="#0f4c75" rx="0.5" />
      <rect x="24" y="20" width="4" height="4" fill="#0f4c75" rx="0.5" />
    </svg>
  )
}
