export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wrench shape */}
      <path 
        d="M14 8C10.686 8 8 10.686 8 14C8 16.21 9.21 18.14 11 19.2V34C11 35.657 12.343 37 14 37C15.657 37 17 35.657 17 34V19.2C18.79 18.14 20 16.21 20 14C20 10.686 17.314 8 14 8ZM14 16C12.895 16 12 15.105 12 14C12 12.895 12.895 12 14 12C15.105 12 16 12.895 16 14C16 15.105 15.105 16 14 16Z" 
        fill="#0f4c75"
      />
      {/* Lightning bolt */}
      <path 
        d="M34 8L26 22H32L28 40L40 24H33L34 8Z" 
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
      {/* Tool icon - simplified wrench */}
      <path 
        d="M14 10C11.79 10 10 11.79 10 14C10 15.48 10.78 16.77 11.94 17.5L12 28C12 29.1 12.9 30 14 30C15.1 30 16 29.1 16 28L16.06 17.5C17.22 16.77 18 15.48 18 14C18 11.79 16.21 10 14 10Z" 
        fill="white"
        fillOpacity="0.95"
      />
      {/* Lightning accent */}
      <path 
        d="M28 10L22 18H26L24 30L32 20H27L28 10Z" 
        fill="#e67e22"
      />
    </svg>
  )
}
