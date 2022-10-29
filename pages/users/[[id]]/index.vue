<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="d-sm-flex align-items-center justify-content-between mb-5">
              <NuxtLink :to="`/`" title="Explorar">
                <h4 class="font-size-20 font-medium">
                  <i class="fa fa-arrow-left mr-3"></i>
                  Perfil del creador
                </h4>
              </NuxtLink>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-4">
        <Profile :influencer="influencer"/>
        <Buy :influencer="influencer"/>
      </div>
      <div class="col-8">
        <Marketplace :influencer="influencer"/>
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
    }),
    computed: {

    },
    async created() {

    },
    methods: {

    },
    computed: {
      influencer(){
        const id = Number(this.$route.params.id)
        return this.influencers.find(influencer => influencer.id === id) || {}
      }
    },
  }
</script>