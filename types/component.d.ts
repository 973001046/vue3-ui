import Vue from 'vue'

/** Zui component common definition */
export declare class ZuiComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type ZuiComponentSize = 'large' | 'small'

/** Horizontal alignment */
export type ZuiHorizontalAlignment = 'left' | 'center' | 'right'
