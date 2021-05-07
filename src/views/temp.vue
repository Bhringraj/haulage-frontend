<template>
<div :class="[darkClass, theme]">
  <!-- <Header /> -->
  <alerts v-show="show" :class="alertType" :name="alertName">
    <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
    <template v-slot:title>Holy smokes! </template>
    <template v-slot:text>Something seriously bad happened. </template>
  </alerts>
  <h1>Haulage App</h1>
  <!-- <maincard /> -->
  <Button :name="button" class="mb-2">Text content</Button>
  <!-- <Button name="pill" class="my-2">Text content</Button> -->
  <!-- <Button name="outline">Text content</Button> -->
  <!-- <Button class="mt-3" name="groups"><template v-slot:btn1>Light </template><template v-slot:btn2> Dark</template></Button> -->
  <temp />
  <!-- <temp class="theme-neon" /> -->
  <!-- <themeswitch :themes=themes ><template v-slot:before>Light </template><template v-slot:after> Dark</template></themeswitch> -->
  <!-- <themeswitch :mode="mode" @toggle="toggle" /> -->
</div>

</template>

<script>
// import Header from '@/components/headers/header.vue'
import Button from '@/components/buttons/button.vue'
import temp from '@/components/temp.vue'
// import themeswitch from '@/components/themeswitcher/switch.vue'
import alerts from '@/components/alerts/alert.vue'
// import maincard from '@/components/cards/card.vue'


export default {
  name: 'App',
  components: {
    Button,
    temp,
    // themeswitch,
    alerts,
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
      this.theme = 'theme-swiss'
      this.alertName = 'top-border'
      this.button = 'simple'
      this.alertType = 'warning'
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

</style>
