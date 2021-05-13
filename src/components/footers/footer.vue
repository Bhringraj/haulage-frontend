<template>
    <div class="mt-4">
        <widget />
        <copy>
            &copy; 2021. GriffinTech Incs
        </copy>
    </div>
</template>

<script>
import copy from '@/components/footers/copyright.vue'
import widget from '@/components/widgets/widget.vue'

export default {
    components: {
        copy,
        widget
    }
}
</script>