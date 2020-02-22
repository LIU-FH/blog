<template>
    <div class="container mx-auto py-20">
        <div>
            <md-badge v-for="(item, index) in 50" :key="index" color="blue300" class="my-3 mx-2" md-content="1"
                      md-dense>
                <md-button class="md-raised">Default</md-button>
            </md-badge>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-8">
            <md-content v-for="(item, index) in 20" :key="index" class="p-3 md-elevation-7">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="rounded-lg md:w-56"
                             src="https://cdn.pixabay.com/photo/2016/10/12/02/56/girl-1733352_1280.jpg"
                             alt="Woman paying for a purchase">
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6">
                        <a href="#"
                           class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding
                            customers for your new business</a>
                        <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here
                            are five ideas you can use to find your first customers.</p>
                        <mu-button flat color="primary">Primary</mu-button>
                        <mu-button flat color="secondary">Secondary</mu-button>
                    </div>
                </div>
            </md-content>
        </div>
        <div class="text-center pt-8">
            <md-button disabled>Disabled</md-button>
            <md-button>Disabled</md-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'index',
        data: () => ({
            active: 0
        }),
        methods: {
            handleClose() {
                window.alert('你点击了删除按钮')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>