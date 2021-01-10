import Vue, { PluginObject } from 'vue'
import { ZuiComponent, ZuiComponentSize, ZuiHorizontalAlignment } from './component'

import { ZAlert } from './alert'
import { ZAside } from './aside'
import { ZAutocomplete } from './autocomplete'
import { ZBadge } from './badge'
import { ZBreadcrumb } from './breadcrumb'
import { ZBreadcrumbItem } from './breadcrumb-item'
import { ZButton } from './button'
import { ZButtonGroup } from './button-group'
import { ZCard } from './card'
import { ZCarousel } from './carousel'
import { ZCarouselItem } from './carousel-item'
import { ZCascader } from './cascader'
import { ZCheckbox } from './checkbox'
import { ZCheckboxButton } from './checkbox-button'
import { ZCheckboxGroup } from './checkbox-group'
import { ZCol } from './col'
import { ZCollapse } from './collapse'
import { ZCollapseItem } from './collapse-item'
import { ZColorPicker } from './color-picker'
import { ZContainer } from './container'
import { ZDatePicker } from './date-picker'
import { ZDialog } from './dialog'
import { ZDropdown } from './dropdown'
import { ZDropdownItem } from './dropdown-item'
import { ZDropdownMenu } from './dropdown-menu'
import { ZFooter } from './footer'
import { ZForm } from './form'
import { ZFormItem } from './form-item'
import { ZHeader } from './header'
import { ZInput } from './input'
import { ZInputNumber } from './input-number'
import { ZLoading } from './loading'
import { ZMain } from './main'
import { ZMenu } from './menu'
import { ZMenuItem } from './menu-item'
import { ZMenuItemGroup } from './menu-item-group'
import { ZMessage } from './message'
import { ZMessageBox } from './message-box'
import { ZNotification } from './notification'
import { ZOption } from './option'
import { ZOptionGroup } from './option-group'
import { ZPagination } from './pagination'
import { ZPopover } from './popover'
import { ZProgress } from './progress'
import { ZRate } from './rate'
import { ZRadio } from './radio'
import { ZRadioButton } from './radio-button'
import { ZRadioGroup } from './radio-group'
import { ZRow } from './row'
import { ZSelect } from './select'
import { ZSlider } from './slider'
import { ZStep } from './step'
import { ZSteps } from './steps'
import { ZSubmenu } from './submenu'
import { ZSwitch } from './switch'
import { ZTable } from './table'
import { ZTableColumn } from './table-column'
import { ZTag } from './tag'
import { ZTabs } from './tabs'
import { ZTabPane } from './tab-pane'
import { ZTabMenu } from './tab-menu'
import { ZTimeline } from './timeline'
import { ZTimelineItem } from './timeline-item'
import { ZTimePicker } from './time-picker'
import { ZTimeSelect } from './time-select'
import { ZTooltip } from './tooltip'
import { ZTransfer } from './transfer'
import { ZTree, TreeData } from './tree'
import { ZUpload } from './upload'
import { ZLink } from './link'
import { ZDivider } from './divider'
import { ZIcon } from './icon'
import { ZCalendar } from './calendar'
import { ZImage } from './image'
import { ZBacktop } from './backtop'
import { ZInfiniteScroll } from './infinite-scroll'
import { ZPageHeader } from './page-header'
import { ZAvatar } from './avatar'
import { ZDrawer } from './drawer'
import { ZPopconfirm } from './popconfirm'
import { ZDatePickerSplit } from './date-picker-split'
import { ZFuzzyInput } from './fuzzy-input'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of zui */
export const version: string

/**
 * Install all zui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(Zui)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** Zui component common definition */
export type Component = ZuiComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ZuiComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ZuiHorizontalAlignment

/** Show animation while loading data */
export const Loading: ZLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: ZMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: ZMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: ZNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends ZAlert {}

/** Aside Component */
export class Aside extends ZAside {}

/** Autocomplete Component */
export class Autocomplete extends ZAutocomplete {}

/** Bagde Component */
export class Badge extends ZBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends ZBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends ZBreadcrumbItem {}

/** Button Component */
export class Button extends ZButton {}

