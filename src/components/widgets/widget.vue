<template>
    <!-- <pricing /> -->
  <div class="md:grid md:grid-cols-2 md:gap-10 space-y-5 mb-10 mx-16">
    <minimap />
    <post />
  </div>
</template>

<script>
import minimap from '@/components/widgets/minimap.vue'
import post from '@/components/widgets/post.vue'
// import pricing from './pricing.vue'

export default {
    components: {
        minimap,
        post,
        // pricing,
    }
}
</script>