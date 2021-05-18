<template>
<div :class="[darkClass, theme]">
  <Header />
  <h1 class="pt-6 pb-8 text-3xl">Themes</h1>
    <div class="md:grid md:grid-cols-2 md:gap-10 mx-16">
      <themeswitch class="mb-3" name="dark" :mode=mode @toggle="toggle" ><template v-slot:before>Light </template><template v-slot:after> Dark</template></themeswitch>
      <themeswitch class="my-3" @default="defaultTheme" @swiss="swissTheme" @neon="neonTheme" />
    </div>
  <h1 class="mt-16 mb-8 text-3xl">Alerts</h1>

  <div class="md:grid md:grid-cols-3 md:gap-10 mx-16">
    <alerts class="info mb-3" name="modern-badge">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="warning my-3" name="top-border">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="success my-3" name="left-border">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="danger my-3" name="titled">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="warning my-3" name="solid">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="info my-3" name="banner">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
    <alerts class="success my-3" name="">
      <template v-slot:icon><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg></template>
      <template v-slot:title>Holy smokes! </template>
      <template v-slot:text>Something seriously bad happened. </template>
    </alerts>
  </div>

  <h1 class="mt-16 mb-8 text-3xl">Buttons</h1>

  <div class="flex flex-col md:grid md:gap-3 md:grid-cols-3 lg:grid-cols-5">
    <Button name="simple" class="my-2">simple filled</Button>
    <Button name="pill" class="my-2">filled pill</Button>
    <Button class="my-3" name="group"><template v-slot:btn1>filled </template><template v-slot:btn2> group</template></Button>
    <Button name="simple-inverted" class="mb-2">simple inverted</Button>
    <Button name="pill-inverted" class="my-2">pill inverted</Button>
    <Button class="my-3" name="group-inverted"><template v-slot:btn1>group </template><template v-slot:btn2> inverted</template></Button>
    <Button name="pill-outline" class="my-2">pill outline</Button>
    <Button name="outline" class="my-2">simple outline</Button>
    <Button class="my-3" name="group-outline"><template v-slot:btn1>group </template><template v-slot:btn2> outline</template></Button>
    <Button class="my-3" name="group-outline-pill"><template v-slot:btn1>Light </template><template v-slot:btn2> Dark</template></Button>
  </div>

  <h1 class="mt-16 mb-8 mx-16 text-3xl">Cards</h1>
  <!-- <h1>Haulage App</h1> -->
  <!-- <maincard /> -->
  <temp />
  <!-- <temp class="theme-neon" /> -->
  <h1 class="mt-16 mb-8 mx-16 text-3xl">Widgets</h1>
  <Foot />
</div>

</template>

<script>
import Foot from '@/components/footers/footer.vue'
import Header from '@/components/headers/header.vue'
import Button from '@/components/buttons/button.vue'
import temp from '@/components/temp.vue'
import themeswitch from '@/components/themeswitcher/switch.vue'
import alerts from '@/components/alerts/alert.vue'
// import maincard from '@/components/cards/card.vue'


export default {
  name: 'App',
  components: {
    Foot,
    Button,
    temp,
    themeswitch,
    alerts,
    Header,
    // maincard
  },
  created() {
    window.addEventListener('keyup', this.keyPress)
  },
  data() {
    return {
      darkClass: '',
      theme: '',
      mode: 'light',
      show: true
    }
  },
  methods: {
    keyPress(e) {
      if (e.key === 'd') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
        this.darkClass = ''
      } else {
        this.mode = "dark"
        this.darkClass = 'dark'
      }
    },
    defaultTheme() {
      this.theme = ''
    },
    swissTheme() {
      this.theme = 'theme-swiss'
    },
    neonTheme() {
      this.theme = 'theme-neon'
    }
  },
}
</script>

<style>

</style>
