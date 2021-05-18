<template>
    <div v-if="name == 'bookmark'">        
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://res.cloudinary.com/griffintech/image/upload/v1591143903/samples/sheep.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-skin-inverted dark:text-skin-muted text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 dark:text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-skin-button-muted dark:bg-skin-button-accent rounded-full px-3 py-1 text-sm font-semibold text-skin-base dark:text-skin-inverted mr-2 mb-2">#photography</span>
            <span class="inline-block bg-skin-button-muted dark:bg-skin-button-accent rounded-full px-3 py-1 text-sm font-semibold text-skin-base dark:text-skin-inverted mr-2 mb-2">#travel</span>
            <span class="inline-block bg-skin-button-muted dark:bg-skin-button-accent rounded-full px-3 py-1 text-sm font-semibold text-skin-base dark:text-skin-inverted mr-2 mb-2">#winter</span>
        </div>
        </div>
    </div>
    <div v-else-if="name">
        
    </div>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            required: true
        },
    },
    components: {
        
    }
}
</script>