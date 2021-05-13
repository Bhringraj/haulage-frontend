<template>
    <div>
        <button v-if="name == 'simple-inverted'" class = "text-skin-inverted dark:bg-gray-800 bg-skin-button-accent dark:hover:bg-skin-button-muted hover:bg-skin-button-muted dark:hover:text-gray-800 hover:text-skin-base py-3 px-4 text-base font-medium rounded-md shadow-sm">
            <slot></slot>
        </button>
        <button v-else-if="name == 'pill-inverted'" class = "text-skin-inverted dark:bg-gray-800 bg-skin-button-accent dark:hover:bg-skin-button-muted hover:bg-skin-button-muted dark:hover:text-gray-800 hover:text-skin-base py-3 px-4 font-bold rounded-full">
            <slot></slot>
        </button>
        <button v-else-if="name == 'outline'" class = "bg-transparent text-skin-inverted py-3 px-4 font-semibold border-2 hover:border-opacity-80 border-skin-muted hover:shadow-md rounded">
            <slot></slot>
        </button>
        <button v-else-if="name == 'pill-outline'" class = "bg-transparent text-skin-inverted py-3 px-4 font-semibold border-2 hover:border-opacity-80 border-skin-muted hover:shadow-md rounded-full">
            <slot></slot>
        </button>
        <div v-else-if="name == 'group-inverted'" class = "inline-flex">
            <button class="text-skin-inverted dark:bg-gray-800 dark:hover:text-gray-800 bg-skin-button-accent dark:hover:bg-skin-button-muted hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 font-bold rounded-l">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-inverted dark:bg-gray-800 dark:hover:text-gray-800 bg-skin-button-accent dark:hover:bg-skin-button-muted hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 font-bold rounded-r">
                <slot name="btn2"></slot> 
            </button>
        </div>
        <button v-else-if="name == 'simple'" class = "text-skin-base dark:text-gray-800 bg-skin-fill hover:bg-skin-button-muted py-3 px-4 text-base font-medium rounded-md shadow-sm">
            <slot></slot>
        </button>
        <button v-else-if="name == 'pill'" class = "text-skin-base dark:text-gray-800 bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-full">
            <slot></slot>
        </button>
        <div v-else-if="name == 'group'" class = "inline-flex">
            <button class="text-skin-base dark:text-gray-800 bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-l">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-base dark:text-gray-800 bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-r">
                <slot name="btn2"></slot> 
            </button>
        </div>
        <div v-else-if="name == 'group-outline'" class = "inline-flex">
            <button class="text-skin-inverted bg-transparent border-2 border-skin-muted hover:shadow-md hover:opacity-80 py-3 px-4 font-bold rounded-l">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-inverted bg-transparent border-2 border-skin-muted hover:shadow-md hover:opacity-80 py-3 px-4 font-bold rounded-r">
                <slot name="btn2"></slot> 
            </button>
        </div>
        <div v-else-if="name == 'group-outline-pill'" class = "inline-flex">
            <button class="text-skin-inverted bg-transparent border-2 border-skin-muted hover:shadow-md hover:opacity-80 py-3 px-4 font-bold rounded-l-full">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-inverted bg-transparent border-2 border-skin-muted hover:shadow-md hover:opacity-80 py-3 px-4 font-bold rounded-r-full">
                <slot name="btn2"></slot> 
            </button>
        </div>
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