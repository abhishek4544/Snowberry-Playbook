import * as React from 'react'

export type ToggleSize = 'base' | 'lg'

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  /** Controlled checked state. */
  checked?: boolean
  /** Uncontrolled initial state. */
  defaultChecked?: boolean
  /** Fires with the next checked value when the toggle is clicked. */
  onChange?: (checked: boolean) => void
  /** Size variant — base=36×20px lg=44×24px. Defaults to 'base'. */
  size?: ToggleSize
  /** Optional label rendered to the right of the track. */
  label?: string
}
