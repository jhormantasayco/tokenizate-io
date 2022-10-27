<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-20">Explorar</h4>
            </div>
        </div>
    </div>
    <div class="row">
      <div v-for="(influencer, index) in influencers" :key="index" class="col-xl-4">
        <Card :influencer="influencer"></Card>
      </div>
    </div>
  </div>
</template>

<script>

  import Card from '~/components/content/Card'
  import influencers from '~/assets/data/influencers.json'

  export default {
    layout: 'default',
    name: 'Home',
    components: {
      Card
    },
    data: () => ({
      influencers
    }),
    mounted() {

    },
    methods: {

    },

    head () {
      return {
        title: 'Tokenizate.io | Home',
        bodyAttrs: {
          'data-topbar' : 'dark',
          'data-layout' : 'horizontal',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'Descripción de Tokenizate.io'
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
    },
  }
</script>
<style>
</style>