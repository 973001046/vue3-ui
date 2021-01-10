import { ZuiComponent } from './component'

/** Use Collapse to store contents. */
export declare class ZCollapse extends ZuiComponent {
  /** Whether to activate accordion mode */
  accordion: boolean

  /** Currently active panel */
  value: string | number | string[] | number[]
}