/** Button Group Component */
export class ButtonGroup extends ZButtonGroup {}

/** Card Component */
export class Card extends ZCard {}

/** Cascader Component */
export class Cascader extends ZCascader {}

/** Carousel Component */
export class Carousel extends ZCarousel {}

/** Carousel Item Component */
export class CarouselItem extends ZCarouselItem {}

/** Checkbox Component */
export class Checkbox extends ZCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends ZCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends ZCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends ZCol {}

/** Collapse Component */
export class Collapse extends ZCollapse {}

/** Collapse Item Component */
export class CollapseItem extends ZCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends ZColorPicker {}

/** Container Component */
export class Container extends ZContainer {}

/** Date Picker Component */
export class DatePicker extends ZDatePicker {}

/** Dialog Component */
export class Dialog extends ZDialog {}

/** Dropdown Component */
export class Dropdown extends ZDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends ZDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends ZDropdownMenu {}

/** Footer Component */
export class Footer extends ZFooter {}

/** Form Component */
export class Form extends ZForm {}

/** Form Item Component */
export class FormItem extends ZFormItem {}

/** Header Component */
export class Header extends ZHeader {}

/** Input Component */
export class Input extends ZInput {}

/** Input Number Component */
export class InputNumber extends ZInputNumber {}

/** Main Component */
export class Main extends ZMain {}

/** Menu that provides navigation for your website */
export class Menu extends ZMenu {}

/** Menu Item Component */
export class MenuItem extends ZMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends ZMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends ZOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends ZOptionGroup {}

/** Pagination Component */
export class Pagination extends ZPagination {}

/** Popover Component */
export class Popover extends ZPopover {}

/** Progress Component */
export class Progress extends ZProgress {}

/** Rate Component */
export class Rate extends ZRate {}

/** Radio Component */
export class Radio extends ZRadio {}

/** Radio Button Component */
export class RadioButton extends ZRadioButton {}

/** Radio Group Component */
export class RadioGroup extends ZRadioGroup {}

/** Row Layout Component */
export class Row extends ZRow {}

/** Dropdown Select Component */
export class Select extends ZSelect {}

/** Slider Component */
export class Slider extends ZSlider {}

/** Step Component */
export class Step extends ZStep {}

/** Steps Component */
export class Steps extends ZSteps {}

/** Submenu Component */
export class Submenu extends ZSubmenu {}

/** Switch Component */
export class Switch extends ZSwitch {}

/** Table Component */
export class Table extends ZTable {}

/** Table Column Component */
export class TableColumn extends ZTableColumn {}

/** Tabs Component */
export class Tabs extends ZTabs {}

/** Tab Pane Component */
export class TabPane extends ZTabPane {}

/** Tab Menu Component */
export class TabMenu extends ZTabMenu {}

/** Tag Component */
export class Tag extends ZTag {}

/** Timeline Component */
export class Timeline extends ZTimeline {}

/** Timeline Item Component */
export class TimelineItem extends ZTimelineItem {}

/** TimePicker Component */
export class TimePicker extends ZTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends ZTimeSelect {}

/** Tooltip Component */
export class Tooltip extends ZTooltip {}

/** Transfer Component */
export class Transfer extends ZTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends ZTree<K, D> {}

/** Upload Component */
export class Upload extends ZUpload {}

/** Divider Component */
export class Divider extends ZDivider {}

/** Link Component */
export class Link extends ZLink {}

/** Image Component */
export class Image extends ZImage {}

/** Icon Component */
export class Icon extends ZIcon {}

/** Calendar Component */
export class Calendar extends ZCalendar {}

/** Backtop Component */
export class Backtop extends ZBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<ZInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends ZPageHeader {}

/** Avatar Component */
export class Avatar extends ZAvatar {}

/** Drawer Component */
export class Drawer extends ZDrawer {}

/** Popconfirm Component */
export class Popconfirm extends ZPopconfirm {}

/** DatePickerSplit Component */
export class DatePickerSplit extends ZDatePickerSplit {}

/** FuzzyInput Component */
export class FuzzyInput extends ZFuzzyInput {}
