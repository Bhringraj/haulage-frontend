<template>
<div :class="[darkClass, theme]">
  <h1>Haulage App</h1>
  <!-- <Button name="simple">Text content</Button> -->
  <temp />
  <themeswitch :themes=themes ><template v-slot:before>h</template><template v-slot:after>j</template></themeswitch>
</div>

</template>

<script>
// import Button from './components/buttons/button.vue'
import temp from './components/temp.vue'
import themeswitch from './components/themeswitcher/switch.vue'


export default {
  name: 'App',
  components: {
    // Button,
    temp,
    themeswitch
  },
  mounted() {
    this.getClass()
  },
  data() {
    return {
      darkMode: false,
      darkClass: '',
      theme: '',
      themes: ['theme-neon', 'theme-swiss', 'default']
    }
  },
  methods: {
    getClass() {
      this.darkClass = this.darkMode ? 'dark' : ''
      this.theme = ''
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
