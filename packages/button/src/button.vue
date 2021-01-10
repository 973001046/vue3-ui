<template>
  <div class="rv-input">
    <button>{{msg}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'rvButton',
  setup () {
    const msg = ref('Hellow world!!!')
    return { msg }
  }
})
</script>

<style>

</style>
