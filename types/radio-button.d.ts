import { ZuiComponent } from './component'

/** Radio Button Component */
export declare class ZRadioButton extends ZuiComponent {
  /** The form input value */
  value: string

  /** The value of radio */
  label: string | number

  /** Whether radio is disabled */
  disabled: boolean

  /** Native 'name' attribute */
  name: string
}
