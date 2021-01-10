import { ZuiComponent } from './component'

interface Pane {
  name: string
  label: string
}

/** Tab Pane Component */
export declare class ZTabMenu extends ZuiComponent {
  /** Title of the tab */
  label: string

  /** Whether Tab is disabled */
  disabled: boolean

  /** Identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane */
  name: string

  /** Array of child tab pane */
  menu: Array<Pane>

  /** Whether Tab is closable */
  closable: boolean

  /** Whether Tab is lazily rendered */
  lazy: boolean
}
