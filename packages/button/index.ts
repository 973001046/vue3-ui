import ZButton from './src/button.vue'

/* istanbul ignore next */
ZButton.install = function (Vue) {
  Vue.component(ZButton.name, ZButton)
}

export default ZButton
