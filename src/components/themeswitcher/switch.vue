<template>
    <div>
        <slot name="before"></slot> 
        <input type="checkbox" v-model="checked" @change="onChange" id="checkbox">
        <label for="checkbox" class="slider"></label>
        <label for="checkbox"><slot name="after"></slot></label>
    </div>
</template>

<script>
export default {
    props: {
        defaultChecked: {
            type: Boolean,
            default: false
        },
        themes: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            checked: this.defaultChecked
        }
    },
    methods: {
        onChange () {
            this.$emit('input', this.checked)
        }
    },
}
</script>

<style>
    
</style>