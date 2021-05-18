<template>
    <div class="py-2">
        <!-- component -->
        <div v-if="name == 'first'">
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-auto">
                <div>
                    <img class="w-full h-56 object-cover object-center" src="https://res.cloudinary.com/griffintech/image/upload/v1591143903/samples/people/smiling-man.jpg" alt="avatar">
                    <div class="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-300">
                        <svg class="h-6 w-6 dark:text-black text-white fill-current" viewBox="0 0 20 20">
                            <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>            </svg>
                        <h1 class="mx-3 text-white dark:text-gray-800 font-semibold text-lg">102 Public Repos</h1>
                    </div>
                    <div class="py-4 px-6 dark:bg-gray-800">
                        <h1 class="text-2xl font-semibold dark:text-skin-base text-gray-800">Evan You</h1>
                        <p class="py-2 text-lg dark:text-skin-base text-gray-700">Something</p>
                        <div class="flex items-center mt-4 dark:text-skin-base text-gray-700">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                                <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>                </svg>
                            <h1 class="px-2 text-sm">10283287 Followers</h1>
                        </div>
                        <div class="flex items-center mt-4 dark:text-skin-base text-gray-700">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                                <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>                </svg>
                            <h1 class="px-2 text-sm">New Jersey</h1>
                        </div>
                        <div class="flex items-center mt-4 dark:text-skin-base text-gray-700">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                                <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
                            </svg>
                            <h1 class="px-2 text-sm">http://evanyou.me</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="name == 'git'">
            <!-- component -->
        <!-- This is an example component -->
            <div>
                <div class='flex space-x-2 w-full shadow-md rounded-lg overflow-hidden mx-auto'>
                    <div class="card  min-w-sm border transition-shadow shadow-xl hover:shadow-xl min-w-max">
                        <!---->
                        <div class="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" class="h-48 w-96"></div>
                        <div class="  card__media--aside "></div>
                        <div class="flex items-center p-4">
                            <div class="relative flex flex-col items-center w-full">
                                <div
                                    class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end min-w-max -top-16 bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                                    <img class="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt="">
                                    <div class="absolute"></div>
                                </div>
                                <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                                    <span class="text-md whitespace-nowrap text-gray-800 dark:text-white font-semibold">Brahim</span><span class="text-md whitespace-nowrap dark:text-gray-300 text-gray-600">boussadjra</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-300">
                                        I can't start my day without a coffee cup
                                    </p>
                                    <div class="py-2 flex items-center space-x-2">
                                        <btn class="hover:opacity-90" name="outline"><span class="mr-2"></span>FOLLOW<span class="ml-2"></span></btn> <btn class="text-white" name="simple">SPONSOR </btn>
                                        <!-- <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 px-4 py-1 items-center hover:shadow-lg"><span class="mr-2"></span>FOLLOW<span class="ml-2"></span></button><button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 items-center hover:shadow-lg"><span class="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span class="ml-2"></span></button> -->
                                    </div>
                                    <div
                                        class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                                        <span class="text-center px-2"><span class="font-bold dark:text-gray-200 text-gray-700">56</span><span class="dark:text-gray-200 text-gray-600"> followers</span></span><span class="text-center px-2"><span class="font-bold dark:text-gray-200 text-gray-700">112</span><span class="dark:text-gray-200 text-gray-600"> following</span></span><span class="text-center px-2"><span class="font-bold dark:text-gray-200 text-gray-700">27</span><span class="dark:text-gray-200 text-gray-600"> repos</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import btn from '@/components/buttons/button.vue'

export default {
    props: {
        name: {
            type: String,
            required: true
        },
    },
    components: {
        btn,
    }
}
</script>