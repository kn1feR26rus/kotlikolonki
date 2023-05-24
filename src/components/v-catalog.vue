<template>
    <div class="catalog__container">
        <h1>Catalog</h1>
        <div class="filter">
            <button @click="showAll">ВСЕ</button>
            <button @click="showOneCounter">ОДНОКОНТУР</button>
            <button @click="showTwoCounter">ДВУ КОНТУР</button>
        </div>
        <div class="catalog__box" v-if="allItems">
            <v-catalog-item
              v-for="product in PRODUCTS.oneCount"    
              :key="product.id"       
              :product_data="product"    
            ></v-catalog-item>
            <v-catalog-item
                v-for="product in PRODUCTS.twoCount"    
                :key="product.id"       
                :product_data="product"    
            ></v-catalog-item>
        </div>
        <div class="catalog__box" v-if="oneCounter">
            <v-catalog-item
              v-for="product in filterByClass"    
              :key="product.id"       
              :product_data="product"    
            ></v-catalog-item>
        </div>
        <div class="catalog__box" v-if="twoCounter">
            <v-catalog-item
              v-for="product in filterByClass2"    
              :key="product.id"       
              :product_data="product"    
            ></v-catalog-item>
        </div>
    </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item.vue"
import { mapActions, mapGetters } from "vuex";

export default {

    name: "v-catalog",
    components: {
        VCatalogItem
    },
    data() {
        return {
            allItems: true,
            oneCounter: false,
            twoCounter: false,
            isShow: false,
            sortedProducts: [],
           
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
        getAll() {
            let data = []
       
            function getAll() {
      
            }
            getAll(this.PRODUCTS);
      return data
    },

    filterByClass() {
            let data = []
            function newDate(allData, sorteredData) {
                data = allData.oneCount;
                sorteredData.map(function(item) {
                if (item.length) {
                    data = [];
                    data = allData.onetwoCount.filter(x => x.class == item)
                    console.log(sorteredData)
                } else {
                    data = allData.oneCount.concat(allData.oneCount);
                }
                });
            }
            newDate(this.PRODUCTS, this.sortedProducts);
      return data
    },
    filterByClass2() {
            let data = []
            function newDate(allData, sorteredData) {
                data = allData.twoCount;
                sorteredData.map(function(item) {
                if (item.length) {
                    data = [];
                    data = allData.twoCount.filter(x => x.class == item)
                    console.log(sorteredData)
                } else {
                    data = allData.twoCount.concat(allData.oneCount);
                }
                });
            }
            newDate(this.PRODUCTS, this.sortedProducts);
      return data
    },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
            ]),
            showAll() {
                this.allItems = true;
                this.oneCounter = false;
                this.twoCounter = false;
            },
            showOneCounter() {
                this.allItems = false;
                this.oneCounter = true;
                this.twoCounter = false;
            },
            showTwoCounter() {
                this.allItems = false;
                this.oneCounter = false;
                this.twoCounter = true;
            },
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data) {
                console.log('DATA ARRIVED');
            }
        })
    }
}
</script>

<style lang="scss">
    .catalog__container {
        width: 100%;
        display: flex;
        flex-direction: column;
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