'use client'

import * as React from 'react'
import type { ButtonProps, ButtonColor, ButtonSize } from './Button.types'

// ─── Size tokens ── derived from Figma frame measurements ─────────────────────
// text: px / py for label buttons
// square: fixed w×h for icon-only (xs=32px, sm=36px, base=40px, l=44px)
// icon: inner icon size (16px for all sizes — confirmed Figma)
const SIZE: Record<ButtonSize, { text: string; square: string; gap: string; icon: string }> = {
  xs:   { text: 'px-3 py-1.5',      square: 'w-8 h-8',   gap: 'gap-1.5', icon: 'w-4 h-4' },
  sm:   { text: 'px-3.5 py-2',      square: 'w-9 h-9',   gap: 'gap-1.5', icon: 'w-4 h-4' },
  base: { text: 'px-4 py-2.5',      square: 'w-10 h-10', gap: 'gap-1.5', icon: 'w-4 h-4' },
  l:    { text: 'px-[18px] py-3.5', square: 'w-11 h-11', gap: 'gap-1.5', icon: 'w-4 h-4' },
}

// ─── Color tokens ── all values extracted directly from Figma ─────────────────
//
// Brand     bg: brand/500 #0787FF  | inner glow: rgba(255,255,255,0.64)
// Secondary bg: slate/50  #F8FAFC  | border: slate/200 | inner shadow
// Tertiary  bg: white              | border: slate/200 | drop-shadow
// AI        bg: gradient brand/400→brand/300 245° | border: brand/200
// Dark      bg: slate/900 #0F172A  | drop-shadow
// Ghost     bg: transparent        | no border, no shadow
// Danger    bg: transparent        | border: red/700  | box-shadow
// Link Danger bg: transparent      | no border | drop-shadow
//
type ColorConfig = {
  base: string
  hover: string
  focus: string
  disabled: string
  style?: React.CSSProperties
}

const COLOR: Record<ButtonColor, ColorConfig> = {
  brand: {
    base:     'bg-[#0787FF] text-white shadow-[inset_0px_0px_4px_rgba(255,255,255,0.64)]',
    hover:    'hover:bg-[#0061FF]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#AEDFFF] focus-visible:ring-offset-1',
    disabled: 'disabled:bg-[#A3A3A3] disabled:shadow-none',
  },
  secondary: {
    base:     'bg-[#F8FAFC] text-[#1E293B] border border-[#E2E8F0] shadow-[inset_0px_0px_12px_rgba(29,41,61,0.04)]',
    hover:    'hover:bg-[#F1F5F9]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#CBD5E1] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
  tertiary: {
    base:     'bg-white text-[#1E293B] border border-[#E2E8F0] drop-shadow-[0px_1px_0.25px_rgba(29,41,61,0.02)]',
    hover:    'hover:bg-[#F8FAFC]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#E2E8F0] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
  ai: {
    base:     'text-[#F8FAFC] border border-[#AEDFFF] drop-shadow-[0px_1px_0.25px_rgba(29,41,61,0.02)]',
    hover:    'hover:brightness-105',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#76CDFF] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
    // 245.27° gradient from Figma — cannot be expressed in Tailwind utility classes
    style:    { background: 'linear-gradient(245deg, #35B0FF 28%, #76CDFF 93%)' },
  },
  dark: {
    base:     'bg-[#0F172A] text-white drop-shadow-[0px_1px_0.25px_rgba(29,41,61,0.02)]',
    hover:    'hover:bg-[#1E293B]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#334155] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
  ghost: {
    base:     'bg-transparent text-[#1E293B]',
    hover:    'hover:bg-[#F8FAFC]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#E2E8F0] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
  danger: {
    base:     'bg-transparent text-[#B91C1C] border border-[#B91C1C] shadow-[0px_1px_0.5px_rgba(29,41,61,0.02)]',
    hover:    'hover:bg-[#FEF2F2]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#FCA5A5] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
  'link-danger': {
    base:     'bg-transparent text-[#B91C1C] drop-shadow-[0px_1px_0.25px_rgba(29,41,61,0.02)]',
    hover:    'hover:bg-[#FEF2F2]',
    focus:    'focus-visible:ring-2 focus-visible:ring-[#FCA5A5] focus-visible:ring-offset-1',
    disabled: 'disabled:opacity-50',
  },
}

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={['animate-spin shrink-0', className].filter(Boolean).join(' ')}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

// ─── Button ───────────────────────────────────────────────────────────────────
export function Button({
  color = 'brand',
  size = 'base',
  iconOnly = false,
  leftIcon,
  rightIcon,
  kbd,
  loading = false,
  children,
  className,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const s = SIZE[size]
  const c = COLOR[color]

  const classes = [
    // layout
    'relative inline-flex items-center justify-center',
    'rounded-[12px]',
    // typography — confirmed Figma: Inter Medium 14px, lh 1.25, tracking -0.14px
    "font-['Inter'] font-medium text-[14px] leading-[1.25] tracking-[-0.014em]",
    'select-none whitespace-nowrap',
    // transitions
    'transition-colors duration-150',
    // focus reset
    'focus-visible:outline-none',
    // cursor
    'disabled:cursor-not-allowed',
    // size
    s.gap,
    iconOnly ? s.square : s.text,
    // color
    c.base,
    c.hover,
    c.focus,
    c.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classes}
      style={{ ...c.style, ...style }}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {/* Left icon / spinner */}
      {loading ? (
        <Spinner className={s.icon} />
      ) : (
        leftIcon && !iconOnly && (
          <span className={`shrink-0 flex items-center justify-center ${s.icon}`} aria-hidden>
            {leftIcon}
          </span>
        )
      )}

      {/* Label */}
      {!iconOnly && children}

      {/* Icon-only content */}
      {iconOnly && !loading && (
        <span className={`shrink-0 flex items-center justify-center ${s.icon}`} aria-hidden>
          {children}
        </span>
      )}

      {/* Right icon */}
      {!iconOnly && !loading && rightIcon && (
        <span className={`shrink-0 flex items-center justify-center ${s.icon}`} aria-hidden>
          {rightIcon}
        </span>
      )}

      {/* KBD badge — Figma: bg alpha/light/50, rounded-[4px], 12px Inter Regular */}
      {!iconOnly && kbd && (
        <span className="inline-flex items-center gap-1 bg-[rgba(26,26,26,0.06)] px-1 py-0.5 rounded-[4px] text-[12px] font-['Inter'] font-normal text-[#1E293B] leading-none shrink-0">
          {kbd}
        </span>
      )}
    </button>
  )
}
