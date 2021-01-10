import { ZuiComponent } from './component'

export type FuzzyInputType = 'default' | 'pagination' | 'pull'

export interface callbackParams {
  page: number
  pageSize: number
  queryString: string
  type: string
}

export interface FetchFuzzy {
  (params: callbackParams): Promise<object[]>
}

/** FuzzyInput Component */
export declare class ZFuzzyInput extends ZuiComponent {

  size?: string

  fetchFuzzy: FetchFuzzy
  
  allowChange?: boolean

  type?: FuzzyInputType

  serviceType?: any

  mainProps: string

  defaultName?: string

  parent?: any

  clean?: string | number

  clearable?: boolean

  readonly?: boolean

  disabled?: boolean

  placeholder?: string

  debounce?: number

  pagerCount?: number

  page?: number

  pageSize?: number

  total?: number

}
