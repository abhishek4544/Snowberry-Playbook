'use client'

import * as React from 'react'
import type { AvatarProps, AvatarSize } from './Avatar.types'

// ── Size tokens from Figma (spacing tokens) ───────────────────────────────────
// xs=18px(4.5) sm=24px(6) base=32px(8) lg=44px(11) xl=56px(14)
export const AVATAR_SIZE: Record<AvatarSize, string> = {
  xs:   'w-[18px] h-[18px] text-[8px]',
  sm:   'w-6 h-6 text-[10px]',
  base: 'w-8 h-8 text-[12px]',
  lg:   'w-11 h-11 text-[16px]',
  xl:   'w-14 h-14 text-[20px]',
}

// Deterministic bg color from name — cycles through brand-adjacent neutrals
const PLACEHOLDER_COLORS = [
  'bg-[#AEDFFF] text-[#003399]', // brand/200 + brand/900
  'bg-[#BBF7D0] text-[#14532D]', // green/200 + green/900
  'bg-[#FEF08A] text-[#713F12]', // yellow/200 + yellow/900
  'bg-[#FECACA] text-[#7F1D1D]', // red/200 + red/900
  'bg-[#CBD5E1] text-[#0F172A]', // slate/300 + slate/900
  'bg-[#D1ECFF] text-[#003399]', // brand/100 + brand/900
]

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function getColorIndex(name: string): number {
  return name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % PLACEHOLDER_COLORS.length
}

export function Avatar({
  src,
  name,
  alt,
  size = 'base',
  className,
  ...props
}: AvatarProps) {
  const sizeClass = AVATAR_SIZE[size]
  const base = `relative rounded-full shrink-0 overflow-hidden ${sizeClass}`

  if (src) {
    return (
      <div className={[base, className].filter(Boolean).join(' ')} {...props}>
        <img
          src={src}
          alt={alt ?? name ?? 'Avatar'}
          className="absolute inset-0 w-full h-full object-cover rounded-full pointer-events-none"
        />
      </div>
    )
  }

  if (name) {
    const color = PLACEHOLDER_COLORS[getColorIndex(name)]
    return (
      <div
        className={[base, color, 'flex items-center justify-center font-["Inter"] font-medium select-none', className].filter(Boolean).join(' ')}
        aria-label={name}
        {...props}
      >
        {getInitials(name)}
      </div>
    )
  }

  // Generic placeholder — slate/200 bg with a person silhouette
  return (
    <div
      className={[base, 'bg-[#E2E8F0] flex items-center justify-center', className].filter(Boolean).join(' ')}
      aria-hidden
      {...props}
    >
      <svg className="w-[55%] h-[55%] text-[#94A3B8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
  )
}
