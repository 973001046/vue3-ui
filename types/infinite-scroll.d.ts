import { VNodeDirective } from 'vue'

export interface ZInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}