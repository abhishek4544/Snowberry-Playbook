'use client'

import * as React from 'react'
import { Avatar } from './Avatar'
import type { AvatarGroupProps, AvatarGroupSize } from './Avatar.types'

// ── Size tokens from Figma ─────────────────────────────────────────────────────
// Avatar size, white border width, negative overlap, counter text size
const GROUP_SIZE: Record<AvatarGroupSize, {
  avatar: 'sm' | 'base' | 'lg'
  border: string
  overlap: string
  counter: string
  counterText: string
}> = {
  sm:   { avatar: 'sm',   border: 'border',    overlap: '-mr-2',    counter: 'w-6 h-6',   counterText: 'text-[8px] leading-[8px]' },
  base: { avatar: 'base', border: 'border-2',  overlap: '-mr-[14px]', counter: 'w-8 h-8',   counterText: 'text-[12px] leading-[14px]' },
  lg:   { avatar: 'lg',   border: 'border-2',  overlap: '-mr-4',    counter: 'w-11 h-11', counterText: 'text-[14px] leading-[14px]' },
}

export function AvatarGroup({
  avatars,
  size = 'base',
  overflowCount,
  max = 4,
  className,
  ...props
}: AvatarGroupProps) {
  const s = GROUP_SIZE[size]
  const visible = avatars.slice(0, max)
  const showCounter = overflowCount !== undefined && overflowCount > 0

  return (
    <div
      className={['flex items-center', className].filter(Boolean).join(' ')}
      {...props}
    >
      {visible.map((av, i) => {
        const isLast = i === visible.length - 1 && !showCounter
        return (
          <Avatar
            key={i}
            src={av.src}
            name={av.name}
            alt={av.alt}
            size={s.avatar}
            className={[
              // white border buffer — from Figma: colors/border/border-buffer = white
              s.border,
              'border-white',
              'rounded-full',
              // overlap all except the last visible item (or if counter follows)
              !isLast ? s.overlap : '',
              'relative z-[1]',
            ].filter(Boolean).join(' ')}
          />
        )
      })}

      {/* Counter bubble — bg: #E5E7EB, text: #4A5565 — from Figma */}
      {showCounter && (
        <div
          className={[
            s.counter,
            s.border,
            'border-white',
            'rounded-full',
            'bg-[#E5E7EB]',
            'flex items-center justify-center shrink-0',
            "font-['Inter'] font-medium text-[#4A5565]",
            s.counterText,
          ].join(' ')}
          aria-label={`${overflowCount} more`}
        >
          +{overflowCount}
        </div>
      )}
    </div>
  )
}
