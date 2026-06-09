'use client'

import * as React from 'react'
import type { RadioProps, RadioSize } from './Checkbox.types'

// ── Size tokens from Figma ─────────────────────────────────────────────────────
// sm=16px  md=20px  — always rounded-full
const SIZE: Record<RadioSize, { outer: string; dot: string }> = {
  sm: { outer: 'w-4 h-4',  dot: 'w-[6px] h-[6px]' },
  md: { outer: 'w-5 h-5',  dot: 'w-[8px] h-[8px]' },
}

export function Radio({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  size = 'md',
  disabled = false,
  label,
  className,
  ...props
}: RadioProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const isChecked = isControlled ? controlledChecked : internalChecked

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return
    const next = e.target.checked
    if (!isControlled) setInternalChecked(next)
    onChange?.(next)
  }

  const s = SIZE[size]

  // ── Visual state ──────────────────────────────────────────────────────────────
  // Unchecked: white bg, #d5d7da border
  // Checked:   #fafaff bg (light purple), #0787ff border, blue dot
  // Disabled:  #f5f5f5 bg, #e9eaeb border, muted dot
  let outerClasses: string
  let dotColor: string | null = null

  if (disabled) {
    outerClasses = 'bg-[#f5f5f5] border-[1.5px] border-[#e9eaeb]'
    if (isChecked) dotColor = 'bg-[#d1d5db]'
  } else if (isChecked) {
    outerClasses = 'bg-[#fafaff] border-[1.5px] border-[#0787ff]'
    dotColor = 'bg-[#0787ff]'
  } else {
    outerClasses = 'bg-white border border-[#d5d7da]'
  }

  return (
    <label
      className={[
        'inline-flex items-center gap-2 select-none',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="relative inline-flex items-center justify-center shrink-0">
        <input
          type="radio"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="peer absolute inset-0 opacity-0 w-full h-full cursor-[inherit]"
          {...props}
        />
        <span
          aria-hidden
          className={[
            s.outer,
            'rounded-full',
            'flex items-center justify-center shrink-0',
            'transition-colors duration-150',
            outerClasses,
            // Focus ring — 4px brand glow from Figma
            'peer-focus-visible:shadow-[0px_0px_0px_4px_rgba(209,236,255,0.48)]',
          ].join(' ')}
        >
          {dotColor && (
            <span className={[s.dot, 'rounded-full', dotColor].join(' ')} />
          )}
        </span>
      </span>

      {label && (
        <span className={["font-['Inter'] text-sm leading-[1.5] text-[#101828]", disabled && 'text-[#9da4ae]'].filter(Boolean).join(' ')}>
          {label}
        </span>
      )}
    </label>
  )
}
