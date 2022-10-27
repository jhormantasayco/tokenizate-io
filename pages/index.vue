<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-sm-flex align-items-center justify-content-between mb-5">
              <h4 class="font-size-22 font-medium">Explorar</h4>
            </div>
        </div>
    </div>

    <div class="row mb-5">
      <div class="col-10">
        <div class="input-group">
            <label class="input-group-text">
              <i class="fa fa-search"></i>
            </label>
            <input type="text" class="form-control" placeholder="Buscar por nombre o usuario">
        </div>
      </div>
      <div class="col-2">
        <div>
          <button class="btn btn-outline-secondary w-100 waves-effect text-bold">
            <i class="fa fa-filter"></i> Filtrar
          </button>
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
      }
    },
  }
</script>
<style>
</style>