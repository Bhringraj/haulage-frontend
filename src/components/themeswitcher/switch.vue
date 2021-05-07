<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <slot name="before"></slot> 
            <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false" 
            @change="$emit('toggle')" 
            id="checkbox">
            <span class="toggler round"><slot name="after"></slot></span>
        </label>
        
    </div>
</template>

<script>
export default {
    props: {
        defaultChecked: {
            type: Boolean,
            default: false
        },
        mode: {
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
    .toggle {
        position: relative;
        display: inline-block;
        height: 34px;
        width: 70px;
    }

    .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggler {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .toggler::before {
        position: absolute;
        content: '🔆🌑'; 
        height: 36px;
        width: 36px;
        left: -6px;
        bottom: -1px;
        background: rgb(255, 0, 55);
    }

    input:checked + .toggler {
        background: palegreen;
    }

    input:focus + .toggler {
        box-shadow: 0 0 2px #2196f3;
    }

    input:checked + .toggler:before {
        -webkit-transform: translateX(41px);
        -ms-transform: translateX(41px);
        transform: translateX(41px);
    }

    .toggler.round {
        border-radius: 34px;
    }

    .toggler.round:before {
        border-radius: 50%;
    }

</style>