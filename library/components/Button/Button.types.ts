import * as React from 'react'

export type ButtonColor =
  | 'brand'
  | 'secondary'
  | 'tertiary'
  | 'ai'
  | 'dark'
  | 'ghost'
  | 'danger'
  | 'link-danger'

export type ButtonSize = 'xs' | 'sm' | 'base' | 'l'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Visual color variant — maps 1:1 to Figma Color= property. Defaults to 'brand'. */
  color?: ButtonColor
  /** Size variant — maps 1:1 to Figma Size= property. Defaults to 'base'. */
  size?: ButtonSize
  /** Render as a square icon-only button. Pass the icon as children. */
  iconOnly?: boolean
  /** Icon rendered to the left of the label. */
  leftIcon?: React.ReactNode
  /** Icon rendered to the right of the label. */
  rightIcon?: React.ReactNode
  /** Keyboard shortcut badge displayed on the trailing edge. */
  kbd?: string
  /** Shows a loading spinner and disables interaction. Not in Figma spec — UX addition. */
  loading?: boolean
}
