<template>
  <div class="images" v-viewer>
    <img :src="src">
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)
export default {
  name: "ImgViewer",
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
