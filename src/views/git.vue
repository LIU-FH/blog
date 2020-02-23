<template>
    <div class="container mx-auto py-24">
        <div class="flex">
            <div class="flex-none w-3/12 mr-6">
                <md-content class="md-elevation-7">
                    <md-list>
                        <md-list-item v-for="(item,index) in 10" :key="index" to="/git">Router <code>/router/1</code>
                        </md-list-item>
                    </md-list>
                </md-content>
            </div>
            <div class="flex-1">
                <md-content v-for="(item, index) in 20" :key="index" class="p-3 mb-5 md-elevation-7">
                    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding
                        customers for your new business</a>
                    <p class="mt-5 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are
                        five
                        ideas you can use to find your first customers.</p>
                    <div class="mt-5">
                        <mu-chip v-for="(item,index) in 3" :key="index" class="mr-3">
                            default chip
                        </mu-chip>
                    </div>
                </md-content>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "git"
    }
</script>

<style scoped>

</style>