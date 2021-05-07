<template>
<temp />

</template>

<script>
// import Header from '@/components/headers/header.vue'
// import Button from '@/components/buttons/button.vue'
// import temp from '@/components/temp.vue'
// import themeswitch from '@/components/themeswitcher/switch.vue'
// import alerts from '@/components/alerts/alert.vue'
// import maincard from '@/components/cards/card.vue'
import Temp from '@/views/temp.vue'


export default {
  name: 'App',
  components: {
    // Button,
    // temp,
    // themeswitch,
    // alerts,
    Temp,
    // Header,
    // maincard
  },
  mounted() {
    this.getClass()
  },
  data() {
    return {
      darkMode: false,
      darkClass: '',
      theme: '',
      mode: 'light',
      alertName: '',
      alertType: '',
      button: '',
      show: true
    }
  },
  methods: {
    getClass() {
      this.darkClass = this.darkMode ? 'dark' : ''
      this.theme = 'theme-siss'
      this.alertName = 'top-border'
      this.button = 'simple'
      this.alertType = 'success'
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
