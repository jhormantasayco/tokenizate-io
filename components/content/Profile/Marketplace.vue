<template>
<div class="card">
    <div class="card-body p-4">
        <div class="mb-4">
            <h5 class="font-size-16 font-semibold mb-3">
                Descripción
            </h5>
            <div>
                {{ influencer.description }}
            </div>
        </div>
        <div class="mb-4">
            <h5 class="font-size-16 font-semibold mb-3">
                Etiquetas
            </h5>
            <div>
                <span v-for="(tag, index) in influencer.tags" :key="index" class="badge badge-soft-dark mr-3" :title="tag">
                    {{ tag }}
                </span>
            </div>
        </div>
        <div class="mb-4">
            <h5 class="font-size-16 font-semibold mb-3">
                Marketplace
            </h5>
            <div>
                <div class="row">
                    <div class="col-lg-6 flex" v-for="(product, index) in influencer.products" :key="index">
                        <Product :product="product" :influencer="influencer"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Product from '~/components/content/Product.vue'
export default {
    name: 'ProfileMarketplace',
    props: {
        influencer: {
            type: Object,
            required: true,
        },
    },
    components: {
        Product,
    },
    data: () => ({
    }),
    computed: {

    },
    async created() {
    },
    methods: {

    },
}
</script>
<style>
</style>