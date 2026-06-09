import * as React from 'react'

export type CheckboxSize = 'sm' | 'md' | 'lg'
export type RadioSize = 'sm' | 'md'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'type'> {
  /** Controlled checked state. */
  checked?: boolean
  /** Uncontrolled initial state. */
  defaultChecked?: boolean
  /** Shows a minus/dash icon instead of a checkmark (partial selection). */
  indeterminate?: boolean
  /** Fires with the next checked value. */
  onChange?: (checked: boolean) => void
  /** Size variant — sm=18px md=20px lg=24px. Defaults to 'md'. */
  size?: CheckboxSize
  /** Optional label rendered to the right. */
  label?: string
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'type'> {
  /** Controlled checked state. */
  checked?: boolean
  /** Uncontrolled initial state. */
  defaultChecked?: boolean
  /** Fires with the next checked value. */
  onChange?: (checked: boolean) => void
  /** Size variant — sm=16px md=20px. Defaults to 'md'. */
  size?: RadioSize
  /** Optional label rendered to the right. */
  label?: string
}
