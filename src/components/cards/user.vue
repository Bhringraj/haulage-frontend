<template>
    <div v-if="name == ''">
        <!-- component -->
        <div class="container mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center">
        
        <div class="w-full flex items-center p-2 rounded-xl shadow border">
            <div class="relative flex items-center space-x-4">
            <img src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4" alt="My profile" class="w-16 h-16 rounded-full">
            <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
            </div>
            <div class="flex-grow p-3">
            <div class="font-semibold">
                Antério Vieira da Silva Lima
            </div>
            <div class="text-sm text-gray-500">
                @ktquez sent a image . 2hr
            </div>
            </div>
            <div class="p-2">
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-4 h-4 rounded-full order-1">
            <!-- <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span> -->
            </div>
        </div>
        </div>
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