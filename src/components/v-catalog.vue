<template>
    <div class="catalog__container">
        <h1>Catalog</h1>
        <div class="catalog__box">
            <v-catalog-item
              v-for="product in this.$store.state.products"    
              :key="product.id"       
              :product_data="product"    
            ></v-catalog-item>
        </div>
    </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue"
import { mapActions } from "vuex";

export default {

    name: "v-catalog",
    components: {
        VCatalogItem
    },
    data() {
        return {
           
        }
    },
    computed: {},
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
            ]),
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API ()
    }
}
</script>

<style lang="scss">
    .catalog__container {
        width: 100%;

        h1 {
            margin: 20px auto;
            text-align: center;
            color: red;
        }

        .catalog__box {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
</style>