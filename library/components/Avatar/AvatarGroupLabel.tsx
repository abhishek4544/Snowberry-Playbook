'use client'

import * as React from 'react'
import { Avatar } from './Avatar'
import type { AvatarGroupLabelProps, AvatarGroupLabelSize, AvatarGroupLabelType, AvatarSize } from './Avatar.types'

// ── Avatar size per label size+type — from Figma ──────────────────────────────
const AVATAR_SIZE_MAP: Record<AvatarGroupLabelType, Record<AvatarGroupLabelSize, AvatarSize>> = {
  'heading-helper': { sm: 'sm', base: 'base', lg: 'lg', xl: 'xl' },
  'text':           { sm: 'xs', base: 'sm',   lg: 'base', xl: 'lg' },
}

// ── Gap between avatar and label text — from Figma ────────────────────────────
const GAP: Record<AvatarGroupLabelSize, string> = {
  sm:   'gap-1.5',  // 6px
  base: 'gap-2',    // 8px
  lg:   'gap-2.5',  // 10px
  xl:   'gap-2.5',  // 10px
}

// ── Typography — from Figma style tokens ──────────────────────────────────────
// heading text: colors/text/text-heading = #101828
// body text:    colors/text/text-body    = #4A5565
const HEADING_STYLE: Record<AvatarGroupLabelSize, string> = {
  sm:   "font-['Inter'] font-medium text-[12px] leading-[1.5] text-[#101828]",
  base: "font-['Inter'] font-medium text-[16px] leading-[1.3] text-[#101828]",
  lg:   "font-['Inter'] font-medium text-[16px] leading-[1.3] text-[#101828]",
  xl:   "font-['Inter'] font-medium text-[20px] leading-[1.4] text-[#101828]",
}

const HELPER_STYLE: Record<AvatarGroupLabelSize, string> = {
  sm:   "font-['Inter'] font-normal text-[12px] leading-[1.5] text-[#4A5565]",
  base: "font-['Inter'] font-normal text-[14px] leading-[14px] text-[#4A5565]",
  lg:   "font-['Inter'] font-normal text-[14px] leading-[1.5] text-[#4A5565]",
  xl:   "font-['Inter'] font-normal text-[18px] leading-[1.3] text-[#4A5565]",
}

const TEXT_STYLE: Record<AvatarGroupLabelSize, string> = {
  sm:   "font-['Inter'] font-medium text-[12px] leading-[1.5] text-[#101828] whitespace-nowrap",
  base: "font-['Inter'] font-medium text-[16px] leading-[1.3] text-[#101828] whitespace-nowrap",
  lg:   "font-['Inter'] font-medium text-[16px] leading-[1.3] text-[#101828] whitespace-nowrap",
  xl:   "font-['Inter'] font-medium text-[20px] leading-[1.4] text-[#101828] whitespace-nowrap",
}

const LABEL_GAP: Record<AvatarGroupLabelSize, string> = {
  sm:   '',
  base: 'gap-1',
  lg:   'gap-1',
  xl:   'gap-1',
}

export function AvatarGroupLabel({
  src,
  name,
  helper,
  type = 'heading-helper',
  size = 'base',
  className,
  ...props
}: AvatarGroupLabelProps) {
  const avatarSize = AVATAR_SIZE_MAP[type][size]

  return (
    <div
      className={['flex items-center', GAP[size], className].filter(Boolean).join(' ')}
      {...props}
    >
      <Avatar src={src} name={name} size={avatarSize} />

      {type === 'heading-helper' ? (
        <div className={['flex flex-col items-start shrink-0', LABEL_GAP[size]].filter(Boolean).join(' ')}>
          <span className={HEADING_STYLE[size]}>{name}</span>
          {helper && (
            <span className={HELPER_STYLE[size]}>{helper}</span>
          )}
        </div>
      ) : (
        <span className={TEXT_STYLE[size]}>{name}</span>
      )}
    </div>
  )
}
