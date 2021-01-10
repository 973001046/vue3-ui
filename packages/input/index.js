import Component from './input.vue'

Component.install = function (app) {
  app.component(Component.name, Component)
}

export default Component
