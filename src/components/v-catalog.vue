<template>
    <div class="catalog__container">
        <h1>Catalog</h1>
        <div class="catalog__box">
            <v-catalog-item
                v-for="product in products"
                :key="product.id"
                :product_data="product"
            ></v-catalog-item>
        </div>
    </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue"

export default {

    name: "v-catalog",
    components: {
        VCatalogItem
    },
    data() {
        return {
            products: [
        {
            id: "01",
            company: "ItalTerm",
            conturs: 1,
            name: "CITY CLASS 25 FR",
            install: "floor",
            img: "oneContur/ItalTerm/25fr_1.webp"
        },
        {
            id: "02",
            company: "ItalTerm",
            conturs: 1,
            name: "CITY CLASS 30 FR",
            install: "wall",
            img: "oneContur/ItalTerm/25fr_2.webp"
        },
        {
            id: "03",
            company: "ItalTerm",
            conturs: 2,
            name: "CITY CLASS 35 FR",
            install: "floor",
            img: "oneContur/ItalTerm/25fr_3.webp"
        },
        {
            id: "04",
            company: "ItalTerm",
            conturs: 1,
            name: "CITY CLASS 30 FR",
            install: "wall",
            img: "oneContur/ItalTerm/25fr_4.webp"
        },
        {
            id: "05",
            company: "ItalTerm",
            conturs: 2,
            name: "CITY CLASS 30 FR",
            install: "wall",
            img: "oneContur/ItalTerm/25fr_5.webp"
        },
        {
            id: "06",
            company: "ItalTerm",
            conturs: 2,
            name: "CITY CLASS 30 FR",
            install: "floor",
            img: "oneContur/ItalTerm/25fr_6.webp"
        }
        
    ]
        }
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