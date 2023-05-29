<template>
    <div class="catalog__container">
        <h1>Catalog</h1>
        <div class="filter">
            <button @click="showAll">ВСЕ</button>
            <button @click="showOneCounter(1)">ОДНОКОНТУР</button>
            <button @click="showOneCounter(2)">ДВУ КОНТУР</button>

            <button @click="forWall()">Напольный</button>
            <button @click="forFloor()">Настенный</button>
        </div>
        <div class="catalog__box" v-if="allItems">
            <v-catalog-item
              v-for="product in PRODUCTS.kotli"    
              :key="product.id"       
              :product_data="product"    
            ></v-catalog-item>
        </div>
        <div class="catalog__box" v-if="filterCounter">
            <v-catalog-item
              v-for="product in filterByClass"    
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

    name: "v-catalog-kotli",
    components: {
        VCatalogItem
    },
    data() {
        return {
            allItems: true,
            filterCounter: false,
            isShow: false,
            installed: '',
            sortedProducts: [],
           
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),

    filterByClass() {
            let data = []
            let filtered = []
            function newData(allData, counter) {
                data = allData.kotli;
                filtered = data.filter(x => x.conturs == counter)
                data = filtered
            }
            newData(this.PRODUCTS, this.filterCounter);

            if (this.installed) {
                    let filteredByMotion = filtered.filter(x => x.install == this.installed)
                    data = filteredByMotion
            }
      return data
    },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
            ]),
            showAll() {
                this.installed = ''
                this.allItems = true;
                this.filterCounter = false;
            },

            showOneCounter(count) {
                this.allItems = false;
                this.filterCounter = count;
                this.installed = ''
            },
            forWall() {
                this.installed = 'wall'
            },
            forFloor() {
                this.installed = 'floor'
            }
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