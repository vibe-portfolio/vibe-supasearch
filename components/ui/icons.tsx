'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="black"></circle>
      {/* Spoon emoji shape */}
      <path
        d="M128 80c-10 0-18 8-18 18v60c0 10 8 18 18 18s18-8 18-18v-60c0-10-8-18-18-18zm0 10c4.4 0 8 3.6 8 8v60c0 4.4-3.6 8-8 8s-8-3.6-8-8v-60c0-4.4 3.6-8 8-8z"
        fill="white"
      />
      <ellipse cx="128" cy="70" rx="20" ry="12" fill="white" />
    </svg>
  )
}

export { IconLogo }
