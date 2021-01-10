import { ZuiComponent, ZuiComponentSize } from './component'

/** Checkbox Group Component */
export declare class ZCheckboxGroup extends ZuiComponent {
  /** Size of checkbox buttons or bordered checkboxes */
  size: ZuiComponentSize

  /** Whether the nesting checkboxes are disabled */
  disabled: boolean

  /** Minimum number of checkbox checked */
  min: number

  /** Maximum number of checkbox checked */
  max: number

  /** Font color when button is active */
  textColor: string

  /** Border and background color when button is active */
  fill: string
}
