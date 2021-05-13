<template>
    <minimap />
    <post />
    <pricing />
</template>

<script>
import minimap from '@/components/widgets/minimap.vue'
import post from '@/components/widgets/post.vue'
import pricing from './pricing.vue'

export default {
    components: {
        minimap,
        post,
        pricing,
    }
}
</script>