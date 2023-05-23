<template>
    <div class="v-main-wrapper">
        <v-catalog></v-catalog>
        <v-cart></v-cart>
    </div>
</template>

<script>
import VCatalog from './v-catalog.vue'
import VCart from './v-cart.vue'

    export default {
        components: {
            VCatalog,
            VCart,
        },
        props: {},
        data() {
            return {
                title: 'main wrapper'
            }
        },
        computed: {},
        methods: {},
        mounted() {
            console.log('HI WOW')
        },
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
    }
</style>