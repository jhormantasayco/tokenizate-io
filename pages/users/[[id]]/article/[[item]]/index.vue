<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-sm-flex align-items-center justify-content-between mb-5">
              <NuxtLink :to="`/users/${influencer.id}`" :title="`Volver con ${influencer.name}`">
                <h4 class="font-size-20 font-medium">
                  <i class="fa fa-arrow-left mr-3"></i>
                  Detalle del articulo
                </h4>
              </NuxtLink>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-lg-4 flex">
        <div class="card">
          <div class="card-body pt-4">
            <img :src="product.image" :alt="product.name" :title="product.name" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="col-lg-8 flex">
        <div class="card">
          <div class="card-body p-4 d-flex align-content-between flex-wrap">
            <div class="w-100">
              <div class="mb-3 text-purple-600 font-medium">
                <i class="fa fa-map-marker"></i> Válido para todos los paises
              </div>
              <div class="mb-3">
                  <h4 class="font-semibold font-size-18">
                      {{ product.name }}
                  </h4>
              </div>
              <div class="mb-3">
                  {{ product.description }}
              </div>
              <div class="mb-3 font-bold font-size-18">
                  {{ product.amount }} ${{ influencer.money }}
              </div>
            </div>
            <div class="w-100">
              <div class="row flex">
                <div class="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <div class="input-group">
                      <span class="input-group-btn input-group-prepend">
                        <button class="btn btn-light px-3" type="button" @click="decrement()" title="Dismunuir">
                          -
                        </button>
                      </span>
                      <input type="number" class="form-control" placeholder="Ingrese la cantidad" min="1" v-model="qty">
                      <span class="input-group-btn input-group-append">
                        <button class="btn btn-light px-3" type="button" @click="increment()" title="Aumentar">
                          +
                        </button>
                      </span>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xl-3">
                  <button type="button" class="btn btn-warning font-medium px-5" @click="buy" title="Comprar">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Profile from '~/components/content/Profile/Base.vue'
import Buy from '~/components/content/Profile/Buy.vue'
import Marketplace from '~/components/content/Profile/Marketplace.vue'
import influencers from '~/assets/data/influencers.json'

export default {
    name: 'MainProfile',
    components: {
      Profile,
      Buy,
      Marketplace,
    },
    data: () => ({
      loading: true,
      influencers,
      influencer: {},
      product: {},
      qty: 1
    }),
    computed: {

    },
    async created() {
      const id = Number(this.$route.params.id)
      this.influencer = this.influencers.find(influencer => influencer.id === id)

      const productId = Number(this.$route.params.item)

      this.product = this.influencer.products.find(product => product.id === productId)
    },
    methods: {
      increment(){
        this.qty = this.qty + 1;
      },
      decrement(){
        if(this.qty > 1){
          this.qty = this.qty - 1;
        }
      },
      buy(){
        alert('[[ Comprar ]]')
      }
    },
  }
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>