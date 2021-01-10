import { ZuiComponent, ZuiComponentSize, ZuiHorizontalAlignment } from './component'

export interface TimeSelectOptions {
  /** Start time */
  start?: string,

  /** End time */
  end?: string,

  /** Time step */
  step?: string,

  /** Minimum time, any time before this time will be disabled */
  minTime?: string,

  /** Maximum time, any time after this time will be disabled */
  maxTime?: string
}

/** TimeSelect Component */
export declare class ZTimeSelect extends ZuiComponent {
  /** Whether DatePicker is read only */
  readonly: boolean

  /** Whether DatePicker is disabled */
  disabled: boolean

  /** Whether the input is editable */
  editable: boolean

  /** Whether to show clear button */
  clearable: boolean

  /** Size of Input */
  size: ZuiComponentSize

  /** Placeholder */
  placeholder: string

  /** Value of the picker */
  value: string | Date

  /** Alignment */
  align: ZuiHorizontalAlignment

  /** Custom class name for TimePicker's dropdown */
  popperClass: string

  /** Additional options, check the table below */
  pickerOptions: TimeSelectOptions

  /**
   * Focus the Input component
   */
  focus (): void

  /** 日期输入自动填充 */
  autoFill: boolean
}
