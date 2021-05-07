<template>
    <div>
        <button v-if="name == 'simple-inverted'" class = "text-skin-inverted bg-skin-button-accent hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 text-base font-medium rounded-md shadow-sm">
            <slot></slot>
        </button>
        <button v-else-if="name == 'pill-inverted'" class = "text-skin-inverted bg-skin-button-accent hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 font-bold rounded-full">
            <slot></slot>
        </button>
        <button v-else-if="name == 'outline'" class = "bg-transparent hover:bg-skin-button-muted text-skin-inverted hover:text-skin-base py-3 px-4 font-semibold border border-skin-muted hover:border-transparent rounded">
            <slot></slot>
        </button>
        <div v-else-if="name == 'groups-inverted'" class = "inline-flex">
            <button class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 font-bold rounded-l">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-muted hover:text-skin-base py-3 px-4 font-bold rounded-r">
                <slot name="btn2"></slot> 
            </button>
        </div>
        <button v-else-if="name == 'simple'" class = "text-skin-base bg-skin-fill hover:bg-skin-button-muted py-3 px-4 text-base font-medium rounded-md shadow-sm">
            <slot></slot>
        </button>
        <button v-else-if="name == 'pill'" class = "text-skin-base bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-full">
            <slot></slot>
        </button>
        <div v-else-if="name == 'groups'" class = "inline-flex">
            <button class="text-skin-base bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-l">
                <slot name="btn1"></slot> 
            </button>
            <button class="text-skin-base bg-skin-fill hover:bg-skin-button-muted py-3 px-4 font-bold rounded-r">
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