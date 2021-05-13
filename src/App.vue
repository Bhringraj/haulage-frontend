<template>
<temp class="app" />

</template>

<script>
import Temp from '@/views/temp.vue'


export default {
  name: 'App',
  components: {
    Temp,
  },
  mounted() {
    
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>
