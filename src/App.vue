<template>
<div :class="[darkClass, theme]">
  <h1>Haulage App</h1>
  <Button name="simple">Text content</Button>
</div>

</template>

<script>
import Button from './components/buttons/button.vue'

export default {
  name: 'App',
  components: {
    Button,
  },
  mounted() {
    this.getClass()
  },
  data() {
    return {
      darkMode: false,
      darkClass: '',
      theme: ''
    }
  },
  methods: {
    getClass() {
      this.darkClass = this.darkMode ? 'dark' : ''
      this.theme = 'theme-neon'
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
