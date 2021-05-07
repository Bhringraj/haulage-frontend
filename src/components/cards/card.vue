<template>
    <cardheader />
    <cards />
    <cardfooter />
</template>

<script>
import cardheader from './card-header.vue'
import cardfooter from './card-footer.vue'
import cards from './cards.vue'

export default {
    components: {
        cardheader,
        cardfooter,
        cards
    }
    
}
</script>

<style scoped>

</style>