<template>
    <div>
        <button v-if="name == 'simple'" class="text-skin-base bg-skin-fill dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-skin-button-accent text-gray-800 dark:text-white font-bold py-2 px-4 rounded inline-flex items-center"
        :class="theme">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            theme: 'blue-theme'
        }
    },
}
</script>