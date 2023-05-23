<template>
    <div>
        <h1 class="">CATALOG ROUTER</h1>
        <v-catalog></v-catalog>
    </div>
</template>

<script>
import VCatalog from '../components/v-catalog.vue'

    export default {
        components: {
            VCatalog,
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