'use client'

import * as React from 'react'
import type { ToggleProps, ToggleSize } from './Toggle.types'

// ── Size tokens from Figma ─────────────────────────────────────────────────────
// base: 36×20px track, 16px thumb  |  lg: 44×24px track, 20px thumb
const TRACK: Record<ToggleSize, string> = {
  base: 'w-9 h-5',
  lg:   'w-11 h-6',
}

const THUMB: Record<ToggleSize, string> = {
  base: 'w-4 h-4',
  lg:   'w-5 h-5',
}

// Horizontal translate to reach the checked position
// base: 36 - 16 - 2(left) - 2(right) = 16 → translate 16px
// lg:   44 - 20 - 2(left) - 2(right) = 20 → translate 20px
const THUMB_ON: Record<ToggleSize, string> = {
  base: 'translate-x-[18px]',
  lg:   'translate-x-[22px]',
}

export function Toggle({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  size = 'base',
  disabled = false,
  label,
  className,
  ...props
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const isChecked = isControlled ? controlledChecked : internalChecked

  function handleClick() {
    if (disabled) return
    const next = !isChecked
    if (!isControlled) setInternalChecked(next)
    onChange?.(next)
  }

  // Track bg — checked: #1447e6 (brand/700), unchecked: #f3f4f6 (neutral/100)
  const trackBg = isChecked ? 'bg-[#1447e6]' : 'bg-[#f3f4f6]'
  // Thumb bg — disabled: #f9fafb (neutral/50), else white
  const thumbBg = disabled ? 'bg-[#f9fafb]' : 'bg-white'

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      className={[
        'group inline-flex items-center gap-2 focus:outline-none select-none',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {/* Track */}
      <span
        className={[
          TRACK[size],
          trackBg,
          'relative rounded-full transition-colors duration-200',
          // Focus ring from Figma: 0px 0px 0px 2px #bedbff
          'group-focus-visible:shadow-[0px_0px_0px_2px_#bedbff]',
        ].join(' ')}
      >
        {/* Thumb */}
        <span
          className={[
            THUMB[size],
            thumbBg,
            'absolute top-[2px] left-[2px] rounded-full shadow-sm',
            'transition-transform duration-200',
            isChecked ? THUMB_ON[size] : 'translate-x-0',
          ].join(' ')}
        />
      </span>

      {label && (
        <span className="font-['Inter'] text-sm leading-[1.5] text-[#101828]">
          {label}
        </span>
      )}
    </button>
  )
}
