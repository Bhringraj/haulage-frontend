<template>
    <div>
        <button v-if="name == 'simple'" class = "text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:opacity-70 sm:px-8">
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
    }
}
</script>